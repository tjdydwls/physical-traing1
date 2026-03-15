import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/physical-traing1/',
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
