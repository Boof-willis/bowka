# Bowka Construction Website

**Full-service general contractor serving Utah County, Salt Lake County, and Davis County.**

This is the official website for Bowka Construction, a licensed B100 general contractor specializing in basement finishing, kitchen and bathroom remodeling, concrete work, home additions, and new construction.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── robots.txt              # SEO: Search engine crawling rules
│   └── images/                 # Static assets (logo, etc.)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header.astro        # Main navigation header
│   │   ├── Footer.astro        # Site footer
│   │   ├── ContactForm.astro   # Lead capture form (GHL webhook)
│   │   ├── TrustBar.astro      # Credentials display
│   │   ├── Breadcrumbs.astro   # Navigation breadcrumbs
│   │   └── StickyMobileCTA.astro # Mobile sticky CTA bar
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Main layout with SEO meta tags & schema
│   │   └── ServiceLayout.astro # Template for service pages
│   ├── pages/
│   │   ├── index.astro         # Homepage (main conversion page)
│   │   ├── about.astro         # About page with founder story
│   │   ├── contact.astro       # Contact page with form + map
│   │   ├── services/
│   │   │   ├── index.astro                  # Services overview
│   │   │   ├── basement-finishing.astro     # Individual service pages
│   │   │   ├── kitchen-remodeling.astro
│   │   │   ├── bathroom-remodeling.astro
│   │   │   ├── remodeling.astro
│   │   │   ├── concrete.astro
│   │   │   ├── additions.astro
│   │   │   └── new-construction.astro
│   │   ├── areas-we-serve/
│   │   │   ├── index.astro              # Service area hub
│   │   │   ├── provo.astro              # City-specific pages
│   │   │   ├── orem.astro
│   │   │   └── salt-lake-city.astro
│   │   └── blog/
│   │       ├── index.astro              # Blog listing page
│   │       └── [slug].astro             # Dynamic blog post pages
│   ├── content/
│   │   ├── config.ts                    # Content collections config
│   │   └── blog/
│   │       └── basement-finishing-cost-utah-2025.md  # Sample blog post
│   └── styles/
│       └── global.css          # Tailwind config + custom styles
└── package.json
```

## 🎨 Design System

### Brand Colors

```css
--color-charcoal: #3D3D3D;      /* Logo color, primary dark */
--color-graphite: #2A2A2A;      /* Deeper dark for headers, footer */
--color-slate: #5C5C5C;         /* Secondary text */
--color-amber: #D4913D;         /* Warm accent — CTAs, highlights */
--color-off-white: #F7F5F2;     /* Warm off-white backgrounds */
--color-light-gray: #EDEBE8;    /* Card backgrounds, borders */
```

### Typography

- **Headings:** Plus Jakarta Sans (700, 800)
- **Body:** DM Sans (400, 500)

Both loaded from Google Fonts.

## 📝 Content Management

### Updating Contact Information

Replace the following placeholders throughout the codebase:

```html
<!-- REPLACE: Phone number → (801) XXX-XXXX -->
<!-- REPLACE: Email → info@bowkaconstruction.com -->
<!-- REPLACE: GHL webhook URL → https://hooks.example.com/bowka-lead -->
```

**Files to update:**
- All pages with forms or phone numbers
- `src/components/ContactForm.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`

### Lead Capture Form

The contact form posts to a GoHighLevel webhook. Update the webhook URL in:
- `src/components/ContactForm.astro` (line ~100)
- `src/pages/contact.astro` (inline script)
- Service page forms in `src/layouts/ServiceLayout.astro`

**Form payload structure:**
```json
{
  "name": "John Doe",
  "phone": "(801) 555-0123",
  "email": "john@example.com",
  "service": "Basement Finishing",
  "message": "Project description",
  "source": "/contact",
  "timestamp": "2025-02-08T..."
}
```

### Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Blog Post Title"
description: "SEO description for the post"
pubDate: 2025-02-08
author: "Brady Berry"
category: "Basement Finishing"
featured: false
image: "https://example.com/image.jpg"
---

Your blog content here in Markdown format.
```

### Adding Service Area Pages

Follow the template in `src/pages/areas-we-serve/provo.astro`. Each city page should include:

- City-specific H1 with target keyword
- Unique intro paragraph mentioning local landmarks
- List of neighborhoods served
- Common projects in that city
- Local expertise paragraph
- Services grid
- Google Maps embed centered on that city
- Nearby areas links
- Schema markup for local SEO

## 🔍 SEO Implementation

### Meta Tags & Schema

Every page includes:

- Unique `<title>` and meta description
- Open Graph and Twitter Card tags
- Canonical URLs
- JSON-LD schema markup (LocalBusiness, Service, FAQPage, Article, etc.)

**Implemented schema types:**
- **Homepage:** LocalBusiness (GeneralContractor)
- **Service pages:** Service + FAQPage
- **Blog posts:** Article
- **City pages:** Service with areaServed

### Sitemap & Robots

- **Sitemap:** Auto-generated at `/sitemap-index.xml` (via @astrojs/sitemap)
- **Robots.txt:** Located at `/public/robots.txt`

### Internal Linking

- Service pages link to related services
- City pages link to nearby cities and relevant services
- Blog posts link to service pages
- Homepage links to all major sections

## 📱 Mobile Optimization

- **Sticky mobile CTA bar:** Fixed bottom bar on mobile with Call and Free Estimate buttons
- **Mobile menu:** Hamburger navigation with full-screen overlay
- **Touch targets:** Minimum 44px tap targets
- **Responsive images:** Using Astro's built-in optimization (when `<Image />` component is used)

## 🚢 Deployment

### Recommended Platforms

- **Vercel:** `vercel deploy`
- **Netlify:** `netlify deploy --prod`
- **Cloudflare Pages:** Connect repo and deploy

All support static Astro sites out of the box.

### Environment Setup

1. Update `site` in `astro.config.mjs` with your production domain
2. Replace all placeholder content (phone, email, webhook URL)
3. Add real project photos
4. Replace Brady Berry headshot
5. Update Google Maps embed URLs

### Pre-Launch Checklist

- [ ] Replace all `<!-- REPLACE -->` placeholders
- [ ] Add real phone number and email
- [ ] Configure GoHighLevel webhook URL
- [ ] Add real project photos
- [ ] Add Brady Berry headshot
- [ ] Update Google Maps embeds with real coordinates
- [ ] Test contact form submissions
- [ ] Test mobile menu functionality
- [ ] Run Lighthouse audit (target 95+ across all metrics)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

## 🎯 Lead Generation Features

1. **Homepage hero CTA** — Primary and secondary CTAs
2. **Sticky mobile CTA bar** — Always visible on mobile
3. **Contact forms** — Homepage, contact page, and all service pages
4. **Click-to-call buttons** — Prominent on all pages
5. **Service cards** — Direct links to detailed service pages
6. **Trust signals** — Credentials, testimonials, and certifications displayed throughout

## 📊 Analytics & Tracking

Add Google Analytics or similar by including the tracking script in `src/layouts/BaseLayout.astro` in the `<head>` section.

## 🔧 Customization

### Changing Colors

Edit `src/styles/global.css` in the `@theme` block.

### Updating Services

To add a new service:

1. Create a new page in `src/pages/services/your-service.astro`
2. Use the `ServiceLayout` component
3. Add the service to the homepage services grid (`src/pages/index.astro`)
4. Add to the services index page (`src/pages/services/index.astro`)
5. Add to the footer links (`src/components/Footer.astro`)

## 🐛 Troubleshooting

### Forms not submitting

- Check webhook URL is correct
- Verify network requests in browser DevTools
- Test webhook endpoint with curl/Postman

### Images not loading

- Ensure image URLs are accessible
- Use absolute URLs for external images
- Check browser console for CORS errors

### Dev server not starting

```bash
# Clear cache and reinstall
rm -rf node_modules .astro
npm install
npm run dev
```

## 📞 Support

For technical issues with the website, contact the development team.

For Bowka Construction business inquiries:
- **Phone:** (801) 555-0123 (placeholder)
- **Email:** info@bowkaconstruction.com (placeholder)
- **Service Area:** Utah County, Salt Lake County, Davis County

---

**Built with Astro 5 • Tailwind CSS v4 • Licensed B100 General Contractor**
