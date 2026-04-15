import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',     // écoute sur toutes les interfaces (obligatoire avec Docker)
    port: 5173,
    watch: {
      usePolling: true,  // obligatoire pour détecter les changements via volumes Docker
      interval: 300,
    },
    hmr: {
      port: 5173,        // WebSocket HMR sur le même port
    },
  },
})
