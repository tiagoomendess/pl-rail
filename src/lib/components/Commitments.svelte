<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import type { Dict } from '$lib/i18n/types.js';

	let { dict }: { dict: Dict } = $props();

	const commitIcons = [
		/* Clock */
		`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
		/* Lightning */
		`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
		/* Shield check */
		`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
		/* Star */
		`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
		/* Settings */
		`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 7.76a6 6 0 0 0 0 8.49"/></svg>`
	];
</script>

<section id="commitments" class="section commitments">
	<div class="container">
		<div use:reveal>
			<span class="section__label">{dict.nav.commitments}</span>
			<h2 class="section__title">{dict.commitments.title}</h2>
		</div>

		<div class="commitments__grid">
			{#each dict.commitments.items as item, i}
				<div class="commitment" use:reveal={{ delay: i * 80 }}>
					<div class="commitment__icon" aria-hidden="true">
						{@html commitIcons[i % commitIcons.length]}
					</div>
					<div class="commitment__body">
						<h3 class="commitment__title">{item.name}</h3>
						<p class="commitment__desc">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.commitments__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--sp-6);
	}

	.commitment {
		display: flex;
		align-items: flex-start;
		gap: var(--sp-5);
		padding: var(--sp-6);
		border-radius: var(--r-lg);
		border: 1.5px solid var(--gray-100);
		background: var(--white);
		transition:
			border-color var(--ease),
			box-shadow var(--ease),
			transform var(--ease);
	}

	.commitment:hover {
		border-color: var(--orange);
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}

	.commitment__icon {
		flex-shrink: 0;
		width: 44px;
		height: 44px;
		color: var(--orange);
		background: rgba(255, 117, 47, 0.1);
		border-radius: var(--r-md);
		padding: var(--sp-2);
	}

	.commitment__icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.commitment__title {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--blue);
		margin-bottom: var(--sp-2);
	}

	.commitment__desc {
		font-size: var(--text-sm);
		color: var(--gray-700);
		line-height: 1.65;
	}
</style>
