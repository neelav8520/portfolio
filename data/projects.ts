export type Metric = {
	label: string;
	value: string;
	context?: string;
};

export type Project = {
	title: string;
	category: string;
	slug: string;
	image?: string;
	url?: string;
	description?: string;
	headline?: string;
	metrics?: Metric[];
	period?: string;
};

const project = (details: Project): Project => details;

export const projects = {
	'social-media': [
		project({ slug: 'spictex', title: 'Spictex', category: 'Social Media', image: '/portfolio/social-media/spictex/instagram-home.png', url: 'https://www.instagram.com/spictex/', description: 'Social media content and Instagram profile work for Spictex.' }),
		project({ slug: 'hazbel', title: 'Hazbel', category: 'Social Media', image: '/portfolio/social-media/hazbel/instagram-home.png', url: 'https://www.instagram.com/hazbelindia/', description: 'Social media content and Instagram profile work for Hazbel.' }),
		project({ slug: 'elevate-signature-salon', title: 'Elevate Signature Salon', category: 'Social Media', image: '/portfolio/social-media/elevate/instagram-home.jpg', url: 'https://www.instagram.com/elevate_salon_mannivakkam/', description: 'Social media content and Instagram profile work for Elevate Signature Salon.' }),
		project({ slug: 'square-by-square', title: 'Square by Square', category: 'Social Media', image: '/portfolio/social-media/square-by-square/instagram-home.jpg', url: 'https://www.instagram.com/square_by_square.chennai/', description: 'Social media content and Instagram profile work for Square by Square.' }),
		project({ slug: 'hybrin', title: 'HYBRIN', category: 'Social Media', image: '/portfolio/social-media/hybrin/instagram-home.jpg', url: 'https://www.instagram.com/hybrin_glow/', description: 'Social media content and Instagram profile work for HYBRIN.' }),
		project({ slug: 'rajan-dental-clinic', title: 'Rajan Dental Clinic', category: 'Social Media', image: '/portfolio/social-media/rajan-dental/instagram-home.jpg', url: 'https://www.instagram.com/rajandentalclinic/', description: 'Social media content and Instagram profile work for Rajan Dental Clinic.' }),
		project({ slug: 'surface-shield', title: 'Surface Shield', category: 'Social Media', image: '/portfolio/social-media/surface-shield/instagram-home.jpg', url: 'https://www.instagram.com/surfaceshieldindia/', description: 'Social media content and Instagram profile work for Surface Shield.' }),
	],
	seo: [
		project({ slug: 'divas-mantra', title: 'Divas Mantra', category: 'SEO', image: '/portfolio/seo/divas-mantra/divas.jpg', url: 'https://divasmantra.com/', description: 'On-page SEO work supported by the supplied project screenshot.' }),
		project({ slug: 'hazbel', title: 'Hazbel', category: 'SEO', image: '/portfolio/seo/hazbel/ahzbel%20seo.jpg', url: 'https://hazbel.com/', description: 'On-page SEO work supported by the supplied project screenshot.' }),
		project({ slug: 'spictex', title: 'Spictex', category: 'SEO', image: '/portfolio/seo/spictex/spictex%20seo.jpg', url: 'https://spictex.com/', description: 'On-page SEO work supported by the supplied project screenshot.' }),
	],
	'meta-ads': [
		project({
			slug: 'prowhiz-placement-training', title: 'ProWhiz Placement & Training', category: 'Meta Ads', description: 'Verified Meta campaign totals for ProWhiz Placement & Training.',
			metrics: [
				{ label: 'Leads', value: '551' },
				{ label: 'Spend', value: '₹7,339.20' },
				{ label: 'Impressions', value: '184,205' },
				{ label: 'Summed campaign reach', value: '94,437', context: 'Summed across campaigns; not unique reach.' },
				{ label: 'Blended CPL', value: 'Approximately ₹13.32' },
			],
		}),
		project({
			slug: 'little-wings-rehab-centre', title: 'Little Wings Rehab Centre', category: 'Meta Ads', headline: '50+ Leads Generated', description: 'Overall lead count based on actual lead records. Meta reporting-period results are listed separately below.',
			metrics: [
				{ label: 'Messaging conversations/results', value: '26', context: 'From the available Meta reporting period; not the overall lead total.' },
				{ label: 'Spend', value: '₹1,525.43' },
				{ label: 'Impressions', value: '20,722' },
				{ label: 'Link clicks', value: '73' },
				{ label: 'Blended cost/result', value: 'Approximately ₹58.67' },
			],
		}),
		project({
			slug: 'aadhi-promoters', title: 'Aadhi Promoters', category: 'Meta Ads', description: 'Verified Meta campaign totals for Aadhi Promoters.', period: 'July-August 2026',
			metrics: [
				{ label: 'Leads', value: '4' },
				{ label: 'Calls', value: '14' },
				{ label: 'Spend', value: '₹847.47' },
				{ label: 'Impressions', value: '17,055' },
				{ label: 'Summed campaign reach', value: '14,261', context: 'Summed across campaigns; not unique reach.' },
			],
		}),
	],
	creatives: [
		project({ slug: 'hybrin', title: 'HYBRIN', category: 'Creatives' }),
		project({ slug: 'square-by-square', title: 'Square by Square', category: 'Creatives' }),
		project({ slug: 'rajan-dental-clinic', title: 'Rajan Dental Clinic', category: 'Creatives' }),
		project({ slug: 'nimbus', title: 'Nimbus', category: 'Creatives' }),
		project({ slug: 'surface-shield', title: 'Surface Shield', category: 'Creatives' }),
		project({ slug: 'little-wings-video-editing', title: 'Little Wings — Video Editing', category: 'Creatives' }),
	],
} as const satisfies Record<string, Project[]>;

export type Slug = keyof typeof projects;

export const meta: { [K in Slug]: { title: string; intro: string; caps: string[] } } = {
	'social-media': {
		title: 'SOCIAL MEDIA',
		intro: 'Selected social media work, with each profile screenshot and project details on its own client page.',
		caps: ['Social Media Strategy', 'Content Planning', 'Instagram Content', 'Reels', 'Carousels', 'Campaign Content'],
	},
	seo: {
		title: 'SEO',
		intro: 'Selected SEO work and supplied project screenshots. No unverified performance metrics are shown.',
		caps: ['Keyword Research', 'Product SEO', 'On-Page SEO', 'Technical SEO', 'Search Console', 'Analytics & Reporting'],
	},
	'meta-ads': {
		title: 'META ADS',
		intro: 'Verified campaign results shown as reported totals, without trend extrapolation.',
		caps: [],
	},
	creatives: {
		title: 'CREATIVES',
		intro: '',
		caps: [],
	},
};
