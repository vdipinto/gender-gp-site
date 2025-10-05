import { defineConfig } from "vite";
import path from "path";

const themeRoot = path.resolve(__dirname, "../wp-content/themes/gender-gp");
const src = path.resolve(themeRoot, "src");
const outDir = path.resolve(themeRoot, "dist");

export default defineConfig({
  root: src,
  base: "/wp-content/themes/gender-gp/dist/",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(src, "js/main.js"),
        style: path.resolve(src, "scss/main.scss"),
      },
      output: {
        entryFileNames: "main.js",
        assetFileNames: (assetInfo) =>
          assetInfo.name && assetInfo.name.endsWith(".css") ? "main.css" : "[name][extname]",
      },
    },
  },
  css: {
    preprocessorOptions: { scss: {} },
  },
  server: {
    host: "localhost",
    port: 5173,
    watch: { usePolling: true },
  },
});
