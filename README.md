# Adi Arwan Syah Portfolio

Personal portfolio for Adi Arwan Syah, an Information Systems student focused on software engineering, responsive web applications, data dashboards, and AI-assisted products.

## Highlights

- Project showcase with live demos, source links, and case-study details.
- Certificate, tech stack, and learning mindset sections.
- Print-friendly resume page at `/Adi-Arwan-Syah-Resume.html`.
- SEO and Open Graph metadata for cleaner link previews.

## Tech Stack

- React
- Vite
- Tailwind CSS utilities
- Lucide React
- CSS modules per component

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Portfolio Checklist

- `Hero`: role positioning, CTA, interactive profile reveal.
- `RecruiterSummary`: quick proof for recruiters.
- `Projects`: project cards and case-study detail pages.
- `Certificates`: verified learning credentials.
- `Contact`: email, WhatsApp, LinkedIn, and mailto-based inquiry form.
- `Resume`: printable resume page in `public/Adi-Arwan-Syah-Resume.html`.

## Search visibility

Production domain: `https://adiarwnsyh.my.id/`, configured in the committed `.env.production` file. Hosting environment variables can override `SITE_URL`; remove any obsolete value there before deploying. After rebuilding and deploying, submit `https://adiarwnsyh.my.id/sitemap.xml` in Google Search Console. This configuration does not deploy the site or submit it to Google automatically.

`npm run build` prerenders the homepage into HTML so its content and project links are available before JavaScript runs. Case studies have crawlable links and update their page title and description after loading.

Set `SITE_URL` to your actual production HTTPS origin in your hosting environment (or `.env.production.local`) before building. For example, `SITE_URL=https://your-domain.com`. The build then creates `sitemap.xml`, adds its location to `robots.txt`, and generates absolute canonical and social image URLs. Without this setting, no production domain is invented and no sitemap is generated.

After deployment, verify ownership in Google Search Console and submit `/sitemap.xml`. Indexing and rankings depend on Google; neither first position nor immediate indexing is guaranteed. Query-based case studies currently rely on JavaScript for their individual metadata; the prerendered HTML is the homepage.
