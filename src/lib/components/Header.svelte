<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	import { locales, localeNames } from '$lib/i18n/index.js';
	import type { Dict, Locale } from '$lib/i18n/types.js';

	let { dict, locale }: { dict: Dict; locale: Locale } = $props();

	let scrolled = $state(false);
	let menuOpen = $state(false);

	const navItems = [
		{ href: '#about', label: () => dict.nav.about },
		{ href: '#services', label: () => dict.nav.services },
		{ href: '#equipment', label: () => dict.nav.equipment },
		{ href: '#certifications', label: () => dict.nav.certifications },
		{ href: '#commitments', label: () => dict.nav.commitments },
		{ href: '#missions', label: () => dict.nav.missions },
		{ href: '#contact', label: () => dict.nav.contact }
	];

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 60;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function closeMenu() {
		menuOpen = false;
	}

	const currentPath = $derived($page.url.pathname.replace(`/${locale}`, '') || '/');
</script>

<header class="header" class:header--scrolled={scrolled} class:header--menu-open={menuOpen}>
	<div class="header__inner container">
		<a href="/{locale}" class="header__logo" aria-label="PL Rail – accueil" onclick={closeMenu}>
			<Logo variant="full" height={38} />
		</a>

		<nav class="header__nav" aria-label="Navigation principale">
			{#each navItems as item}
				<a href="/{locale}{item.href}" class="header__nav-link" onclick={closeMenu}>
					{item.label()}
				</a>
			{/each}
		</nav>

		<div class="header__actions">
			<div class="lang-switcher" aria-label="Language switcher">
				{#each locales as lang}
					{#if lang !== locale}
						<a href="/{lang}" class="lang-switcher__link" hreflang={lang}>
							{lang.toUpperCase()}
						</a>
					{:else}
						<span class="lang-switcher__current" aria-current="true">
							{lang.toUpperCase()}
						</span>
					{/if}
				{/each}
			</div>

			<button
				class="hamburger"
				aria-label="Menu"
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="hamburger__bar"></span>
				<span class="hamburger__bar"></span>
				<span class="hamburger__bar"></span>
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="mobile-menu" role="dialog" aria-label="Navigation mobile">
			<nav class="mobile-menu__nav">
				{#each navItems as item}
					<a href="/{locale}{item.href}" class="mobile-menu__link" onclick={closeMenu}>
						{item.label()}
					</a>
				{/each}
			</nav>
			<div class="mobile-menu__langs">
				{#each locales as lang}
					<a href="/{lang}" class="mobile-menu__lang" class:active={lang === locale} onclick={closeMenu}>
						{localeNames[lang]}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>

<!-- Spacer so content doesn't hide under fixed header -->
<div class="header-spacer"></div>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		transition: background var(--ease), box-shadow var(--ease);
	}

	.header--scrolled,
	.header--menu-open {
		background: rgba(255, 255, 255, 0.97);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: var(--shadow-md);
	}

	.header__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
		gap: var(--sp-6);
	}

	.header__logo {
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	/* Desktop nav */
	.header__nav {
		display: flex;
		align-items: center;
		gap: var(--sp-1);
		flex: 1;
		justify-content: center;
	}

	.header__nav-link {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.03em;
		text-decoration: none;
		padding: var(--sp-2) var(--sp-3);
		border-radius: var(--r-sm);
		transition: color var(--ease), background var(--ease);
		white-space: nowrap;
	}

	/* Default: transparent over hero */
	.header__nav-link {
		color: rgba(255, 255, 255, 0.85);
	}

	.header__nav-link:hover {
		color: var(--white);
		background: rgba(255, 255, 255, 0.12);
	}

	/* Scrolled or mobile-menu-open */
	.header--scrolled .header__nav-link,
	.header--menu-open .header__nav-link {
		color: var(--blue);
	}

	.header--scrolled .header__nav-link:hover,
	.header--menu-open .header__nav-link:hover {
		color: var(--orange);
		background: var(--blue-muted);
	}

	.header__actions {
		display: flex;
		align-items: center;
		gap: var(--sp-4);
		flex-shrink: 0;
	}

	/* Language switcher */
	.lang-switcher {
		display: flex;
		align-items: center;
		gap: var(--sp-1);
	}

	.lang-switcher__link,
	.lang-switcher__current {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		padding: 0.2rem 0.4rem;
		border-radius: var(--r-sm);
		text-decoration: none;
		transition: color var(--ease), background var(--ease);
	}

	/* Default: transparent header */
	.lang-switcher__link {
		color: rgba(255, 255, 255, 0.7);
	}

	.lang-switcher__link:hover {
		color: var(--orange);
		background: rgba(255, 255, 255, 0.12);
	}

	/* Scrolled */
	.header--scrolled .lang-switcher__link,
	.header--menu-open .lang-switcher__link {
		color: var(--gray-500);
	}

	.header--scrolled .lang-switcher__link:hover,
	.header--menu-open .lang-switcher__link:hover {
		color: var(--orange);
		background: var(--blue-muted);
	}

	.lang-switcher__current {
		color: var(--orange);
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		width: 36px;
		height: 36px;
		background: none;
		border: none;
		padding: 4px;
		border-radius: var(--r-sm);
	}

	.hamburger__bar {
		display: block;
		width: 22px;
		height: 2px;
		background: currentColor;
		border-radius: 2px;
		transition: transform var(--ease), opacity var(--ease);
	}

	/* Default: transparent header */
	.hamburger {
		color: white;
	}

	.header--scrolled .hamburger,
	.header--menu-open .hamburger {
		color: var(--blue);
	}

	/* Mobile menu */
	.mobile-menu {
		background: var(--white);
		border-top: 1px solid var(--gray-100);
		padding: var(--sp-6) 0 var(--sp-8);
	}

	.mobile-menu__nav {
		display: flex;
		flex-direction: column;
		padding-inline: var(--sp-6);
	}

	.mobile-menu__link {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--blue);
		text-decoration: none;
		padding: var(--sp-3) 0;
		border-bottom: 1px solid var(--gray-100);
		transition: color var(--ease);
	}

	.mobile-menu__link:hover {
		color: var(--orange);
	}

	.mobile-menu__langs {
		display: flex;
		flex-wrap: wrap;
		gap: var(--sp-2);
		padding: var(--sp-6) var(--sp-6) 0;
	}

	.mobile-menu__lang {
		font-size: var(--text-sm);
		font-weight: 600;
		text-decoration: none;
		padding: var(--sp-2) var(--sp-4);
		border-radius: var(--r-full);
		border: 1.5px solid var(--gray-200);
		color: var(--gray-700);
		transition: all var(--ease);
	}

	.mobile-menu__lang.active {
		background: var(--orange);
		color: var(--white);
		border-color: var(--orange);
	}

	.mobile-menu__lang:not(.active):hover {
		border-color: var(--orange);
		color: var(--orange);
	}

	.header-spacer {
		height: 72px;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.header__nav,
		.lang-switcher {
			display: none;
		}

		.hamburger {
			display: flex;
		}
	}

	@media (min-width: 901px) {
		.mobile-menu {
			display: none;
		}

		.header-spacer {
			display: none;
		}
	}
</style>
