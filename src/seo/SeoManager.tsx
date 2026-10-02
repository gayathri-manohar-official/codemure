import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMetadata, organizationSchema } from './pageMetadata';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
    const selector = `meta[${attribute}="${key}"]`;
    const existing = document.head.querySelector<HTMLMetaElement>(selector);
    const meta = existing ?? document.createElement('meta');
    meta.setAttribute(attribute, key);
    meta.content = content;
    if (!existing) document.head.append(meta);
}

export default function SeoManager() {
    const { pathname } = useLocation();

    useEffect(() => {
        const page = getPageMetadata(pathname);
        const canonicalUrl = `https://codemure.in${page.path === '/' ? '/' : page.path}`;
        const robots = page.indexable === false ? 'noindex,follow' : 'index,follow';

        document.title = page.title;
        upsertMeta('name', 'description', page.description);
        upsertMeta('name', 'robots', robots);
        upsertMeta('property', 'og:type', 'website');
        upsertMeta('property', 'og:site_name', 'Codemure');
        upsertMeta('property', 'og:title', page.title);
        upsertMeta('property', 'og:description', page.description);
        upsertMeta('property', 'og:url', canonicalUrl);
        upsertMeta('name', 'twitter:card', 'summary');
        upsertMeta('name', 'twitter:title', page.title);
        upsertMeta('name', 'twitter:description', page.description);

        let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.append(canonical);
        }
        canonical.href = canonicalUrl;

        let schema = document.head.querySelector<HTMLScriptElement>('#codemure-organization-schema');
        if (pathname === '/') {
            if (!schema) {
                schema = document.createElement('script');
                schema.id = 'codemure-organization-schema';
                schema.type = 'application/ld+json';
                document.head.append(schema);
            }
            schema.textContent = JSON.stringify(organizationSchema);
        } else {
            schema?.remove();
        }
    }, [pathname]);

    return null;
}