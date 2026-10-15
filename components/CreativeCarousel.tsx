'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { CreativeAsset } from '@/data/creativeCaseStudies';
import styles from './CreativeCarousel.module.css';

export function CreativeCarousel({
	items,
	clientName,
	objective,
	direction,
}: {
	items: CreativeAsset[];
	clientName: string;
	objective: string;
	direction: string;
}) {
	const [paused, setPaused] = useState(false);
	const [selected, setSelected] = useState<number | null>(null);

	useEffect(() => {
		if (selected === null) return;
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setSelected(null);
		};
		window.addEventListener('keydown', closeOnEscape);
		return () => window.removeEventListener('keydown', closeOnEscape);
	}, [selected]);

	const slides = (duplicate: boolean) =>
		items.map((item, index) => (
			<button
				type="button"
				className={styles.card}
				key={`${duplicate ? 'copy-' : ''}${item.src}`}
				onClick={() => setSelected(index)}
				tabIndex={duplicate ? -1 : undefined}
				aria-label={`${clientName}, selected creative ${index + 1}. Open details`}
			>
				<img src={item.src} alt={duplicate ? '' : item.alt} draggable="false" />
				<span>CREATIVE {String(index + 1).padStart(2, '0')}</span>
			</button>
		));

	return (
		<>
			<div className={styles.carouselHeader}>
				<p>SELECTED WORK / {items.length} PIECES</p>
				<button
					type="button"
					className={styles.pauseButton}
					onClick={() => setPaused((value) => !value)}
					aria-pressed={paused}
				>
					{paused ? 'RESUME MOTION' : 'PAUSE MOTION'}
				</button>
			</div>
			<div
				className={`${styles.viewport} ${paused ? styles.paused : ''}`}
				aria-label={`${clientName} creative carousel`}
			>
				<div className={styles.track}>
					<div className={styles.lane}>{slides(false)}</div>
					<div className={styles.lane} aria-hidden="true">{slides(true)}</div>
				</div>
			</div>
			<p className={styles.hint}>
				Select any creative to explore its design thinking. The gallery pauses on hover or focus.
			</p>

			{selected !== null && (
				<div
					className={styles.modalBackdrop}
					role="presentation"
					onClick={() => setSelected(null)}
				>
					<section
						className={styles.modal}
						role="dialog"
						aria-modal="true"
						aria-labelledby="creative-detail-title"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							className={styles.closeButton}
							onClick={() => setSelected(null)}
							aria-label="Close creative details"
						>
							<X size={18} />
						</button>
						<div className={styles.modalArtwork}>
							<img src={items[selected].src} alt={items[selected].alt} />
						</div>
						<div className={styles.modalCopy}>
							<p>DESIGN NOTES / {clientName.toUpperCase()}</p>
							<h2 id="creative-detail-title">
								Selected creative {String(selected + 1).padStart(2, '0')}
							</h2>
							<dl>
								<div><dt>Objective</dt><dd>{objective}</dd></div>
								<div><dt>Approach</dt><dd>{direction}</dd></div>
							</dl>
						</div>
					</section>
				</div>
			)}
		</>
	);
}
