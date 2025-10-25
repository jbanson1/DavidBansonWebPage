import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import netlify from "@astrojs/netlify";  // REMOVE THIS LINE
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
// import vercel from '@astrojs/vercel/serverless';  // COMMENT OUT FOR NOW

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'static',  // Using static for now
  // adapter: vercel(),  // COMMENT OUT FOR NOW
  site: "https://DBanson.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://DBanson.com/sitemap-index.xml",
        "https://DBanson.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  // REMOVED DUPLICATE output and adapter lines
  vite: {
    assetsInclude: "**/*.riv",
  },
});