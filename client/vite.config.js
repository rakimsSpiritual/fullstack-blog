import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

//export default {
  //css: {
  //  devSourcemap: false,  // Disable source maps for CSS in development
 // }
//}