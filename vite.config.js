import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite configuration.
 *
 * `base` is the only thing that changes between deployments:
 *   - user/organisation site (a-janjan.github.io)  →  "/"          (default)
 *   - project site   (a-janjan.github.io/repo/)     →  "/repo/"
 *
 * Set it without touching this file by exporting VITE_BASE, e.g.
 *   VITE_BASE=/repo/ npm run build
 */
export default defineConfig(() => {
  const base = process.env.VITE_BASE || "/";

  return {
    base,
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          // The theme uses the classic @import syntax on purpose; keep the
          // build log free of deprecation noise.
          silenceDeprecations: ["import", "global-builtin", "color-functions"],
          quietDeps: true
        }
      }
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      chunkSizeWarningLimit: 900
    },
    // `allowedHosts: true` lets the dev/preview servers answer on any host
    // name — needed behind dev containers, proxies and tunnels. It does not
    // affect the static production build.
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      allowedHosts: true
    },
    preview: {
      host: "0.0.0.0",
      port: 8080,
      strictPort: true,
      allowedHosts: true
    }
  };
});
