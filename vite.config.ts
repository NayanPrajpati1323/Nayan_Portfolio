import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000, // Default port
    host: true, // Allow access from mobile devices
    hmr: {
      port: 3001, // Mobile port for hot module replacement
    },
  },
});
