// vite.config.js
import { defineConfig } from "vite";
import { join, parse, resolve } from "path";

export default defineConfig({
  alias: {
    "~": __dirname,
  },
  build: {
    rollupOptions: {
      input: entryPoints("index.html", "projects/testimonials/index.html"),
    },
  },
  base: "/",
});

function entryPoints(...paths) {
  const entries = paths.map(parse).map((entry) => {
    const { dir, base, name, ext } = entry;
    const key = join(dir, name);
    const path = resolve(__dirname, dir, base);
    return [key, path];
  });

  const config = Object.fromEntries(entries);
  return config;
}
