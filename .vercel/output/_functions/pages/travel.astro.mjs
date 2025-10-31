/* empty css                                */
import { a as createComponent, e as renderScript, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Di-w9VIV.mjs';
import { G as GlobeComponent } from '../chunks/Globe_DHr_NAKC.mjs';
import { $ as $$BasicLayout } from '../chunks/BasicLayout_BFDAlyXQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Travel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/daveittt/Downloads/whateverr.../src/pages/travel.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "description": "A 3d globe showing countries that I have visited so far", "page": "travel", "title": "David Banson - Visited Countries" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a class="text-white absolute bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg" href="/">Back</a> ${renderComponent($$result2, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/daveittt/Downloads/whateverr.../src/components/Globe", "client:component-export": "default" })} ` })}`;
}, "/Users/daveittt/Downloads/whateverr.../src/pages/travel.astro", void 0);

const $$file = "/Users/daveittt/Downloads/whateverr.../src/pages/travel.astro";
const $$url = "/travel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Travel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
