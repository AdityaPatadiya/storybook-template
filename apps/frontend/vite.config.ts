import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@octo/trpc': path.resolve(__dirname, '../../packages/trpc/src/index.ts'),
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
});
