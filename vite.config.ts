// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// NITRO_PRESET env var lets Vercel CI override the preset without touching this file.
// Locally (no env var) it defaults to "vercel" so local builds are always production-ready.
const preset = (process.env.NITRO_PRESET as string | undefined) ?? "vercel";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    // "vercel" preset emits .vercel/output which Vercel natively understands.
    // Set NITRO_PRESET=node-server locally if you want to test the node server build.
    preset,
    errorHandler: "./src/lib/nitro-error-handler.ts",
  },
});
