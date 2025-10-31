/* empty css                                */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, e as renderScript, r as renderComponent } from '../chunks/astro/server_Di-w9VIV.mjs';
import { a as getCollection } from '../chunks/_astro_content_BRvP9m2o.mjs';
import { $ as $$Layout } from '../chunks/Layout_CzO5z4kR.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://DBanson.com/");
const $$PostRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostRow;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="post-row"> <h3>Post placeholder</h3> </div>`;
}, "/Users/daveittt/Downloads/whateverr.../src/components/Blog/PostRow.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog"))?.sort(
    (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
  );
  return renderTemplate`${renderScript($$result, "/Users/daveittt/Downloads/whateverr.../src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "Layout", $$Layout, { "description": "A Geezer", "title": "David Banson" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-screen h-screen flex flex-col justify-start items-start max-w-3xl mx-auto p-8"> <a class="text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 mb-8 border-1 border-solid border-neutral-600 rounded-lg" href="/">Back</a> <h1 class="text-4xl font-bold mb-4 text-neutral-100">Posts</h1> <ul class="w-full"> ${posts?.map((post) => renderTemplate`${renderComponent($$result2, "PostRow", $$PostRow, { "date": post.data.pubDate || /* @__PURE__ */ new Date(), "id": post.id, "title": post.data.title || "No title" })}`)} </ul> </main> ` })}`;
}, "/Users/daveittt/Downloads/whateverr.../src/pages/blog/index.astro", void 0);

const $$file = "/Users/daveittt/Downloads/whateverr.../src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
