import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@': '/src',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@components': '/src/components',
      '@views': '/src/views',
    },
  },
  css:{
    preprocessorOptions:{
      scss: {
        additionalData: `@import "@/styles/base/colors.scss";`
      }
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  plugins: [react()],
})
