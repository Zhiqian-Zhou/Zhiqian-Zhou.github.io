import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Deploys at https://zhiqian-zhou.github.io/ (user page — repo name must be
// `Zhiqian-Zhou.github.io`). Override with VITE_BASE for other repo names.
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
