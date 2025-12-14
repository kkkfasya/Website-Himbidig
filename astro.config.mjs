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
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
        fallbacks: ["Helvetica", "sans-serif"],
      },
      {
        provider: fontProviders.google(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm-plex-mono",
        fallbacks: ["Helvetica", "sans-serif"],
      },
    ],
  },
});
