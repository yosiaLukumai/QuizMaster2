import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
<<<<<<< HEAD
  esbuild: { 
=======
   esbuild: {
>>>>>>> 05283d6504ec9603eb451fae7eb55f616f19bc52
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  }
})
