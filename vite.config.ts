import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  base: "/punkapi/",
  server: {
  proxy: {
    '/api': {
      target: 'https://emmanuelfalola.app.n8n.cloud',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
}
);


