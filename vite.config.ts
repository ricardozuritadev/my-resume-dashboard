import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      layout: "/src/layout",
      pages: "/src/pages",
      constants: "/src/constants",
      utils: "/src/utils",
      styles: "/src/styles"
    }
  },
  server: {
    open: true,
    port: 3000
  }
});
