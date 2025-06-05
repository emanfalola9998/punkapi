import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: "/", // <-- important
  server: {
    proxy: {
      '/api': {
        target: 'https://emmanuelfalola.app.n8n.cloud', // add http
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
