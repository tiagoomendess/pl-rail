<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import type { Dict } from '$lib/i18n/types.js';

	let { dict }: { dict: Dict } = $props();
</script>

<section id="certifications" class="section section--dark certifications">
	<div class="container">
		<div use:reveal>
			<span class="section__label">{dict.nav.certifications}</span>
			<h2 class="section__title">{dict.certifications.title}</h2>
			<p class="section__intro">{dict.certifications.intro}</p>
		</div>

		<div class="certs__grid">
			{#each dict.certifications.items as item, i}
				<div class="cert" use:reveal={{ delay: i * 120 }}>
					<div class="cert__badge" aria-hidden="true">
						<svg class="cert__shield" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 2L4 12v16c0 13.25 8.5 25.6 20 28 11.5-2.4 20-14.75 20-28V12L24 2z" fill="rgba(255,117,47,0.15)" stroke="#ff752f" stroke-width="2.5"/>
							<path d="M16 28l6 6 10-12" stroke="#ff752f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<div class="cert__content">
						<h3 class="cert__name">{item.name}</h3>
						<p class="cert__desc">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="certs__note" use:reveal={{ delay: 200 }}>
			<svg class="certs__note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10"></circle>
				<path d="M12 16v-4m0-4h.01"></path>
			</svg>
			<p>
				Chaque intervention est réalisée dans le respect des normes ferroviaires et des procédures d'accès aux voies en vigueur.
			</p>
		</div>
	</div>
</section>

<style>
	.certs__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--sp-6);
		margin-bottom: var(--sp-12);
	}

	.cert {
		display: flex;
		align-items: center;
		gap: var(--sp-6);
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--r-xl);
		padding: var(--sp-8);
		transition: background var(--ease), border-color var(--ease);
	}

	.cert:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 117, 47, 0.4);
	}

	.cert__badge {
		flex-shrink: 0;
		width: 64px;
		height: 64px;
	}

	.cert__shield {
		width: 100%;
		height: 100%;
	}

	.cert__content {
		flex: 1;
	}

	.cert__name {
		font-size: var(--text-2xl);
		font-weight: 800;
		color: var(--orange);
		margin-bottom: var(--sp-2);
		letter-spacing: -0.01em;
	}

	.cert__desc {
		font-size: var(--text-base);
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.6;
	}

	.certs__note {
		display: flex;
		align-items: flex-start;
		gap: var(--sp-4);
		padding: var(--sp-6);
		background: rgba(255, 255, 255, 0.05);
		border-left: 3px solid var(--orange);
		border-radius: 0 var(--r-md) var(--r-md) 0;
	}

	.certs__note-icon {
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		color: var(--orange);
		margin-top: 2px;
	}

	.certs__note p {
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.65;
	}
</style>
