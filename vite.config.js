import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tailwindScrollbar from 'tailwind-scrollbar'
export default defineConfig({
  plugins: [
    tailwindcss(),
    tailwindScrollbar,
  ],
})