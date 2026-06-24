<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import type { Dict } from '$lib/i18n/types.js';

	let { dict }: { dict: Dict } = $props();

	const equipIcons = [
		`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 38V28l4-14h12l6 14"/><rect x="4" y="34" width="32" height="8" rx="2"/><path d="M30 30l8-10 4 10"/><circle cx="10" cy="44" r="4" fill="currentColor" stroke="none"/><circle cx="24" cy="44" r="4" fill="currentColor" stroke="none"/><circle cx="38" cy="38" r="3" fill="none"/></svg>`,
		`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="18" width="36" height="8" rx="2"/><path d="M10 18V12h28v6"/><path d="M6 26v8"/><path d="M42 26v8"/><path d="M6 34h36"/><circle cx="12" cy="38" r="3" fill="currentColor" stroke="none"/><circle cx="24" cy="38" r="3" fill="currentColor" stroke="none"/><circle cx="36" cy="38" r="3" fill="currentColor" stroke="none"/></svg>`,
		`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="24" width="36" height="6" rx="2"/><path d="M6 30v8a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1v-8"/><path d="M10 24V16"/><path d="M38 24V16"/><path d="M10 20h28"/><circle cx="16" cy="38" r="3" fill="currentColor" stroke="none" /><circle cx="32" cy="38" r="3" fill="currentColor" stroke="none" /></svg>`
	];
</script>

<section id="equipment" class="section section--gray equipment">
	<div class="container">
		<div use:reveal>
			<span class="section__label">{dict.nav.equipment}</span>
			<h2 class="section__title">{dict.equipment.title}</h2>
			<p class="section__intro">{dict.equipment.intro}</p>
		</div>

		<div class="equipment__grid">
			{#each dict.equipment.items as item, i}
				<article class="card equipment__card" use:reveal={{ delay: i * 100 }}>
					<div class="equipment__icon" aria-hidden="true">
						{@html equipIcons[i % equipIcons.length]}
					</div>
					<div class="equipment__body">
						<h3 class="equipment__card-title">{item.name}</h3>
						<p class="equipment__card-desc">{item.desc}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.equipment__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--sp-6);
	}

	.equipment__card {
		display: flex;
		align-items: flex-start;
		gap: var(--sp-5);
	}

	.equipment__icon {
		width: 56px;
		height: 56px;
		flex-shrink: 0;
		color: var(--orange);
		background: rgba(255, 117, 47, 0.1);
		border-radius: var(--r-lg);
		padding: var(--sp-3);
	}

	.equipment__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.equipment__body {
		flex: 1;
	}

	.equipment__card-title {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--blue);
		margin-bottom: var(--sp-2);
	}

	.equipment__card-desc {
		font-size: var(--text-base);
		color: var(--gray-700);
		line-height: 1.65;
	}
</style>
