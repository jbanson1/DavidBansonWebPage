# SEO & Preview Guide

## Updating per-page meta
- All meta tags live in `src/layouts/BasicLayout.astro`.
- When using `Layout.astro` (or `BasicLayout` directly), pass any of:
  - `title`
  - `description`
  - `image` (absolute or `/relative` path)
  - `url` (absolute canonical URL)
- Omit a prop to use the global default (`David Banson | Portfolio`, `/og-image.png`, etc.).

## Adding a new Open Graph image
- Place the asset in `public/` (e.g. `/og-image.png`).
- Pass `image="/my-image.png"` to the page’s layout props.
- The layout automatically converts relative paths into `https://www.davidbanson.com/...`.

## Re-scraping cached previews
Some platforms cache link previews aggressively. After deploying meta changes, force a re-scrape:

1. **Facebook & Messenger** – https://developers.facebook.com/tools/debug/
   - Enter the URL, click **Debug**, then **Scrape Again** until new data appears.
2. **X / Twitter** – https://cards-dev.twitter.com/validator
   - Paste the canonical URL and click **Preview Card**.
3. **LinkedIn** – https://www.linkedin.com/post-inspector/
   - Inspect the URL until the new metadata is shown.
4. **Discord, Slack, WhatsApp, iMessage** – share the URL once with a cache-busting query, e.g. `https://www.davidbanson.com/?v=2`.

If a preview still shows stale content, confirm:
- The page renders a single set of OG/Twitter tags (view page source).
- `og:image` is absolute and accessible (open it in a new tab).
- The deployment completed and CDNs have purged cached HTML.
