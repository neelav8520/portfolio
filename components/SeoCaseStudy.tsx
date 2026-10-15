import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Search } from 'lucide-react';
import styles from './SeoCaseStudy.module.css';
import type { SeoCaseStudyData } from '@/data/seoCaseStudies';

function SearchPreview({ study }: { study: SeoCaseStudyData }) {
	return (
		<div className={styles.device} aria-label={`Portfolio search-result recreation for ${study.title}`}>
			<div className={styles.deviceTop}>
				<span>9:41</span>
				<span aria-hidden="true">● ● ●</span>
			</div>
			<div className={styles.searchBar}>
				<Search size={15} aria-hidden="true" />
				<span>{study.query}</span>
				<span className={styles.searchMark} aria-hidden="true">×</span>
			</div>
			<div className={styles.resultPage}>
				<div className={styles.resultDomain}>
					<span className={styles.favicon}>{study.title.slice(0, 1)}</span>
					<span>
						<strong>{study.title}</strong>
						<small>{study.url.replace(/^https?:\/\//, '')}</small>
					</span>
				</div>
				<p className={styles.resultTitle}>{study.searchTitle}</p>
				<p className={styles.resultDescription}>{study.searchDescription}</p>
				<div className={styles.resultLinks} aria-hidden="true">
					<span>Explore the collection</span>
					<span>Shop products</span>
				</div>
				<div className={styles.previewLabel}>
					Portfolio recreation · not a Google screenshot
				</div>
			</div>
			<div className={styles.deviceBar} aria-hidden="true" />
		</div>
	);
}

export function SeoCaseStudy({ study }: { study: SeoCaseStudyData }) {
	return (
		<main className={styles.page}>
			<div className={styles.container}>
				<Link href="/work/seo" className={styles.back}>
					<ArrowLeft size={14} /> SEO / ALL CLIENTS
				</Link>

				<header className={styles.hero}>
					<div className={styles.heroCopy}>
						<p className={styles.eyebrow}>SEARCH OPTIMIZATION / CASE STUDY</p>
						<h1>{study.title}</h1>
						<p className={styles.lede}>{study.introduction}</p>
						<div className={styles.meta}>
							<span>PROJECT PERIOD</span>
							<strong>{study.period}</strong>
						</div>
						<a className={styles.visit} href={study.url} target="_blank" rel="noreferrer">
							VISIT WEBSITE <ArrowUpRight size={15} />
						</a>
					</div>
					<div className={styles.heroVisual}>
						<SearchPreview study={study} />
						<figure className={styles.sourceAsset}>
							<Image
								src={study.projectImage}
								alt={`${study.title} supplied mobile search-result reference`}
								width={591}
								height={1280}
								sizes="(max-width: 800px) 82vw, 240px"
							/>
							<figcaption>Supplied project image · visual reference</figcaption>
						</figure>
					</div>
				</header>

				{study.highlight && (
					<section className={styles.ranking} aria-label="Historical ranking achievement">
						<div className={styles.rankingIndex}>01 / DOCUMENTED ACHIEVEMENT</div>
						<p className={styles.rankingValue}>#1</p>
						<div>
							<p className={styles.rankingTitle}>{study.highlight}</p>
							<p className={styles.rankingFootnote}>
								Historical report-backed result. Current ranking has not been verified.
							</p>
						</div>
					</section>
				)}

				<section className={styles.section}>
					<div className={styles.sectionHeading}>
						<p className={styles.eyebrow}>SEARCH VISIBILITY</p>
						<h2>Reported performance</h2>
						<p>
							{study.metricNote ??
								`Search Console reporting period: ${study.period}. Figures are shown as supplied.`}
						</p>
					</div>
					<div className={styles.metrics}>
						{study.metrics.map((metric, index) => (
							<article className={styles.metric} key={metric.label}>
								<span>0{index + 1}</span>
								<p>{metric.label}</p>
								<strong>{metric.value}</strong>
							</article>
						))}
					</div>
					{study.optimization && (
						<div className={styles.optimization}>
							<span>ON-PAGE WORK</span>
							<strong>{study.optimization}</strong>
						</div>
					)}
				</section>

				<section className={styles.story}>
					<div>
						<p className={styles.eyebrow}>PROJECT SCOPE</p>
						<h2>Built around the product page</h2>
					</div>
					<p>{study.work}</p>
				</section>

				{study.gscImage && (
					<section className={styles.evidence}>
						<div className={styles.evidenceCopy}>
							<p className={styles.eyebrow}>SOURCE EVIDENCE</p>
							<h2>Search Console snapshot</h2>
							<p>
								Original supplied evidence, displayed without recreating or altering its data.
								The image retains its original proportions.
							</p>
							<span>{study.period}</span>
						</div>
						{study.gscDimensions && (
							<figure className={styles.evidenceImage}>
								<Image
									src={study.gscImage}
									alt={`${study.title} original Google Search Console performance screenshot`}
									width={study.gscDimensions.width}
									height={study.gscDimensions.height}
									sizes="(max-width: 900px) 100vw, 58vw"
								/>
								<figcaption>Original Google Search Console screenshot</figcaption>
							</figure>
						)}
					</section>
				)}

				<nav className={styles.footerNav} aria-label="SEO case-study navigation">
					<Link href="/work/seo"><ArrowLeft size={14} /> BACK TO SEO WORK</Link>
					<Link href="/#contact">DISCUSS A PROJECT <ArrowUpRight size={14} /></Link>
				</nav>
			</div>
		</main>
	);
}
