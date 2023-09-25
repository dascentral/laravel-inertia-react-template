import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    eslintPlugin(),
    laravel({
      input: 'resources/js/app.jsx',
      refresh: true,
    }),
    react(),
  ],
});
