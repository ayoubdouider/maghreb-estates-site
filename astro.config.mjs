import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live domein — bepaalt absolute URL's in sitemap, canonicals en structured data.
export default defineConfig({
  site: 'https://maghreb-estates.com',
  trailingSlash: 'always',
  build: {
    format: 'directory', // schone URL's: /huis-kopen-marokko/ i.p.v. .html
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
