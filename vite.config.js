import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: { input: {
      index: resolve(__dirname, 'index.html'),
      about: resolve(__dirname, 'about.html'),
      projects: resolve(__dirname, 'projects.html'),
      resume: resolve(__dirname, 'resume.html'),
      experience: resolve(__dirname, 'experience.html'),
      friday: resolve(__dirname, 'friday.html'),
      insights: resolve(__dirname, 'insights.html'),
      contact: resolve(__dirname, 'contact.html')
    }}
  }
});
