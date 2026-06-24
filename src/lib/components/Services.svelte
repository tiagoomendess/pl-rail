<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import type { Dict } from '$lib/i18n/types.js';

	let { dict }: { dict: Dict } = $props();

	const icons = [
		/* Rail-Route */ `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="30" width="36" height="10" rx="3"/><path d="M10 30V18a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v12"/><circle cx="14" cy="40" r="4" fill="currentColor" stroke="none"/><circle cx="34" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M18 16V10"/><path d="M30 16V10"/><path d="M6 22h36"/></svg>`,
		/* Wheeled */ `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="28" width="28" height="12" rx="3"/><path d="M8 28V20a2 2 0 0 1 2-2h10l8 10"/><path d="M28 24l8-8"/><circle cx="36" cy="32" r="6" fill="none" stroke-width="2.5"/><circle cx="12" cy="40" r="4" fill="currentColor" stroke="none"/><circle cx="24" cy="40" r="4" fill="currentColor" stroke="none"/></svg>`,
		/* Tracked */ `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="30" width="40" height="10" rx="2"/><path d="M10 30V20l6-8h16l6 8v10"/><path d="M4 35h40"/><circle cx="10" cy="42" r="3" fill="currentColor" stroke="none"/><circle cx="20" cy="42" r="3" fill="currentColor" stroke="none"/><circle cx="30" cy="42" r="3" fill="currentColor" stroke="none"/><circle cx="40" cy="42" r="3" fill="currentColor" stroke="none"/></svg>`,
		/* Loader */ `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 36V24l4-12h12l4 12"/><rect x="4" y="30" width="30" height="10" rx="2"/><path d="M30 30l6-6 4 6"/><circle cx="10" cy="42" r="4" fill="currentColor" stroke="none"/><circle cx="24" cy="42" r="4" fill="currentColor" stroke="none"/></svg>`
	];
</script>

<section id="services" class="section section--dark services">
	<div class="container">
		<div use:reveal>
			<span class="section__label">{dict.nav.services}</span>
			<h2 class="section__title">{dict.services.title}</h2>
			<p class="section__intro">{dict.services.intro}</p>
		</div>

		<div class="services__grid">
			{#each dict.services.items as item, i}
				<article class="card card--dark services__card" use:reveal={{ delay: i * 80 }}>
					<div class="services__icon" aria-hidden="true">
						{@html icons[i % icons.length]}
					</div>
					<h3 class="services__card-title">{item.name}</h3>
					<p class="services__card-desc">{item.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.services__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: var(--sp-6);
	}

	.services__card {
		display: flex;
		flex-direction: column;
		gap: var(--sp-4);
	}

	.services__icon {
		width: 52px;
		height: 52px;
		color: var(--orange);
		flex-shrink: 0;
	}

	.services__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.services__card-title {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--white);
	}

	.services__card-desc {
		font-size: var(--text-base);
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.65;
	}
</style>
