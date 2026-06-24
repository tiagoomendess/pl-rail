import type { Handle } from '@sveltejs/kit';
import { isLocale, defaultLocale } from '$lib/i18n/index.js';

export const handle: Handle = async ({ event, resolve }) => {
	const segments = event.url.pathname.split('/');
	const langSegment = segments[1] ?? '';
	const lang = isLocale(langSegment) ? langSegment : defaultLocale;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
