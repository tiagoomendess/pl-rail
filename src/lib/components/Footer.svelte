<script lang="ts">
	import Logo from './Logo.svelte';
	import { locales, localeNames } from '$lib/i18n/index.js';
	import type { Dict, Locale } from '$lib/i18n/types.js';

	let { dict, locale }: { dict: Dict; locale: Locale } = $props();

	const navItems = [
		{ href: '#about', label: () => dict.nav.about },
		{ href: '#services', label: () => dict.nav.services },
		{ href: '#equipment', label: () => dict.nav.equipment },
		{ href: '#certifications', label: () => dict.nav.certifications },
		{ href: '#commitments', label: () => dict.nav.commitments },
		{ href: '#missions', label: () => dict.nav.missions },
		{ href: '#contact', label: () => dict.nav.contact }
	];

	const EMAIL = 'contact@plrail.fr';
	const PHONE_DISPLAY = '06 41 35 65 70';
	const PHONE_RAW = '+33641356570';
</script>

<footer class="footer">
	<div class="container footer__inner">
		<div class="footer__brand">
			<a href="/{locale}" aria-label="PL Rail – accueil" class="footer__logo-link">
				<Logo variant="white" height={36} />
			</a>
			<p class="footer__tagline">{dict.footer.tagline}</p>
			<div class="footer__contact-info">
				<a href="mailto:{EMAIL}" class="footer__contact-link">{EMAIL}</a>
				<a href="tel:{PHONE_RAW}" class="footer__contact-link">{PHONE_DISPLAY}</a>
			</div>
		</div>

		<nav class="footer__nav" aria-label="Navigation du site">
			{#each navItems as item}
				<a href="/{locale}{item.href}" class="footer__nav-link">{item.label()}</a>
			{/each}
		</nav>

		<div class="footer__langs">
			<p class="footer__langs-label">Languages</p>
			{#each locales as lang}
				<a
					href="/{lang}"
					class="footer__lang-link"
					class:active={lang === locale}
					hreflang={lang}
				>
					{localeNames[lang]}
				</a>
			{/each}
		</div>
	</div>

	<div class="footer__bottom">
		<div class="container footer__bottom-inner">
			<p class="footer__copy">{dict.footer.copyright}</p>
			<div class="footer__bottom-stripe" aria-hidden="true"></div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--blue-dark);
		color: rgba(255, 255, 255, 0.75);
	}

	.footer__inner {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: var(--sp-12);
		padding-top: var(--sp-16);
		padding-bottom: var(--sp-12);
	}

	.footer__logo-link {
		display: inline-flex;
		margin-bottom: var(--sp-4);
	}

	.footer__tagline {
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.6;
		max-width: 32ch;
		margin-bottom: var(--sp-5);
	}

	.footer__contact-info {
		display: flex;
		flex-direction: column;
		gap: var(--sp-2);
	}

	.footer__contact-link {
		font-size: var(--text-sm);
		color: var(--orange);
		text-decoration: none;
		transition: color var(--ease);
	}

	.footer__contact-link:hover {
		color: var(--orange-light);
	}

	.footer__nav {
		display: flex;
		flex-direction: column;
		gap: var(--sp-3);
		padding-top: var(--sp-2);
	}

	.footer__nav-link {
		font-size: var(--text-sm);
		font-weight: 500;
		color: rgba(255, 255, 255, 0.65);
		text-decoration: none;
		transition: color var(--ease);
	}

	.footer__nav-link:hover {
		color: var(--white);
	}

	.footer__langs {
		display: flex;
		flex-direction: column;
		gap: var(--sp-2);
		padding-top: var(--sp-2);
	}

	.footer__langs-label {
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.4);
		margin-bottom: var(--sp-1);
	}

	.footer__lang-link {
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		transition: color var(--ease);
	}

	.footer__lang-link:hover,
	.footer__lang-link.active {
		color: var(--orange);
	}

	/* Bottom bar */
	.footer__bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.07);
	}

	.footer__bottom-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: var(--sp-5);
		gap: var(--sp-6);
	}

	.footer__copy {
		font-size: var(--text-xs);
		color: rgba(255, 255, 255, 0.35);
	}

	/* Orange stripe accent */
	.footer__bottom-stripe {
		height: 2px;
		width: 80px;
		background: linear-gradient(90deg, var(--orange), transparent);
		border-radius: var(--r-full);
		flex-shrink: 0;
	}

	@media (max-width: 800px) {
		.footer__inner {
			grid-template-columns: 1fr 1fr;
		}

		.footer__brand {
			grid-column: span 2;
		}
	}

	@media (max-width: 500px) {
		.footer__inner {
			grid-template-columns: 1fr;
		}

		.footer__brand {
			grid-column: span 1;
		}
	}
</style>
