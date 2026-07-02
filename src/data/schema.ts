import { site } from './site';

// Herbruikbare JSON-LD builders. Pagina's geven de output door aan BaseLayout `schema`.

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export function serviceSchema(opts: { naam: string; beschrijving: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.naam,
    description: opts.beschrijving,
    url: new URL(opts.path, site.url).href,
    areaServed: { '@type': 'Country', name: 'Marokko' },
    provider: { '@id': site.url + '/#organization' },
    serviceType: 'Vastgoedbegeleiding Marokko',
  };
}

export function articleSchema(opts: { titel: string; beschrijving: string; path: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.titel,
    description: opts.beschrijving,
    image: new URL(opts.image ?? site.ogImage, site.url).href,
    mainEntityOfPage: new URL(opts.path, site.url).href,
    author: { '@id': site.url + '/#organization' },
    publisher: { '@id': site.url + '/#organization' },
    inLanguage: 'nl-NL',
  };
}
