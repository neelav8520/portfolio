export type CreativeAsset = {
	src: string;
	alt: string;
};

export type CreativeCaseStudyData = {
	title: string;
	category: string;
	role: string;
	introduction: string;
	objective: string;
	direction: string;
	hierarchy: string;
	marketing: string;
	takeaway: string;
	tools: string[];
	assets: CreativeAsset[];
	videoOnly?: boolean;
};

function imageAssets(folder: string, files: string[], label: string): CreativeAsset[] {
	return files.map((file, index) => ({
		src: `/portfolio/creatives/${folder}/${encodeURIComponent(file)}`,
		alt: `${label}, creative ${index + 1}`,
	}));
}

export const creativeCaseStudies: Record<string, CreativeCaseStudyData> = {
	hybrin: {
		title: 'HYBRIN',
		category: 'Skincare product creatives',
		role: 'Creative design and visual communication',
		introduction:
			'A product-led creative series for HYBRIN skincare, pairing a bright, clinical palette with clear benefit-led messaging.',
		objective:
			'Make product details and skincare benefits easy to scan while keeping the product itself at the centre of attention.',
		direction:
			'The selected work uses HYBRIN’s white and warm-gold visual language. Clean negative space, close product framing, and ingredient-inspired accents create a polished skincare feel.',
		hierarchy:
			'Large benefit headlines lead into concise supporting copy; the product pack, supporting details, and call to action follow in a clear reading order.',
		marketing:
			'The layouts are structured to support product awareness and benefit communication. Calls to action are visible in the supplied artwork; no campaign outcome is implied.',
		takeaway:
			'Product styling, benefit hierarchy, and restrained use of brand colour work together to make a detailed skincare message feel accessible.',
		tools: ['Canva', 'AI tools'],
		assets: imageAssets('hybrin', [
			'creative 1.jpg', 'creative 2.jpg', 'creative 3.jpg',
			'creative 4.jpg', 'creative 5.png', 'creative 6.png',
		], 'HYBRIN skincare artwork'),
	},
	'little-wings-video-editing': {
		title: 'Little Wings Rehab Centre',
		category: 'Video editing · Reel production',
		role: 'Short-form video editing',
		introduction:
			'A set of three short-form reels for Little Wings Rehab Centre, presented as video work rather than poster or graphic-design work.',
		objective:
			'Shape the supplied footage into short, mobile-first reels that communicate clearly in a social feed.',
		direction:
			'The work is video-led: pacing, clip selection, and a vertical viewing format carry the story. No poster or static creative deliverables are included in this project.',
		hierarchy:
			'Each reel remains the primary content. Native playback controls let viewers choose when to play, pause, or replay each video.',
		marketing:
			'The three edits are formatted for short-form social viewing and awareness. No reach, engagement, or conversion result is claimed.',
		takeaway:
			'The project demonstrates concise reel editing and platform-conscious video presentation across three finished clips.',
		tools: ['Canva', 'CapCut'],
		assets: [
			{ src: '/portfolio/creatives/little-wings/reel%201.mp4', alt: 'Little Wings video reel 1' },
			{ src: '/portfolio/creatives/little-wings/reel%202.mp4', alt: 'Little Wings video reel 2' },
			{ src: '/portfolio/creatives/little-wings/reel%203.mp4', alt: 'Little Wings video reel 3' },
		],
		videoOnly: true,
	},
	nimbus: {
		title: 'Nimbus',
		category: 'Digital marketing brand creatives',
		role: 'Creative design and visual communication',
		introduction:
			'A digital-marketing creative set for Nimbus, using its blue and cyan identity to communicate a broad range of online services.',
		objective:
			'Present multiple digital services in a cohesive brand voice while keeping each message legible and the primary action prominent.',
		direction:
			'The selected artwork pairs Nimbus’s navy and bright cyan palette with high-contrast type and digitally themed imagery. AI-assisted visuals are presented as creative assets, not original photography.',
		hierarchy:
			'An oversized headline establishes the message; supporting service cues and a distinct CTA form the next points of attention.',
		marketing:
			'The work is designed for service awareness and clear next-step communication. It demonstrates intended message structure, not measured campaign performance.',
		takeaway:
			'A consistent colour system and strong headline-to-CTA sequence help varied service messages feel like one brand family.',
		tools: ['Canva', 'AI tools'],
		assets: imageAssets('nimbus', [
			'creative 1.png', 'creative 2.jpg', 'creative 3.png',
			'creative 4.jpg', 'creative 5.jpg',
		], 'Nimbus digital-marketing artwork'),
	},
	'rajan-dental-clinic': {
		title: 'Rajan Dental Clinic',
		category: 'Dental care campaign creatives',
		role: 'Creative design and visual communication',
		introduction:
			'A patient-facing creative set for Rajan Dental Clinic, combining clear appointment messaging with reassuring dental-care imagery.',
		objective:
			'Make dental-care messages approachable and help viewers quickly identify the service message and appointment action.',
		direction:
			'The selected artwork uses a clean clinical setting, friendly subject imagery, and the clinic’s blue-led identity. AI-assisted visuals are not described as documentary photography.',
		hierarchy:
			'High-contrast headlines establish the care message, while concise supporting copy and contact or booking prompts remain easy to locate.',
		marketing:
			'The layouts are intended to support service awareness and appointment consideration; no resulting bookings or campaign outcomes are claimed.',
		takeaway:
			'The work balances a reassuring tone with readable healthcare information and a visible next step.',
		tools: ['Canva', 'AI tools'],
		assets: imageAssets('rajan-dental', [
			'creative 1.jpg', 'creative 2.png', 'creative 3.png',
			'creative 4.jpg', 'creative 5.png',
		], 'Rajan Dental Clinic artwork'),
	},
	'square-by-square': {
		title: 'Square by Square',
		category: 'Interior design studio creatives',
		role: 'Creative design and visual communication',
		introduction:
			'A creative series for Square by Square, presenting interior-design services through warm, editorial layouts and project imagery.',
		objective:
			'Communicate the studio’s interior-design offering with an aspirational visual tone while keeping service benefits and contact cues clear.',
		direction:
			'The supplied work uses a warm neutral and terracotta palette, interior imagery, and a mix of expressive headline styles with restrained supporting type.',
		hierarchy:
			'Editorial headlines frame the design promise; project imagery and concise service cues provide context, with contact information supporting the next step.',
		marketing:
			'The pieces are structured to build service awareness and make the studio’s offer easy to understand. They do not imply measured lead or sales results.',
		takeaway:
			'An editorial type hierarchy and cohesive warm palette give practical service information a considered, premium presentation.',
		tools: ['Canva', 'AI tools'],
		assets: imageAssets('square-by-square', [
			'creative 1.jpg', 'creative 2.jpg', 'creative 3.jpg', 'creative 4.jpg',
			'creative 5.jpg', 'creative 6.png', 'creative 7.png',
		], 'Square by Square interior-design artwork'),
	},
	'surface-shield': {
		title: 'Surface Shield',
		category: 'Home-surface protection creatives',
		role: 'Creative design and visual communication',
		introduction:
			'A product communication series for Surface Shield, showing surface protection in polished kitchen and interior settings.',
		objective:
			'Explain practical product benefits while connecting protection with the look and feel of a finished home interior.',
		direction:
			'The supplied artwork uses warm stone and kitchen imagery with dark green and muted-gold accents. Product benefits are broken into readable, scannable points.',
		hierarchy:
			'The main promise leads, followed by supporting benefit statements and product context; service-area and contact details appear as secondary information.',
		marketing:
			'The designs are intended to support product education and brand awareness by making feature and service information easy to scan.',
		takeaway:
			'This set demonstrates how product benefits, lifestyle context, and contact cues can be organised without competing with one another.',
		tools: ['Canva', 'AI tools'],
		assets: imageAssets('surface-shield', [
			'creative 1.png', 'creative 2.png', 'creative 3.png', 'creative 4.jpg',
		], 'Surface Shield product artwork'),
	},
};
