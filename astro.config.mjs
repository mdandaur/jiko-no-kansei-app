// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mdandaur.github.io',
  base: 'jiko-no-kansei-app',
  integrations: [sitemap()],
  experimental: {
    svg: true,
  },
});

