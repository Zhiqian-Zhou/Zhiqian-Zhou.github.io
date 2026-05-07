import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Project page at https://zhiqian-zhou.github.io/Zhiqian-Zhou/.
// To switch to a user page at https://zhiqian-zhou.github.io/, first rename the
// GitHub repo to `Zhiqian-Zhou.github.io`, then run `VITE_BASE=/ npm run deploy`.
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
