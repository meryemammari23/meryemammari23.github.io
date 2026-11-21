import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site utilisateur GitHub Pages (meryemammari23.github.io) : la base est "/".
// Si tu déploies dans un dépôt de projet (ex. /portfolio/), mets base: '/portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
