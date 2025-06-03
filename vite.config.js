import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

// Polyfill for Node.js v16 compatibility
const require = createRequire(import.meta.url)
const path = require('path')
const __dirname = path.dirname(new URL(import.meta.url).pathname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // Increase memory limit if needed
    hmr: {
      overlay: true,
    },
  },
})
