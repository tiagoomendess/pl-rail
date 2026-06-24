import type { Locale, Dict } from './types.js';

export type { Locale, Dict };

export const locales: Locale[] = ['fr', 'en', 'it', 'de', 'es', 'nl', 'pt'];

export const defaultLocale: Locale = 'fr';

export function isLocale(value: string): value is Locale {
	return (locales as string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
	fr: 'Français',
	en: 'English',
	it: 'Italiano',
	de: 'Deutsch',
	es: 'Español',
	nl: 'Nederlands',
	pt: 'Português'
};

export const hreflangMap: Record<Locale, string> = {
	fr: 'fr-FR',
	en: 'en',
	it: 'it',
	de: 'de',
	es: 'es',
	nl: 'nl',
	pt: 'pt-PT'
};

export async function loadDict(locale: Locale): Promise<Dict> {
	const modules: Record<Locale, () => Promise<{ default: Dict }>> = {
		fr: () => import('./locales/fr.json'),
		en: () => import('./locales/en.json'),
		it: () => import('./locales/it.json'),
		de: () => import('./locales/de.json'),
		es: () => import('./locales/es.json'),
		nl: () => import('./locales/nl.json'),
		pt: () => import('./locales/pt.json')
	};
	const mod = await modules[locale]();
	return mod.default;
}
