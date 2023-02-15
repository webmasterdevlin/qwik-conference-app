/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths()
    ],
    test: {
      include: ['src/**/*.{test,spec}.{js,ts,tsx}'],
      exclude: ['src/tests'],
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
      reporters: 'verbose',
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    optimizeDeps: {
      include: [
        '@mui/material',
        '@mui/x-data-grid',
        '@react-three/fiber',
      ],
    },
    build: {
      cssCodeSplit: false,
      minify: false,
    }
  };
});
