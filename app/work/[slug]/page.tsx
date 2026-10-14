import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { meta, projects, Slug } from '@/data/projects';

export function generateStaticParams() {
	return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function WorkPage({ params }: { params: { slug: string } }) {
	const slug = params.slug as Slug;
	if (!(slug in projects)) notFound();

	const category = meta[slug];
	const items = projects[slug];

	return (
		<main className="pt-36 pb-24">
			<section className="max-w-7xl mx-auto px-5 md:px-10">
				<a
					href="/#work"
					className="inline-flex items-center gap-2 text-[10px] tracking-[.18em] text-[#8e8499]"
				>
					<ArrowLeft size={13} />BACK TO WORK
				</a>

				<Reveal>
					<div className="mt-12">
						<div className="text-[10px] tracking-[.28em] text-[#c69cff]">
							WORK / {category.title}
						</div>
						<h1 className="mt-4 text-6xl md:text-8xl font-semibold tracking-[-.07em]">
							{category.title}
						</h1>
						{category.intro && (
							<p className="mt-6 max-w-2xl text-sm md:text-base leading-8 text-[#a9a5b2]">
								{category.intro}
							</p>
						)}
					</div>
				</Reveal>

				{category.caps.length > 0 && (
					<div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#c69cff]/10">
						{category.caps.map((capability, index) => (
							<Reveal delay={index * 0.05} key={capability}>
								<div className="rounded-xl bg-[#08070c] p-5 min-h-28">
									<CheckCircle2 size={17} className="text-[#c69cff]" />
									<div className="mt-7 text-[10px]">{capability}</div>
								</div>
							</Reveal>
						))}
					</div>
				)}
			</section>

			<section className="mt-28">
				<div className="max-w-7xl mx-auto px-5 md:px-10">
					<Reveal>
						<div className="text-[10px] tracking-[.25em] text-[#777080]">
							SHOWCASE / {items.length} CLIENTS
						</div>
						<h2 className="text-4xl md:text-6xl font-semibold tracking-[-.05em] mt-3">
							MY <span className="text-[#c69cff]">{category.title}</span> WORK
						</h2>
					</Reveal>
				</div>

				<div className="max-w-7xl mx-auto px-5 md:px-10 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item, index) => (
						<Reveal key={item.slug} delay={index * 0.055}>
							<Link
								href={`/work/${slug}/${item.slug}`}
								className="group flex min-h-48 items-end justify-between gap-5 rounded-2xl border border-[#c69cff]/20 bg-gradient-to-br from-[#17101f] to-[#09070c] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#c69cff]/55"
							>
								<div>
									<div className="text-[9px] tracking-[.22em] text-[#a995bd]">
										{category.title} / CLIENT {String(index + 1).padStart(2, '0')}
									</div>
									<h3 className="mt-5 text-2xl font-medium text-white transition group-hover:text-[#dbc2ff]">
										{item.title}
									</h3>
								</div>
								<span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#c69cff]/35 text-[#c69cff] transition group-hover:bg-[#c69cff] group-hover:text-black">
									<ArrowRight size={15} />
								</span>
							</Link>
						</Reveal>
					))}
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-5 md:px-10 mt-24 flex justify-end">
				<a href="/#contact" className="text-sm text-[#c69cff] inline-flex gap-2 items-center">
					START A PROJECT <ArrowRight size={15} />
				</a>
			</section>
		</main>
	);
}
