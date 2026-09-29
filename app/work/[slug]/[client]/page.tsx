import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Globe2, Instagram } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
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
						{!isCreatives && client.description && (
							<p className="mt-6 max-w-2xl text-sm leading-8 text-[#aaa3b1]">
								{client.description}
							</p>
						)}
					</Reveal>

					{client.url && (
						<Reveal delay={0.08} className="lg:justify-self-end">
							<a
								href={client.url}
								target="_blank"
								rel="noreferrer"
								className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#c69cff]/30 px-5 text-xs text-[#eee7f5] transition hover:border-[#c69cff]/70 hover:bg-[#c69cff]/10"
							>
								{isSocial ? <Instagram size={15} /> : <Globe2 size={15} />}
								{isSocial ? 'VIEW INSTAGRAM PROFILE' : 'VISIT WEBSITE'}
								<ExternalLink size={13} className="text-[#c69cff]" />
							</a>
						</Reveal>
					)}
				</div>

				{isSocial && client.image && (
					<section className="mt-16 grid gap-12 lg:grid-cols-[minmax(260px,390px)_1fr] lg:items-center">
						<Reveal className="mx-auto w-full max-w-[360px]">
							<div className="work-phone-frame">
								<div className="mb-3 flex items-center justify-center gap-2 text-[8px] tracking-[.12em] text-[#c8bdce]">
									<span className="h-1.5 w-1.5 rounded-full bg-[#c69cff]" />
									INSTAGRAM PROFILE
								</div>
								<div className="work-phone-screen relative aspect-[9/17]">
									<Image
										src={client.image}
										alt={`${client.title} Instagram profile screenshot`}
										fill
										sizes="(max-width: 768px) 85vw, 360px"
										className="object-contain"
									/>
								</div>
							</div>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="max-w-xl border-l border-[#c69cff]/30 pl-6 md:pl-8">
								<div className="text-[9px] tracking-[.24em] text-[#c69cff]">
									SOCIAL MEDIA WORK
								</div>
								<p className="mt-5 text-lg leading-8 text-[#eee7f5]">
									The supplied Instagram profile is presented as the visual record of this work. No social media performance metrics are included.
								</p>
							</div>
						</Reveal>
					</section>
				)}

				{isSeo && client.image && (
					<section className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
						<Reveal>
							<div className="work-browser-frame">
								<div className="flex h-11 items-center gap-2 border-b border-white/10 bg-[#15121a] px-4">
									<span className="h-2.5 w-2.5 rounded-full bg-[#c69cff]/80" />
									<span className="h-2.5 w-2.5 rounded-full bg-white/25" />
									<span className="h-2.5 w-2.5 rounded-full bg-white/15" />
									<div className="ml-3 min-w-0 flex-1 truncate rounded-md bg-black/35 px-3 py-1.5 text-[9px] text-[#aaa3b1]">
										{client.url?.replace(/^https?:\/\//, '').replace(/\/$/, '')}
									</div>
								</div>
								<div className="relative aspect-[16/10] bg-[#08070c]">
									<Image
										src={client.image}
										alt={`${client.title} SEO project screenshot`}
										fill
										sizes="(max-width: 1024px) 100vw, 800px"
										className="object-contain p-3 md:p-5"
									/>
								</div>
							</div>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="text-[9px] tracking-[.24em] text-[#c69cff]">
								SEO WORK
							</div>
							<p className="mt-5 max-w-lg text-lg leading-8 text-[#eee7f5]">
								SEO work can include keyword research, on-page optimization, and technical or on-site improvements. The supplied project screenshot is shown without ranking, traffic, or other unverified result claims.
							</p>
						</Reveal>
					</section>
				)}

				{isMetaAds && client.metrics && (
					<section className="mt-16">
						<Reveal>
							<div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#c69cff]/20 pb-5">
								<div>
									<div className="text-[9px] tracking-[.24em] text-[#c69cff]">
										VERIFIED CAMPAIGN TOTALS
									</div>
									<h2 className="mt-3 text-2xl font-medium md:text-3xl">
										Campaign overview
									</h2>
								</div>
								{client.period && (
									<span className="rounded-full border border-white/10 px-4 py-2 text-[10px] text-[#c9c1d0]">
										{client.period}
									</span>
								)}
							</div>
						</Reveal>
						<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{client.metrics.map((metric, index) => (
								<Reveal key={metric.label} delay={index * 0.045}>
									<div className="work-metric-card relative min-h-36 overflow-hidden p-5">
										<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c69cff]/70 to-transparent" />
										<div className="text-[9px] tracking-[.16em] text-[#aaa3b1]">
											{metric.label}
										</div>
										<div className="mt-5 text-2xl font-medium text-white md:text-3xl">
											{metric.value}
										</div>
										{metric.context && (
											<p className="mt-3 text-[10px] leading-5 text-[#9e96a7]">
												{metric.context}
											</p>
										)}
									</div>
								</Reveal>
							))}
						</div>
					</section>
				)}
			</div>
		</main>
	);
}