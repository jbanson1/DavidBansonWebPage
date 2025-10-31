import rss from '@astrojs/rss';
import { a as getCollection } from '../chunks/_astro_content_BRvP9m2o.mjs';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
export { renderers } from '../renderers.mjs';

const parser = new MarkdownIt();

async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "David Banson’s Blog",
    description: "my blog",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body)),
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
