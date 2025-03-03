import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Load environment variables manually
const API_URL = process.env.VITE_API_URL || 'https://harvitools.onrender.com';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API_URL, // Use the loaded variable
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
