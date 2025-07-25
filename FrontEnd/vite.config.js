import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";



export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/radio': {
        target: 'https://stm20.xcast.com.br:9518',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/radio/, ''),
      },
    },
  },
});
