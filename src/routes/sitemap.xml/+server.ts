import type { RequestHandler } from '@sveltejs/kit';
import { locales, hreflangMap } from '$lib/i18n/index.js';

const SITE_URL = 'https://plrail.fr';

export const prerender = true;

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().split('T')[0];

	const urls = locales
		.map((lang) => {
			const alternates = locales
				.map(
					(l) =>
						`    <xhtml:link rel="alternate" hreflang="${hreflangMap[l]}" href="${SITE_URL}/${l}"/>`
				)
				.join('\n');

			const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/fr"/>`;

			return `  <url>
    <loc>${SITE_URL}/${lang}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${lang === 'fr' ? '1.0' : '0.9'}</priority>
${alternates}
${xDefault}
  </url>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=86400'
		}
	});
};
