import { defineConfig } from 'astro/config';

export default defineConfig({
  // On GitHub Pages the workflow sets SITE_URL / BASE_PATH; locally they default to root.
  site: process.env.SITE_URL || 'https://maryamrajabian.ir',
  base: process.env.BASE_PATH || '/',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    routing: { prefixDefaultLocale: false },
  },
});
