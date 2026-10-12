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

type SocialMetric = {
	label: string;
	value: string;
	context?: string;
};

const socialClientDetails: Record<
	string,
	{
		description: string;
		period: string;
		responsibilities: string[];
		metrics: SocialMetric[];
		posters?: string[];
		posterDirectory?: string;
	}
> = {
	spictex: {
		description:
			'Social media management across Instagram, Facebook, YouTube and LinkedIn with daily posting, audience-ready captions, trending audio support and campaign coordination.',
		period: 'May 1–October 12, 2026',
		responsibilities: [
			'Social media management across Instagram, Facebook, YouTube and LinkedIn.',
			'Daily posting and scheduling.',
			'Captions, hashtags and trending audio selection for reels.',
			'Profile management, content planning and campaign support.',
		],
		metrics: [
			{ label: 'Views', value: '30,653,126' },
			{ label: 'Reach', value: '17.7M' },
			{ label: 'Content interactions', value: '47.4K' },
			{ label: 'Instagram link clicks', value: '19.1K' },
			{ label: 'Profile visits', value: '23.9K' },
			{ label: 'Follows', value: '3.1K' },
		],
		posters: ['poster 1.png', 'poster 2.png', 'poster 3.jpg'],
	},
	hazbel: {
		description:
			'Instagram social media handling with content scheduling, captioning, hashtag strategy and profile maintenance to keep the brand consistent and active.',
		period: 'May 1–October 12, 2026',
		responsibilities: [
			'Instagram social media handling.',
			'Posting and scheduling.',
			'Captions and hashtags.',
			'Profile management and related social media tasks.',
		],
		metrics: [
			{ label: 'Views', value: '32,898,860' },
			{ label: 'Reach', value: '15.4M' },
			{ label: 'Content interactions', value: '25.3K' },
			{ label: 'Instagram link clicks', value: '39.9K' },
			{ label: 'Profile visits', value: '46.7K' },
			{ label: 'Follows', value: '1.9K' },
		],
	},
	'elevate-signature-salon': {
		description:
			'Managed the Instagram presence with scheduled content, creative support, optimized bio and highlights while maintaining steady campaign visibility for the salon brand.',
		period: 'February 1–July 31, 2026',
		responsibilities: [
			'Instagram account handling.',
			'Posting and scheduling.',
			'Captions and hashtags.',
			'Campaign support.',
			'Google Business Profile posting.',
			'Instagram bio optimization.',
			'Highlight maintenance.',
		],
		metrics: [
			{ label: 'Views', value: '2,109,312' },
			{ label: 'Reach', value: '820.1K' },
			{ label: 'Content interactions', value: '9.6K' },
			{ label: 'Instagram link clicks', value: '6.3K' },
			{ label: 'Profile visits', value: '10.4K' },
			{ label: 'Follows', value: '612' },
		],
	},
	'square-by-square': {
		description:
			'Handled Instagram content strategy and execution with original ideas, festive creativity, poster and carousel design, and consistent publishing for an engaging community presence.',
		period: '90-day Instagram Insights snapshot — exact dates unavailable.',
		responsibilities: [
			'Instagram social media handling.',
			'Original content ideas.',
			'Poster and carousel design.',
			'Festival creatives.',
			'Posting and scheduling.',
			'Captions and hashtags.',
			'Instagram bio optimization.',
			'Highlight maintenance.',
		],
		metrics: [
			{ label: 'Views', value: '8,136' },
			{ label: 'Content interactions', value: '370' },
			{ label: 'Profile visits', value: '259' },
			{ label: 'Reels views', value: 'approx. 3K' },
			{ label: 'Post views', value: 'approx. 2.8K' },
			{ label: 'Story views', value: 'approx. 2.4K' },
			{ label: 'Bio-link taps', value: '0' },
		],
		posters: ['poster 1.jpg', 'poster 2.jpg', 'poster 3.jpg'],
	},
	hybrin: {
		description:
			'Managed the brand’s Instagram presence with poster and carousel creation, captioning, bio refinement and consistent posting rhythm to support profile visibility and conversion touchpoints.',
		period: '90-day Instagram Insights snapshot — exact dates unavailable.',
		responsibilities: [
			'Instagram social media handling.',
			'Poster and carousel design.',
			'Posting and scheduling.',
			'Captions and hashtags.',
			'Instagram bio optimization.',
			'Highlight maintenance.',
		],
		metrics: [
			{ label: 'Views', value: '10,436' },
			{ label: 'Content interactions', value: '308' },
			{ label: 'Viewers', value: '4,331' },
			{ label: 'Profile visits', value: '279' },
			{ label: 'Bio-link taps', value: '43' },
			{ label: 'Reels views', value: 'approx. 6.8K' },
			{ label: 'Post views', value: 'approx. 2.1K' },
			{ label: 'Story views', value: 'approx. 1.5K' },
			{ label: 'Net followers', value: '-25' },
		],
		posters: ['poster 1.jpg', 'poster 2.jpg', 'poster 3.jpg'],
	},
	'rajan-dental-clinic': {
		description:
			'Handled Instagram storytelling, scheduling and brand visibility with poster and carousel design, audience-friendly captions and a cleaner profile experience for a healthcare brand.',
		period: '90-day Instagram Insights snapshot — exact dates unavailable.',
		responsibilities: [
			'Instagram social media handling.',
			'Poster and carousel design.',
			'Posting and scheduling.',
			'Captions and hashtags.',
			'Instagram bio optimization.',
			'Highlight maintenance.',
		],
		metrics: [
			{ label: 'Views', value: '9,483' },
			{ label: 'Content interactions', value: '159' },
			{ label: 'Viewers', value: '7,720' },
			{ label: 'Profile visits', value: '100' },
			{ label: 'Bio-link taps', value: '0' },
			{ label: 'Reels views', value: 'approx. 9K' },
			{ label: 'Post views', value: '343' },
			{ label: 'Story views', value: '105' },
		],
		posters: ['poster 1.jpg', 'poster 2.png', 'poster 3.png'],
		posterDirectory: 'rajan-dental',
	},
	'surface-shield': {
		description:
			'Managed Instagram content, posting cadence and profile polish with posters, carousels and caption strategy designed to support product engagement and conversion touchpoints.',
		period: 'August 1–October 12, 2026',
		responsibilities: [
			'Instagram social media handling.',
			'Poster and carousel design.',
			'Posting and scheduling.',
			'Captions and hashtags.',
			'Instagram bio optimization.',
			'Highlight maintenance.',
		],
		metrics: [
			{ label: 'Views', value: '1,281,312' },
			{ label: 'Reach', value: '430.2K' },
			{ label: 'Content interactions', value: '6.6K' },
			{ label: 'Instagram link clicks', value: '12.1K' },
			{ label: 'Profile visits', value: '6.6K' },
			{ label: 'Follows', value: '1.1K' },
		],
		posters: ['poster 1.png', 'poster 2.jpg', 'poster 3.png'],
	},
};

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
						{(() => {
							const socialDetail = socialClientDetails[params.client];

							if (!socialDetail) {
								return (
									<section className={styles.heroGrid}>
										<CaseStudyReveal className={styles.heroCopy}>
											<p className={styles.eyebrow}>SOCIAL MEDIA / CLIENT CASE STUDY</p>
											<h1 className={styles.title}>{client.title}</h1>
											<p className={styles.lede}>{client.description}</p>
											<div className={styles.heroMeta}>
												<span className={styles.pill}>INSTAGRAM PROFILE WORK</span>
												<span className={styles.pill}>QUALITATIVE SHOWCASE</span>
											</div>
										</CaseStudyReveal>
									</section>
								);
							}

							return (
								<>
									<section className={styles.socialHero}>
										<CaseStudyReveal className={styles.socialCopy}>
											<p className={styles.eyebrow}>SOCIAL MEDIA</p>
											<h1 className={styles.title}>{client.title}</h1>
											<p className={styles.lede}>{socialDetail.description}</p>
											<div className={styles.heroMeta}>
												<span className={styles.pill}>INSTAGRAM</span>
												<span className={styles.pill}>CONTENT STRATEGY</span>
												<span className={styles.pill}>PROFILE MANAGEMENT</span>
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
												<div className={styles.socialDevice}>
													<div className={styles.socialNotch} aria-hidden="true" />
													<div className={styles.socialScreen}>
														<Image
															src={client.image}
															alt={`${client.title} Instagram profile screenshot`}
															fill
															priority
															sizes="(max-width: 760px) 72vw, 420px"
															className={styles.socialImage}
														/>
													</div>
												</div>
											</CaseStudyReveal>
										)}
									</section>

									<section className={styles.socialSection}>
										<CaseStudyReveal className={styles.sectionHeading}>
											<p className={styles.eyebrow}>WHAT I WORKED ON</p>
											<h2 className={styles.sectionTitle}>Project scope</h2>
										</CaseStudyReveal>
										<div className={styles.serviceGrid}>
											{socialDetail.responsibilities.map((item, index) => (
												<CaseStudyReveal key={item} delay={index * 0.04}>
													<div className={styles.serviceCard}>
														<span className={styles.serviceDot} aria-hidden="true" />
														<p>{item}</p>
													</div>
												</CaseStudyReveal>
											))}
										</div>
									</section>

									<section className={styles.socialSection}>
										<CaseStudyReveal>
											<div className={styles.metricsHeader}>
												<div>
													<p className={styles.eyebrow}>PERFORMANCE OVERVIEW</p>
													<h2 className={styles.sectionTitle}>Instagram Insights</h2>
												</div>
												<p className={styles.period}>{socialDetail.period}</p>
											</div>
										</CaseStudyReveal>

										<div className={styles.metricsGrid}>
											{socialDetail.metrics.map((metric, index) => (
												<CaseStudyReveal key={`${metric.label}-${index}`} delay={index * 0.04}>
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
									</section>

									{socialDetail.posters && socialDetail.posters.length > 0 && (
										<section className={styles.socialSection}>
											<CaseStudyReveal className={styles.sectionHeading}>
												<p className={styles.eyebrow}>SELECTED CONTENT</p>
												<h2 className={styles.sectionTitle}>Three posters</h2>
											</CaseStudyReveal>
											<div className={styles.posterGrid}>
												{socialDetail.posters.map((poster, index) => (
													<CaseStudyReveal key={poster} delay={index * 0.06}>
														<figure className={styles.posterCard}>
															<div className={styles.posterFrame}>
																<Image
																	src={`/portfolio/social-media/${socialDetail.posterDirectory ?? params.client}/${poster}`}
																	alt={`${client.title} poster ${index + 1}`}
																	fill
																	sizes="(max-width: 760px) 100vw, 33vw"
																	className={styles.posterImage}
																/>
															</div>
														</figure>
													</CaseStudyReveal>
												))}
											</div>
										</section>
									)}
								</>
							);
							})()}
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