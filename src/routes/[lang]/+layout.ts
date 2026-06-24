import { error } from '@sveltejs/kit';
import { isLocale, loadDict } from '$lib/i18n/index.js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	const { lang } = params;

	if (!isLocale(lang)) {
		error(404, 'Language not found');
	}

	const dict = await loadDict(lang);
	return { locale: lang, dict };
};
