import {defineConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        define: {
          'process.env.NODE_ENV': JSON.stringify(mode),
        },
        plugins: [react()],
        build: {
            lib: {
                entry: resolve('.\\src\\ShareByLink.tsx'),
                name: 'ReversShareLink',
                fileName: 'share-link',
                formats: ['es', 'umd']
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                },
            },
        },
    }
})
