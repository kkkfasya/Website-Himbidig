// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  experimental: {
    fonts: [
      {
        name: "Akira Expanded",
        cssVariable: "--font-akira",
        provider: "local",
        variants: [
          {
            src: ["./src/fonts/Akira-Expanded.woff2"],
          },
        ],
        fallbacks: ["Helvetica", "sans-serif"],
      },
    ],
  },
});
