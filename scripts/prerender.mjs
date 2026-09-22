import { build, loadEnv } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';

const temporary = new URL('../.prerender/', import.meta.url);
try {
  await build({ build: { ssr: 'src/entry-server.jsx', outDir: '.prerender', copyPublicDir: false } });
  const { render } = await import('../.prerender/entry-server.js');
  const target = new URL('../dist/index.html', import.meta.url);
  let html = await readFile(target, 'utf8');
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`);
  const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
  if (env.SITE_URL) {
    const site = new URL(env.SITE_URL);
    if (site.protocol !== 'https:' || site.pathname !== '/' || site.search || site.hash) throw new Error('SITE_URL must be an HTTPS origin, such as https://your-domain.com');
    const url = site.href;
    html = html.replace('</head>', `<link rel="canonical" href="${url}" /><meta property="og:url" content="${url}" /></head>`);
    html = html.replaceAll('content="/favicon.jpeg"', `content="${url}favicon.jpeg"`);
    html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (_, content) => {
      const person = JSON.parse(content);
      person.url = url;
      person['@id'] = `${url}#person`;
      return `<script type="application/ld+json">${JSON.stringify(person).replaceAll('<', '\\u003c')}</script>`;
    });
    await writeFile(new URL('../dist/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${url}</loc></url></urlset>`);
    await writeFile(new URL('../dist/robots.txt', import.meta.url), `User-agent: *\nAllow: /\nSitemap: ${url}sitemap.xml\n`);
  } else {
    console.warn('Set SITE_URL to your public HTTPS origin to generate canonical metadata and sitemap.xml.');
  }
  await writeFile(target, html);
  console.log('Prerendered portfolio HTML successfully.');
} finally {
  await rm(temporary, { recursive: true, force: true });
}
