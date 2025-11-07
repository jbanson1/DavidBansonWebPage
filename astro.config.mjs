import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

export default defineConfig({
  // Static export = no serverless functions
  output: "static",
  site: "https://www.davidbanson.com",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://www.davidbanson.com/sitemap-index.xml",
        "https://www.davidbanson.com/sitemap-0.xml",
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
  vite: {
    assetsInclude: "**/*.riv",
  },
});
