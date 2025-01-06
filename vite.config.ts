import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/feed": {
        target: "https://backend.tedooo.com/hw",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/feed/, "/feed.json"),
      },
    },
  },
});
