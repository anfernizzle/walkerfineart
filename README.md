# walkerfineart.org

Modern Next.js (TypeScript) rebuild of Anthony Cannon Walker’s fine art portfolio, with visual and behavioral parity to the legacy PHP site. Static export — ready for Vercel.

## Local development

```bash
cd ~/Projects/walkerfineart
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Production build (static)

```bash
npm run build
```

Output lands in `out/` (`output: "export"` in `next.config.ts`).

## Deploy on Vercel

1. Create a new GitHub repo (this app is **not** part of Walker-Design / `my-portfolio-new`).
2. Push this folder:
   ```bash
   git remote add origin git@github.com:<you>/walkerfineart.git
   git push -u origin main
   ```
3. In Vercel → New Project → import that repo.
4. Framework: Next.js. Build: `next build`. Output: static export (no server).
5. Point `walkerfineart.org` (and `www`) DNS to Vercel. TLS is automatic.

`vercel.json` permanently redirects legacy `*.php` URLs to clean routes.

## What’s included

- All public portfolio pages (home, profile, project series)
- Legacy CSS / Foundation / Owl Carousel / jQuery behavior
- Gallery data converted from XML → JSON (edit `lib/galleries/*.json`)
- Page copy in `lib/content/*.html`
- Needed images + MyFonts webfonts under `public/`

## What’s excluded

- Nested FTP dumps (`anthonywalkerdesign.com`, empty `walkerdesign.org`)
- Scaffold/dev files (`template.php`, `borders2.php`, `content/static examples`)
- GoDaddy ad image

## Content edits

| Change | Where |
|--------|--------|
| Project text / profile | `lib/content/*.html` |
| Slideshow images & captions | `lib/galleries/*.json` + files under `public/img/projects/` |
| Nav / page metadata | `lib/projects.ts` |
| Styles | `public/css/site.css` (parity-first; avoid redesign) |
