import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const REPO_NAME = '/Portfolio/';

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base:
    command === 'build' || isPreview === true
      ? REPO_NAME
      : '/',
}));
