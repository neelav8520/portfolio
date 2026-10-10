import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
	ArrowLeft,
	ArrowRight,
	ExternalLink,
	Globe2,
	Instagram,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { AnimatedMetric, CaseStudyReveal } from '@/components/CaseStudyMotion';
import styles from './case-study.module.css';
import { meta, projects, Slug } from '@/data/projects';

export function generateStaticParams() {
	return Object.entries(projects).flatMap(([slug, clients]) =>
		clients.map((client) => ({ slug, client: client.slug }))
	);
}

export default function ClientWorkPage({
	params,
}: {
	params: { slug: string; client: string };
}) {
	if (!(params.slug in projects)) notFound();

	const categorySlug = params.slug as Slug;
	const category = meta[categorySlug];
	const client = projects[categorySlug].find(
		(project) => project.slug === params.client
	);
	if (!client) notFound();

	const isSocial = categorySlug === 'social-media';
	const isSeo = categorySlug === 'seo';
	const isMetaAds = categorySlug === 'meta-ads';
	const isCreatives = categorySlug === 'creatives';

	if (isCreatives) {
		return (
			<main className="min-h-screen px-5 pb-24 pt-36 md:px-10">
				<div className="mx-auto max-w-7xl">
					<a
						href={`/work/${categorySlug}`}
						className="inline-flex items-center gap-2 text-[10px] tracking-[.18em] text-[#a9a5b2] transition hover:text-white"
					>
						<ArrowLeft size={13} /> {category.title} / CLIENT WORK
					</a>

					<div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-end">
						<Reveal>
							<div className="text-[10px] tracking-[.28em] text-[#c69cff]">
								WORK / {category.title}
							</div>
							<h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
								{client.title}
							</h1>
							{client.headline && (
								<p className="mt-6 text-2xl font-medium text-[#d8c0f4] md:text-3xl">
									{client.headline}
								</p>
							)}
						</Reveal>
					</div>
				</div>
			</main>
		);
	}

	if (!isSocial && !isSeo && !isMetaAds) notFound();

	const clientUrl = client.url?.replace(/^https?:\/\//, '').replace(/\/$/, '');

	return (
		<main className={styles.shell}>
			<div className={styles.container}>
				<a
					href={`/work/${categorySlug}`}
					className={styles.backLink}
				>
					<ArrowLeft size={13} /> {category.title} / CLIENT WORK
				</a>

				{isSocial && (
					<>
						<section className={styles.heroGrid}>
							<CaseStudyReveal className={styles.heroCopy}>
								<p className={styles.eyebrow}>SOCIAL MEDIA / CLIENT CASE STUDY</p>
								<h1 className={styles.title}>{client.title}</h1>
								<p className={styles.lede}>{client.description}</p>
								<div className={styles.heroMeta}>
									<span className={styles.pill}>INSTAGRAM PROFILE WORK</span>
									<span className={styles.pill}>QUALITATIVE SHOWCASE</span>
								</div>
								{client.url && (
									<a
										href={client.url}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.action}
									>
										<Instagram size={15} />
										VIEW INSTAGRAM PROFILE
										<ExternalLink size={13} />
									</a>
								)}
							</CaseStudyReveal>

							{client.image && (
								<CaseStudyReveal className={styles.mediaStage} delay={0.12}>
									<div className={styles.device}>
										<div className={styles.deviceScreen}>
											<Image
												src={client.image}
												alt={`${client.title} Instagram profile screenshot`}
												fill
												priority
												sizes="(max-width: 760px) 72vw, 322px"
												className="object-contain"
											/>
										</div>
									</div>
									<p className={styles.mediaCaption}>SUPPLIED INSTAGRAM PROFILE SCREENSHOT</p>
								</CaseStudyReveal>
							)}
						</section>

						<section className={styles.contentSection}>
							<CaseStudyReveal className={styles.sectionHeading}>
								<p className={styles.eyebrow}>CONFIRMED PROJECT SCOPE</p>
								<h2 className={styles.sectionTitle}>What I Worked On</h2>
								<p className={styles.sectionCopy}>
									The available project record confirms social media content and Instagram profile work for this client.
								</p>
							</CaseStudyReveal>
							<div className={styles.scopeGrid}>
								<CaseStudyReveal delay={0.04}>
									<div className={styles.scopeCard}>
										<p className={styles.scopeLabel}>CONTENT</p>
										<p className={styles.scopeText}>Social media content</p>
									</div>
								</CaseStudyReveal>
								<CaseStudyReveal delay={0.1}>
									<div className={styles.scopeCard}>
										<p className={styles.scopeLabel}>PROFILE</p>
										<p className={styles.scopeText}>Instagram profile work</p>
									</div>
								</CaseStudyReveal>
							</div>
							<CaseStudyReveal delay={0.12}>
								<div className={styles.notice}>
									<span className={styles.noticeMark} aria-hidden="true" />
									<div>
										<p className={styles.noticeTitle}>INSTAGRAM INSIGHTS NOT PROVIDED</p>
										<p className={styles.noticeText}>
											The profile screenshot is a visual sample, not Insights reporting. No reach, impressions, visits, engagement, or growth metrics are claimed here.
										</p>
									</div>
								</div>
							</CaseStudyReveal>
						</section>
					</>
				)}

				{isSeo && (
					<>
						<section className={styles.heroGrid}>
							<CaseStudyReveal className={styles.heroCopy}>
								<p className={styles.eyebrow}>SEO / SEARCH VISIBILITY SNAPSHOT</p>
								<h1 className={styles.title}>{client.title}</h1>
								<p className={styles.lede}>{client.description}</p>
								{client.url && (
									<a
										href={client.url}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.action}
									>
										<Globe2 size={15} />
										VISIT WEBSITE
										<ExternalLink size={13} />
									</a>
								)}
							</CaseStudyReveal>

							{client.image && (
								<CaseStudyReveal className={styles.mediaStage} delay={0.12}>
									<div className={styles.browserFrame}>
										<div className={styles.browserBar}>
											<span className={styles.browserDot} aria-hidden="true" />
											<span>GOOGLE SEARCH / MOBILE SNAPSHOT</span>
										</div>
										<div className={styles.browserImage}>
											<Image
												src={client.image}
												alt={`${client.title} supplied mobile search screenshot`}
												fill
												priority
												sizes="(max-width: 760px) 100vw, 400px"
												className="object-contain"
											/>
										</div>
									</div>
									<p className={styles.mediaCaption}>SUPPLIED SEARCH SCREENSHOT / {clientUrl}</p>
								</CaseStudyReveal>
							)}
						</section>

						<section className={styles.contentSection}>
							<CaseStudyReveal className={styles.sectionHeading}>
								<p className={styles.eyebrow}>EVIDENCE AND SCOPE</p>
								<h2 className={styles.sectionTitle}>On-page SEO work</h2>
								<p className={styles.sectionCopy}>
									The project record identifies on-page SEO work. The supplied mobile search screenshot is shown as a snapshot, not as ranking-history or performance reporting.
								</p>
							</CaseStudyReveal>
							<div className={styles.scopeGrid}>
								<CaseStudyReveal delay={0.04}>
									<div className={styles.scopeCard}>
										<p className={styles.scopeLabel}>CONFIRMED WORK</p>
										<p className={styles.scopeText}>On-page SEO</p>
									</div>
								</CaseStudyReveal>
								<CaseStudyReveal delay={0.1}>
									<div className={styles.scopeCard}>
										<p className={styles.scopeLabel}>EVIDENCE INCLUDED</p>
										<p className={styles.scopeText}>One supplied mobile search screenshot</p>
									</div>
								</CaseStudyReveal>
							</div>
							<CaseStudyReveal delay={0.12}>
								<div className={styles.notice}>
									<span className={styles.noticeMark} aria-hidden="true" />
									<div>
										<p className={styles.noticeTitle}>SEARCH PERFORMANCE DATA NOT PROVIDED</p>
										<p className={styles.noticeText}>
											No verified keyword positions, clicks, impressions, optimization totals, or reporting period were supplied for this client.
										</p>
									</div>
								</div>
							</CaseStudyReveal>
						</section>
					</>
				)}

				{isMetaAds && (
					<>
						<section className={styles.metaHero}>
							<CaseStudyReveal className={styles.metaHeading}>
								<p className={styles.eyebrow}>META ADS / CAMPAIGN CASE STUDY</p>
								<h1 className={styles.title}>{client.title}</h1>
								{client.headline && (
									<div className={styles.leadHighlight}>
										<p className={styles.scopeLabel}>USER-REPORTED TOTAL / NOT VERIFIED BY EXPORT</p>
										<p className={styles.leadValue}>{client.headline}</p>
										<p className={styles.noticeText}>
											The available Meta Ads export does not cover the full period needed to verify this overall figure. Campaign totals below are limited to the available reporting period.
										</p>
									</div>
								)}
								{!client.headline && client.description && (
									<p className={styles.lede}>{client.description}</p>
								)}
							</CaseStudyReveal>
						</section>

						<section className={styles.contentSection}>
							<CaseStudyReveal>
								<div className={styles.metricsHeader}>
									<div>
										<p className={styles.eyebrow}>VERIFIED CAMPAIGN TOTALS</p>
										<h2 className={styles.sectionTitle}>Campaign overview</h2>
									</div>
									<p className={styles.period}>
										{client.period ?? 'REPORTING PERIOD NOT PROVIDED'}
									</p>
								</div>
							</CaseStudyReveal>

							{client.metrics && (
								<div className={styles.metricsGrid}>
									{client.metrics.map((metric, index) => (
										<CaseStudyReveal key={metric.label} delay={index * 0.055}>
											<div className={styles.metricCard}>
												<p className={styles.metricLabel}>{metric.label}</p>
												<p className={styles.metricValue}>
													<AnimatedMetric value={metric.value} />
												</p>
												{metric.context && (
													<p className={styles.metricContext}>{metric.context}</p>
												)}
											</div>
										</CaseStudyReveal>
									))}
								</div>
							)}

							<CaseStudyReveal delay={0.1}>
								<div className={styles.notice}>
									<span className={styles.noticeMark} aria-hidden="true" />
									<div>
										<p className={styles.noticeTitle}>CAMPAIGN-LEVEL TOTALS ONLY</p>
										<p className={styles.noticeText}>
											The available data does not include a time series, so no trend chart is shown. No actual ad creative preview was included in the available project assets.
										</p>
									</div>
								</div>
							</CaseStudyReveal>
						</section>
					</>
				)}

				<div className={styles.closingLinks}>
					<a href={`/work/${categorySlug}`} className={styles.closingLink}>
						<ArrowLeft size={13} className="mr-2 inline" />
						ALL {category.title} CLIENTS
					</a>
					<a href="/#contact" className={styles.closingLink}>
						START A PROJECT <ArrowRight size={13} className="ml-2 inline" />
					</a>
				</div>
			</div>
		</main>
	);
}