<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { detectLocale } from '$lib/i18n/detect.js';
	import { locales, localeNames, hreflangMap, defaultLocale } from '$lib/i18n/index.js';

	const SITE_URL = 'https://plrail.fr';

	onMount(() => {
		goto(`/${detectLocale()}`, { replaceState: true });
	});
</script>

<svelte:head>
	<title>PL Rail – Chantiers ferroviaires</title>
	<meta name="robots" content="noindex, follow" />
	{#each locales as lang}
		<link rel="alternate" hreflang={hreflangMap[lang]} href="{SITE_URL}/{lang}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{SITE_URL}/{defaultLocale}" />
</svelte:head>

<div class="redirect-page">
	<div class="redirect-content">
		<img src="/images/logo.png" alt="PL Rail" class="redirect-logo" height="48" />
		<p class="redirect-message">Redirection en cours…</p>
		<nav class="lang-select" aria-label="Select your language">
			{#each locales as lang}
				<a href="/{lang}" class="lang-link">{localeNames[lang]}</a>
			{/each}
		</nav>
	</div>
</div>

<style>
	.redirect-page {
		min-height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #11304d;
		padding: 2rem;
	}

	.redirect-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		text-align: center;
	}

	.redirect-logo {
		filter: brightness(0) invert(1);
		max-width: 180px;
	}

	.redirect-message {
		color: rgba(255, 255, 255, 0.6);
		font-family: system-ui, sans-serif;
		font-size: 0.875rem;
	}

	.lang-select {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
	}

	.lang-link {
		color: #ff752f;
		font-family: system-ui, sans-serif;
		font-size: 0.875rem;
		text-decoration: none;
		padding: 0.375rem 0.75rem;
		border: 1px solid rgba(255, 117, 47, 0.4);
		border-radius: 9999px;
		transition: background 0.2s, border-color 0.2s;
	}

	.lang-link:hover {
		background: rgba(255, 117, 47, 0.15);
		border-color: #ff752f;
	}
</style>
