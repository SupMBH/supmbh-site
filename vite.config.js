import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remplace 'supmbh-site' par le nom de ton repo GitHub
export default defineConfig({
  plugins: [react()],
  base: '/supmbh-site/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
