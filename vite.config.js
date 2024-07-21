// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  alias: {
    "~": __dirname,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "testimonials/index.html"),
      },
    },
  },
  base: "/projects/",
});
