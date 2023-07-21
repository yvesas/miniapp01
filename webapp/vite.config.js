import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
    manifest: true
  },
  server: {
    host: '127.0.0.1',
    port: 3001
  }
})
