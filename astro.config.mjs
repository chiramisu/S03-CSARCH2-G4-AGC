import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://chiramisu.github.io',
  base: '/S03-CSARCH2-G4-AGC/',
  trailingSlash: 'always',
  integrations: [
    mdx(), 
    react(), 
    icon()
  ],
});
