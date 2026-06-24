<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import type { Dict } from '$lib/i18n/types.js';

	let { dict }: { dict: Dict } = $props();
</script>

<section id="missions" class="section section--dark missions">
	<div class="container">
		<div use:reveal>
			<span class="section__label">{dict.nav.missions}</span>
			<h2 class="section__title">{dict.missions.title}</h2>
			<p class="section__intro">{dict.missions.intro}</p>
		</div>

		<ul class="missions__list" role="list">
			{#each dict.missions.items as item, i}
				<li class="missions__item" use:reveal={{ delay: i * 80 }}>
					<span class="missions__marker" aria-hidden="true">
						<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</span>
					<span class="missions__text">{item}</span>
				</li>
			{/each}
		</ul>

		<!-- Track visual motif -->
		<div class="missions__track" aria-hidden="true">
			<div class="missions__rail missions__rail--1"></div>
			<div class="missions__rail missions__rail--2"></div>
			{#each Array(8) as _, i}
				<div class="missions__tie" style="left: {i * 14.28}%"></div>
			{/each}
		</div>
	</div>
</section>

<style>
	.missions__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--sp-4);
		list-style: none;
		margin-bottom: var(--sp-16);
	}

	.missions__item {
		display: flex;
		align-items: center;
		gap: var(--sp-4);
		padding: var(--sp-5) var(--sp-6);
		background: rgba(255, 255, 255, 0.07);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: var(--r-lg);
		transition: background var(--ease), border-color var(--ease);
	}

	.missions__item:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 117, 47, 0.35);
	}

	.missions__marker {
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		background: var(--orange);
		border-radius: var(--r-sm);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.missions__text {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--white);
	}

	/* Railway track motif */
	.missions__track {
		position: relative;
		height: 32px;
		margin-top: var(--sp-6);
	}

	.missions__rail {
		position: absolute;
		width: 100%;
		height: 3px;
		background: rgba(255, 255, 255, 0.12);
		border-radius: 2px;
	}

	.missions__rail--1 {
		top: 6px;
	}

	.missions__rail--2 {
		top: 22px;
	}

	.missions__tie {
		position: absolute;
		top: 2px;
		width: 3px;
		height: 28px;
		background: rgba(255, 117, 47, 0.25);
		border-radius: 2px;
	}
</style>
