<script lang="ts">
	import type { PageData } from './$types';
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Equipment from '$lib/components/Equipment.svelte';
	import Certifications from '$lib/components/Certifications.svelte';
	import Commitments from '$lib/components/Commitments.svelte';
	import Missions from '$lib/components/Missions.svelte';
	import Contact from '$lib/components/Contact.svelte';
	// import Gallery from '$lib/components/Gallery.svelte'; // Uncomment when real photos are available

	let { data }: { data: PageData } = $props();
	const dict = $derived(data.dict);
	const locale = $derived(data.locale);
</script>

<Seo {dict} {locale} />

<main id="main-content">
	<Hero {dict} {locale} />
	<About {dict} />
	<Services {dict} />
	<Equipment {dict} />
	<Certifications {dict} />
	<Commitments {dict} />
	<Missions {dict} />
	<!-- <Gallery title="Nos chantiers" sectionLabel="Galerie" /> -->
	<Contact {dict} />
</main>
