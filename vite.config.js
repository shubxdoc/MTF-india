import { defineConfig } from "vite"

export default defineConfig({
  // Base path for the project; adjust if deploying to a subdirectory
  base: "/MTF-india/",
  // Server options
  server: {
    port: 3000, // Default port is 3000; you can change this if needed
  },

  // Build options
  build: {
    outDir: "dist", // Output directory for the build files
    sourcemap: true, // Generate source maps for debugging
  },

  // Plugins (if you need any, such as for React, Vue, etc.)
  plugins: [],

  // Resolve options
  resolve: {
    alias: {
      "@": "/src", // Example alias for convenience
    },
  },
})
