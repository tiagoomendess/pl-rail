<script lang="ts">
	import Logo from './Logo.svelte';
	import type { Dict, Locale } from '$lib/i18n/types.js';

	let { dict, locale }: { dict: Dict; locale: Locale } = $props();

	function scrollDown() {
		document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="hero" aria-label="PL Rail">
	<div class="hero__overlay"></div>

	<div class="hero__content">
		<!-- Full-colour logo in a white pill so it always reads against any photo background -->
		<div class="hero__logo-wrap">
			<Logo variant="full" height={72} />
		</div>

		<p class="hero__tagline">{dict.hero.tagline}</p>

		<a href="/{locale}#contact" class="btn btn--primary hero__cta">
			{dict.hero.cta}
		</a>
	</div>

	<button class="hero__scroll-hint" onclick={scrollDown} aria-label={dict.hero.scroll_hint}>
		<span class="hero__scroll-text">{dict.hero.scroll_hint}</span>
		<span class="hero__scroll-arrow" aria-hidden="true">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="6 9 12 15 18 9"></polyline>
			</svg>
		</span>
	</button>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: var(--blue-dark);
		background-image:
			linear-gradient(to bottom, rgba(11, 32, 53, 0.52) 0%, rgba(17, 48, 77, 0.72) 100%),
			url('/images/background.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.hero__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			160deg,
			rgba(11, 32, 53, 0.25) 0%,
			transparent 50%,
			rgba(255, 117, 47, 0.07) 100%
		);
		pointer-events: none;
	}

	/* Diagonal orange stripe accent */
	.hero::before {
		content: '';
		position: absolute;
		bottom: -10%;
		right: -5%;
		width: 55vw;
		height: 3px;
		background: linear-gradient(90deg, transparent, var(--orange), transparent);
		transform: rotate(-12deg);
		opacity: 0.3;
		pointer-events: none;
	}

	.hero__content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: var(--sp-8) var(--sp-6);
		gap: var(--sp-8);
		animation: fadeUp 0.9s ease both;
	}

	/* White pill keeps the full-colour logo legible on any dark background photo */
	.hero__logo-wrap {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--r-lg);
		padding: 0.75rem 1.5rem;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
	}

	.hero__tagline {
		color: var(--white);
		font-size: clamp(var(--text-xl), 3.5vw, var(--text-4xl));
		font-weight: 700;
		line-height: 1.2;
		max-width: 22ch;
		text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);
		letter-spacing: -0.01em;
	}

	.hero__cta {
		font-size: var(--text-lg);
		padding: 0.85em 2.25em;
	}

	/* Scroll hint */
	.hero__scroll-hint {
		position: absolute;
		bottom: 2.25rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--sp-2);
		color: rgba(255, 255, 255, 0.7);
		background: none;
		border: none;
		font-family: var(--font);
		z-index: 2;
		transition: color var(--ease);
	}

	.hero__scroll-hint:hover {
		color: var(--white);
	}

	.hero__scroll-text {
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.hero__scroll-arrow {
		animation: scrollBounce 2.2s ease-in-out infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.hero__scroll-arrow {
			animation: none;
		}
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(32px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes scrollBounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}

	@media (max-width: 600px) {
		.hero__logo-wrap :global(.logo) {
			height: 54px !important;
		}
	}
</style>
