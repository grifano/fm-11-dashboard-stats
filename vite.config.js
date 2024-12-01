import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: () =>
        new URLSearchParams({
          format: "webp", // Convert to WebP
          quality: "85", // Set quality
          widths: "78,156,234", // Generate 1x, 2x, and 3x sizes
        }),
    }),
  ],
});
