import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [
    react(),
    tailwindcss(),
    // vite-plugin-singlefile forces base to "./"; re-apply ours after it.
    viteSingleFile({ overrideConfig: { base: process.env.BASE_PATH ?? "/" } }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    allowedHosts: true,
  },
});
