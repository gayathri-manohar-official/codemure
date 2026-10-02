import type { Plugin } from 'vite';
import { organizationSchema, pageMetadata, type PageMetadata } from './src/seo/pageMetadata.js';

const escapeHtml = (value: string) => value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

function renderMetadata(page: PageMetadata) {
    const canonicalUrl = `https://codemure.in${page.path === '/' ? '/' : page.path}`;
    const robots = page.indexable === false ? 'noindex,follow' : 'index,follow';
    const organization = page.path === '/'
        ? `<script id="codemure-organization-schema" type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`
        : '';

    return [
        `<title>${escapeHtml(page.title)}</title>`,
        `<meta name="description" content="${escapeHtml(page.description)}" />`,
        `<meta name="robots" content="${robots}" />`,
        `<link rel="canonical" href="${canonicalUrl}" />`,
        '<meta property="og:type" content="website" />',
        '<meta property="og:site_name" content="Codemure" />',
        `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
        `<meta property="og:url" content="${canonicalUrl}" />`,
        '<meta name="twitter:card" content="summary" />',
        `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
        organization,
    ].filter(Boolean).join('\n    ');
}

export default function seoPlugin(): Plugin {
    return {
        name: 'codemure-seo-pages',
        enforce: 'post',
        apply: 'build',
        generateBundle(_, bundle) {
            const index = bundle['index.html'];
            if (!index || index.type !== 'asset') return;

            const template = String(index.source);
            for (const page of pageMetadata) {
                const html = template.replace('<!-- SEO_METADATA -->', renderMetadata(page));
                if (page.path === '/') {
                    index.source = html;
                } else {
                    this.emitFile({
                        type: 'asset',
                        fileName: `${page.path.slice(1)}.html`,
                        source: html,
                    });
                }
            }

            const urls = pageMetadata
                .filter((page) => page.indexable !== false)
                .map((page) => `  <url><loc>https://codemure.in${page.path === '/' ? '/' : page.path}</loc></url>`)
                .join('\n');
            this.emitFile({
                type: 'asset',
                fileName: 'sitemap.xml',
                source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
            });
            this.emitFile({
                type: 'asset',
                fileName: 'robots.txt',
                source: 'User-agent: *\nAllow: /\n\nSitemap: https://codemure.in/sitemap.xml\n',
            });
        },
    };
}