import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Substitua pelo nome EXATO do seu repositório no GitHub
const REPO_NAME = '/Portfolio';

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base:
    command === 'build' || isPreview === true
      ? REPO_NAME
      : '/',
}));
