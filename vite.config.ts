import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: "/punkapi/", // <-- important
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // add http
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
