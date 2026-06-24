<script lang="ts">
	import { locales, hreflangMap, defaultLocale } from '$lib/i18n/index.js';
	import type { Dict, Locale } from '$lib/i18n/types.js';

	let { dict, locale }: { dict: Dict; locale: Locale } = $props();

	const SITE_URL = 'https://plrail.fr';
	const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

	const canonicalUrl = $derived(`${SITE_URL}/${locale}`);

	const jsonLd = $derived(JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'PL Rail',
		url: SITE_URL,
		telephone: '+33641356570',
		email: 'contact@plrail.fr',
		description: dict.seo.description,
		founder: {
			'@type': 'Person',
			name: 'Pedro Barbosa',
			jobTitle: 'Gérant – Conducteur d\'engins ferroviaires'
		},
		areaServed: {
			'@type': 'Country',
			name: 'France'
		},
		knowsAbout: ['Railway infrastructure', 'Rail-Road excavator', 'Travaux ferroviaires'],
		hasCredential: ['CACES® R482', 'CACES® B3'],
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+33641356570',
			email: 'contact@plrail.fr',
			contactType: 'customer service',
			availableLanguage: ['fr', 'en']
		},
		logo: `${SITE_URL}/images/logo.png`,
		sameAs: []
	}));
</script>

<svelte:head>
	<title>{dict.seo.title}</title>
	<meta name="description" content={dict.seo.description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- hreflang alternates -->
	{#each locales as lang}
		<link rel="alternate" hreflang={hreflangMap[lang]} href="{SITE_URL}/{lang}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{SITE_URL}/{defaultLocale}" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={dict.seo.og_title} />
	<meta property="og:description" content={dict.seo.og_description} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content={locale} />
	<meta property="og:site_name" content="PL Rail" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={dict.seo.og_title} />
	<meta name="twitter:description" content={dict.seo.og_description} />
	<meta name="twitter:image" content={OG_IMAGE} />

	<!-- Robots -->
	<meta name="robots" content="index, follow" />

	<!-- JSON-LD structured data -->
	{@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>
