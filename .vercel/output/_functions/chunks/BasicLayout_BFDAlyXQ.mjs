import { c as createAstro, a as createComponent, b as renderTemplate, d as renderSlot, j as renderHead, u as unescapeHTML, i as addAttribute } from './astro/server_Di-w9VIV.mjs';
import 'clsx';
/* empty css                         */

const LINKS = {
  github: "https://github.com/daveittt",
  linkedin: "https://www.linkedin.com/in/davidbanson/",
  medium: "https://medium.com/@daveitt"};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://DBanson.com/");
const $$BasicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title, description, page, pubDate } = Astro2.props;
  const image = page === "travel" ? `${Astro2.url.origin}/globe_preview.webp"` : `${Astro2.url.origin}/og-image.png`;
  const schema = page !== "blog" ? {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "David",
    url: Astro2.url.origin,
    sameAs: [LINKS.linkedin, LINKS.github],
    image: `${Astro2.url.origin}/og-image.png`,
    jobTitle: "Freelance Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Italy",
        addressCountry: "IT"
      }
    },
    nationality: {
      "@type": "Country",
      name: "Italy"
    }
  } : {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": Astro2.url.href
    },
    headline: title || title,
    description: description || title,
    image: `${Astro2.url.origin}/og-image.png`,
    //TODO: dynamic
    author: {
      "@type": "Person",
      name: "David",
      url: Astro2.url.origin,
      sameAs: [LINKS.linkedin, LINKS.github]
    },
    publisher: {
      "@type": "Organization",
      name: "David       ",
      logo: {
        "@type": "ImageObject",
        url: `${Astro2.url.origin}/og-image.png`
      }
    },
    datePublished: pubDate || (/* @__PURE__ */ new Date()).toISOString(),
    dateModified: pubDate || (/* @__PURE__ */ new Date()).toISOString()
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta content="width=device-width" name="viewport"><link href="/favicon.ico" rel="icon" type="image/x-icon"><meta', ' name="generator"><title>', "</title><meta", ` name="description"><meta content="index, follow" name="robots"><!-- Basic OG tags for sharing your website's content on platforms like Facebook and LinkedIn --><meta`, ' property="og:title"><meta', ' property="og:description"><meta content="website" property="og:type"><meta', ' property="og:url"><meta', ' property="og:image"><!-- Basic Twitter Card tags --><meta content="summary_large_image" name="twitter:card"><meta', ' name="twitter:title"><meta', ' name="twitter:description"><meta', ' name="twitter:image"><link href="https://cdn.fontshare.com" rel="preconnect"><link', ' rel="canonical"><script type="application/ld+json">', "<\/script>", '</head> <body class="bg-darkslate-700 md:h-screen flex flex-col justify-center items-center"> ', " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url.origin, "content"), addAttribute(image || `${Astro2.url.origin}/og-image.png`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image || `${Astro2.url.origin}/og-image.png`, "content"), addAttribute(Astro2.url.href, "href"), unescapeHTML(JSON.stringify(schema)), renderHead(), renderSlot($$result, $$slots["loader"]), renderSlot($$result, $$slots["default"]));
}, "/Users/daveittt/Downloads/whateverr.../src/layouts/BasicLayout.astro", void 0);

export { $$BasicLayout as $, LINKS as L };
