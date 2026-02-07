// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { SITE } from "./siteConfig.ts";

export default defineConfig({
  site: SITE,
  // base: BASE,
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
