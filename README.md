# Trust Printing Solution — Website

Bilingual (English / বাংলা) static website for Trust Printing Solution, Dhaka, Bangladesh.
Pure HTML, CSS and vanilla JavaScript. No build step, no paid services, no backend.

## Files

```
trust-printing-solution/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── logo/      logo-placeholder.svg  (add your logo.png here)
    ├── images/    demo mockups (SVG)
    └── icons/     favicon.svg
```

## 1. Add your official logo

Save your logo as **`assets/logo/logo.png`** (transparent PNG recommended; a wide logo around 360×112 px or larger works well).
The site displays it as-is (never recoloured or distorted) and scales it responsively. Until the file exists, a "YOUR LOGO" placeholder is shown.

If your logo is an SVG or WebP instead, update every `assets/logo/logo.png` reference in `index.html` (header, footer, Open Graph, structured data) and `script.js` to the new filename. Search engines and social previews prefer a PNG/JPG for the Open Graph image.

The footer places the logo on a white chip so it stays readable on the dark footer without recolouring.

## 2. Replace the demonstration images

The portfolio and service images in `assets/images/` are **demonstration mockups** and are labelled as such on the page. When you have real work, replace the files (same names, or edit the `src` in `index.html`), then:
- change the "Demo" captions and the demo notes in the `I18N` object in `script.js` (keys starting with `demo.`, `pf.sub`, `f.*1`, `f.*2`),
- use WebP/JPG photos at roughly 800×600 for best performance.

## 3. Set your production URL

After you know your live address:
1. `script.js` → `CONFIG.siteUrl` (this updates canonical, Open Graph and structured-data URLs at load).
2. `index.html` → search for `YOUR-USERNAME.github.io/trust-printing-solution` and replace it (canonical, `og:url`, `og:image`, JSON-LD) so crawlers that don't run JavaScript also see it.
3. `robots.txt` and `sitemap.xml` → replace the same placeholder URL.

## 4. Things to confirm with the business

Wording was kept neutral, so please check these are accurate:
- FAQ answer about sharing your own design.
- Process step 4 ("Ask us about delivery options") — no delivery time or availability is promised.
- Service descriptions are generic; add real details (sizes, paper types, minimum quantities, prices) only when confirmed.
- No reviews, awards, founding year or certifications are shown. The "Feedback" section only invites feedback.
- There is no contact form (no working submission service is configured); visitors are directed to WhatsApp and email.
- Directions use a Google Maps *search* for the supplied address, not an exact pin.

## 5. Deploy free on GitHub Pages

1. Create a GitHub account and a new **public** repository, e.g. `trust-printing-solution`.
2. Upload all files and folders (keep the structure above) — "Add file → Upload files", then commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/trust-printing-solution/`.
5. Update the URLs as described in section 3 and commit again.
6. Optional: add the site to Google Search Console and submit `sitemap.xml`.

## Deploy free on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** (or Direct Upload).
2. Select the repository. Framework preset: **None**. Build command: *leave empty*. Output directory: `/`.
3. Deploy, then update the production URL (section 3) to your `*.pages.dev` or custom domain.

## Features

- Sticky header, working mobile menu, EN / বাংলা switcher (remembered in localStorage, English by default)
- Service cards with prefilled WhatsApp inquiries (message language follows the selected language)
- Portfolio with category filters and keyboard-accessible lightbox (Esc, ← →)
- FAQ, process steps, contact buttons (WhatsApp, email, Google Maps search)
- SEO: title/description, Open Graph, canonical, LocalBusiness JSON-LD, robots.txt, sitemap.xml
- Accessible: skip link, focus styles, ARIA labels, reduced-motion support

Fonts (Inter, Hind Siliguri) load free from Google Fonts; the site falls back to system fonts if offline.
