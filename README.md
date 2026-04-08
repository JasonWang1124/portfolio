# Portfolio — Jason Wang 王俊凱

個人技術 Portfolio 網站，展示工作經歷、技術棧與代表性專案。

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Static Export)
- **Language**: TypeScript (strict mode)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Testing**: Vitest
- **CI/CD**: GitHub Actions → Cloudflare Pages
- **Hosting**: Cloudflare Pages

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (SEO metadata, fonts, JSON-LD)
│   ├── page.tsx            # Home page (composes sections)
│   └── globals.css         # Theme variables & base styles
├── components/
│   ├── sections/           # Page sections (Hero, Experience, AI, etc.)
│   │   ├── index.ts        # Barrel export
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Languages.tsx
│   │   ├── Frameworks.tsx
│   │   ├── AI.tsx
│   │   ├── Data.tsx
│   │   ├── Infrastructure.tsx
│   │   ├── Projects.tsx
│   │   └── Footer.tsx
│   ├── Nav.tsx             # Navigation with scroll-aware active state
│   ├── Reveal.tsx          # IntersectionObserver scroll animation wrapper
│   ├── ParticleCanvas.tsx  # Canvas-based particle system (GPU rendered)
│   ├── SectionHeader.tsx   # Reusable section header
│   └── GithubIcon.tsx      # GitHub SVG icon
├── data/
│   └── profile.ts          # All profile data (separated from UI)
└── lib/
    └── highlight.tsx       # Safe text highlighting (no dangerouslySetInnerHTML)
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

## Features

### SEO
- Next.js Metadata API (title, description, keywords)
- Open Graph & Twitter Card tags
- JSON-LD structured data (Person schema)
- Semantic HTML with proper heading hierarchy

### Accessibility
- Skip-to-content link
- ARIA labels & `aria-hidden` for decorative elements
- `:focus-visible` keyboard navigation styles
- `prefers-reduced-motion` support (all animations disabled)
- Print-friendly stylesheet

### Performance
- Google Fonts via `next/font` (zero layout shift)
- Canvas particle system with `requestAnimationFrame`
- IntersectionObserver with `unobserve` after trigger
- Scroll events throttled with `requestAnimationFrame`
- Static export (no server runtime needed)

## Deployment

This site is configured for static export, compatible with:
- **Cloudflare Pages** (recommended)
- Vercel
- Netlify
- Any static hosting

```bash
npm run build
# Output in .next/ — deploy the static export
```

## License

MIT
