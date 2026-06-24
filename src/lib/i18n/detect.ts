import { locales, defaultLocale } from './index.js';
import type { Locale } from './types.js';

const languageMap: Record<string, Locale> = {
	fr: 'fr',
	en: 'en',
	it: 'it',
	de: 'de',
	es: 'es',
	nl: 'nl',
	pt: 'pt'
};

function matchLocale(lang: string): Locale | null {
	const base = lang.toLowerCase().split('-')[0];
	return languageMap[base] ?? null;
}

export function detectLocale(): Locale {
	if (typeof navigator === 'undefined') return defaultLocale;

	const preferred = [navigator.language, ...(navigator.languages ?? [])];

	for (const lang of preferred) {
		const match = matchLocale(lang);
		if (match && (locales as string[]).includes(match)) {
			return match;
		}
	}

	return defaultLocale;
}
