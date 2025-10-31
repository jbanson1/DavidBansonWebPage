import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import svelte from "@astrojs/svelte";

export default defineConfig({
  output: "server",
  adapter: vercel(),
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
  vite: {
    assetsInclude: "**/*.riv",
  },
});
