// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  // Keep the existing page.html URLs when deploying to static hosting.
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
});
