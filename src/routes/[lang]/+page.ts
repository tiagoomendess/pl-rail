import { locales } from '$lib/i18n/index.js';

export function entries() {
	return locales.map((lang) => ({ lang }));
}
