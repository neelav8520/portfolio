'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { Project } from '@/data/projects';

export function Gallery({ items }: { items: readonly Project[] }) {
	const imageProjects = items.filter(
		(item): item is Project & { image: string } => Boolean(item.image)
	);
	const track = useRef<HTMLDivElement>(null);
	const [x, setX] = useState(0);
	const paused = useRef(false);
	const drag = useRef(false);
	const start = useRef(0);
	const base = useRef(0);
	const [selected, setSelected] = useState<(Project & { image: string }) | null>(null);

	useEffect(() => {
		let id: number;
		let last = performance.now();

		const loop = (now: number) => {
			const dt = Math.min(32, now - last);
			last = now;

			if (!paused.current && !drag.current) {
				setX((value) => {
					let next = value - dt * 0.035;
					const half = (track.current?.scrollWidth || 1) / 2;
					if (Math.abs(next) > half) next = 0;
					return next;
				});
			}

			id = requestAnimationFrame(loop);
		};

		id = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(id);
	}, []);

	return (
		<>
			<div
				className="overflow-hidden -mx-5 md:-mx-10"
				onMouseEnter={() => (paused.current = true)}
				onMouseLeave={() => (paused.current = false)}
			>
				<div
					ref={track}
					style={{ transform: `translate3d(${x}px,0,0)` }}
					onPointerDown={(event) => {
						drag.current = true;
						start.current = event.clientX;
						base.current = x;
						event.currentTarget.setPointerCapture(event.pointerId);
					}}
					onPointerMove={(event) => {
						if (drag.current) setX(base.current + event.clientX - start.current);
					}}
					onPointerUp={() => (drag.current = false)}
					className="flex gap-5 w-max cursor-grab active:cursor-grabbing py-3"
				>
					{[...imageProjects, ...imageProjects].map((item, index) => (
						<button
							onClick={() => setSelected(item)}
							key={`${item.title}-${index}`}
							className="relative w-[280px] md:w-[390px] aspect-[4/3] shrink-0 overflow-hidden border border-[#c69cff]/15 group text-left"
						>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover group-hover:scale-105 transition duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
							<div className="absolute left-5 bottom-5">
								<div className="text-[9px] tracking-[.2em] text-[#c69cff]">
									{item.category}
								</div>
								<div className="text-xl mt-1">{item.title}</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{selected && (
				<div
					className="fixed inset-0 z-[180] bg-black/80 backdrop-blur-md p-5 grid place-items-center"
					onClick={() => setSelected(null)}
				>
					<div
						className="relative max-w-4xl w-full bg-[#0b0a10] border border-[#c69cff]/25 p-4"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 grid place-items-center"
							onClick={() => setSelected(null)}
							aria-label="Close image"
						>
							<X size={16} />
						</button>
						<div className="relative aspect-video">
							<Image src={selected.image} alt={selected.title} fill className="object-contain" />
						</div>
						<div className="p-4">
							<div className="text-[9px] tracking-[.2em] text-[#c69cff]">
								{selected.category}
							</div>
							<h3 className="text-2xl mt-2">{selected.title}</h3>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
