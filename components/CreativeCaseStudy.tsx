import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CreativeCarousel } from '@/components/CreativeCarousel';
import type { CreativeCaseStudyData } from '@/data/creativeCaseStudies';
import styles from './CreativeCaseStudy.module.css';

export function CreativeCaseStudy({ study }: { study: CreativeCaseStudyData }) {
	return (
		<main className={styles.page}>
			<div className={styles.container}>
				<Link href="/work/creatives" className={styles.back}>
					<ArrowLeft size={14} /> CREATIVES / ALL CLIENTS
				</Link>

				<header className={styles.hero}>
					<div className={styles.heroCopy}>
						<p className={styles.eyebrow}>CREATIVE STRATEGY / SELECTED PROJECT</p>
						<h1>{study.title}</h1>
						<p className={styles.category}>{study.category}</p>
						<p className={styles.introduction}>{study.introduction}</p>
						<div className={styles.role}>
							<span>ROLE</span><strong>{study.role}</strong>
						</div>
					</div>
				</header>

				{study.videoOnly ? (
					<section className={styles.reels} aria-labelledby="selected-work">
						<div className={styles.sectionHeading}>
							<p className={styles.eyebrow}>SELECTED WORK / THREE REELS</p>
							<h2 id="selected-work">Video edits</h2>
							<p>Three supplied reels, with native controls and metadata-first loading.</p>
						</div>
						<div className={styles.videoGrid}>
							{study.assets.map((asset, index) => (
								<figure className={styles.videoCard} key={asset.src}>
									<video controls playsInline preload="metadata" aria-label={asset.alt}>
										<source src={asset.src} type="video/mp4" />
										Your browser does not support embedded video.
									</video>
									<figcaption><span>REEL 0{index + 1}</span> Little Wings · video edit</figcaption>
								</figure>
							))}
						</div>
					</section>
				) : (
					<section className={styles.selectedWork} aria-labelledby="selected-work">
						<div className={styles.sectionHeading}>
							<p className={styles.eyebrow}>SELECTED WORK / ORIGINAL PROJECT ASSETS</p>
							<h2 id="selected-work">Creative gallery</h2>
							<p>Explore the supplied designs; artwork is shown at its original aspect ratio.</p>
						</div>
						<CreativeCarousel
							items={study.assets}
							clientName={study.title}
							objective={study.objective}
							direction={study.direction}
						/>
					</section>
				)}

				<section className={styles.narrative} aria-label="Creative case-study narrative">
					<article className={styles.storyCard}>
						<span>01 / THE BRIEF</span>
						<h2>Project objective</h2>
						<p>{study.objective}</p>
					</article>
					<article className={styles.storyCard}>
						<span>02 / CREATIVE DIRECTION</span>
						<h2>Design strategy</h2>
						<p>{study.direction}</p>
					</article>
					<article className={styles.storyCard}>
						<span>03 / COMMUNICATION</span>
						<h2>Visual hierarchy</h2>
						<p>{study.hierarchy}</p>
					</article>
					<article className={styles.storyCard}>
						<span>04 / INTENT</span>
						<h2>Marketing thinking</h2>
						<p>{study.marketing}</p>
					</article>
				</section>

				<section className={styles.toolsTakeaway}>
					<div className={styles.tools}>
						<p className={styles.eyebrow}>TOOLS USED</p>
						<h2>Creative workflow</h2>
						<div className={styles.toolList}>
							{study.tools.map((tool) => <span key={tool}>{tool}</span>)}
						</div>
					</div>
					<div className={styles.takeaway}>
						<p className={styles.eyebrow}>PROJECT TAKEAWAY</p>
						<p>{study.takeaway}</p>
					</div>
				</section>

				<nav className={styles.footerNav} aria-label="Creative case-study navigation">
					<Link href="/work/creatives"><ArrowLeft size={14} /> BACK TO CREATIVE WORK</Link>
					<Link href="/#contact">DISCUSS A PROJECT <ArrowUpRight size={14} /></Link>
				</nav>
			</div>
		</main>
	);
}
