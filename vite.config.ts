// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import checker from 'vite-plugin-checker'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({ typescript: true }),
    AutoImport({ imports: ['react'], dts: 'src/auto-imports.d.ts' }),
    Inspect(),  // remove in production
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  server: {
    port: 3000,
    open: true,      // opens browser on start
    proxy: {
      '/api': 'http://localhost:8080'   // proxy API calls in dev
    }
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 500
  }
})