// vite.config.js
import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    // define: {
    //   __APP_ENV__: JSON.stringify(env.APP_ENV),
    // },
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
    base: mode === "development" ? "/" : "/projects/",
  };
});
