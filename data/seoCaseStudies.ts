export type SeoMetric = {
	label: string;
	value: string;
	context?: string;
};

export type SeoCaseStudyData = {
	title: string;
	period: string;
	url: string;
	query: string;
	searchTitle: string;
	searchDescription: string;
	projectImage: string;
	introduction: string;
	work: string;
	highlight?: string;
	metrics: SeoMetric[];
	optimization?: string;
	metricNote?: string;
	gscImage?: string;
	gscDimensions?: { width: number; height: number };
};

export const seoCaseStudies = {
	'divas-mantra': {
		title: 'Divas Mantra',
		period: 'July 2025 – May 2026',
		url: 'https://divasmantra.com/',
		query: 'handmade silver jewelry in Chennai',
		searchTitle: 'Silver Jewellery in Chennai',
		searchDescription:
			'Explore elegant 92.5 silver jewellery and gold-plated designs from a Chennai jewellery store.',
		projectImage: '/portfolio/seo/divas-mantra/divas.jpg',
		introduction:
			'An SEO case study focused on product-page visibility for a Chennai jewellery retailer. The supplied record documents a historical first-position result for “handmade silver jewelry in Chennai”.',
		work:
			'The documented work includes on-page SEO and the addition of SEO-optimized product pages. Search visibility figures are presented as reported, without attributing sales or purchases to SEO.',
		highlight:
			'Report-documented historical first position for “handmade silver jewelry in Chennai”. This is a past achievement, not a claim about today’s live ranking.',
		metrics: [
			{ label: 'Search clicks', value: '1,320+' },
			{ label: 'Search impressions', value: '120K+' },
			{ label: 'Average search position', value: '7.5' },
			{ label: 'Brand-keyword clicks', value: '230' },
		],
		optimization: '423 SEO-optimized product pages added during the reported period',
		metricNote:
			'The supplied notes do not identify a reporting window for these individual figures. The project period is shown separately and is not assigned to the metrics.',
	} satisfies SeoCaseStudyData,
	hazbel: {
		title: 'Hazbel',
		period: 'May 2026 – October 2026',
		url: 'https://hazbel.com/',
		query: 'hazbel',
		searchTitle: 'Hazbel',
		searchDescription:
			'Discover Hazbel, a French-designed premium innerwear brand offering comfortable bras, panties, slips and women’s essentials.',
		projectImage: '/portfolio/seo/hazbel/ahzbel%20seo.jpg',
		introduction:
			'An organic-search case study for a premium innerwear brand. The supplied search-result visual shows the brand result and category sitelinks.',
		work:
			'The supplied project record confirms product-page optimization. Search Console figures are kept with their stated May–October 2026 reporting period.',
		metrics: [
			{ label: 'Search clicks', value: '226' },
			{ label: 'Impressions', value: '1.78K' },
			{ label: 'Click-through rate', value: '12.7%' },
			{ label: 'Average position', value: '10.6' },
		],
		optimization: '100+ product pages optimized during the reporting period',
		gscImage: '/portfolio/seo/hazbel/hazbel%20gsc.png',
		gscDimensions: { width: 1902, height: 912 },
	} satisfies SeoCaseStudyData,
	spictex: {
		title: 'Spictex',
		period: 'May 2026 – October 2026',
		url: 'https://spictex.com/',
		query: 'spictex panties',
		searchTitle: 'Ladies Panties',
		searchDescription:
			'A Spictex collection result with product imagery and collection details.',
		projectImage: '/portfolio/seo/spictex/spictex%20seo.jpg',
		introduction:
			'An organic-search case study for an apparel retailer. The supplied search-result visual features the Ladies Panties collection and product listings.',
		work:
			'The supplied project record confirms product-page optimization. Search Console figures are kept with their stated May–October 2026 reporting period.',
		metrics: [
			{ label: 'Search clicks', value: '2.42K' },
			{ label: 'Impressions', value: '51.8K' },
			{ label: 'Click-through rate', value: '4.7%' },
			{ label: 'Average position', value: '5.7' },
		],
		optimization: '100+ product pages optimized during the reporting period',
		gscImage: '/portfolio/seo/spictex/spictex%20gsc.png',
		gscDimensions: { width: 1900, height: 891 },
	} satisfies SeoCaseStudyData,
} as const;
