// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/dvlad-devops-lp',
  integrations: [tailwind()],
  preview: {
    allowedHosts: true
  }
});
