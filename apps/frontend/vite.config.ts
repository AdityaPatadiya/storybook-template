import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@octo/trpc': path.resolve(__dirname, '../../packages/trpc/src/index.ts'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
});
