import { defineConfig } from "vite"

export default defineConfig({
  base: "/MTF-india/",
  build: {
    outDir: "dist", // Directory where build files are output
    sourcemap: true, // Enable source maps for debugging
  },
  server: {
    port: 3000, // Port for the development server
  },
})
