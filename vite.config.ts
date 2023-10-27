import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

console.log(`${__dirname}\\src\\main.js`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve( '.\\src\\ShareByLink.tsx'),
      name: 'ReversShareLink',
      // the proper extensions will be added
      fileName: 'share-link',
    }
  },
})
