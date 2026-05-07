import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Repo deploys at https://zhiqian-zhou.github.io/Zhiqian-Zhou/
// Override with VITE_BASE env var or set to '/' if you rename the repo to
// `Zhiqian-Zhou.github.io` (user pages serve from root).
const base = process.env.VITE_BASE ?? '/Zhiqian-Zhou/'

export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
