# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ISH Technologies company profile website - a modern, elegant showcase built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features smooth animations via Framer Motion, WebGL effects using OGL, and Lottie animations.

## Development Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## Architecture Overview

### Core Structure

- **App Router**: Next.js 15+ App Router with TypeScript
- **Styling**: Tailwind CSS v4 with custom CSS variables in `globals.css`
- **Fonts**: Three Google Fonts configured in `app/layout.tsx`:
  - Plus Jakarta Sans (primary sans-serif)
  - Merriweather (serif for headings)
  - IBM Plex Sans (alternative sans)
- **React Compiler**: Enabled in `next.config.ts` via `reactCompiler: true`

### Key Configuration

- **Under Construction Mode**: Toggle via `UNDER_CONSTRUCTION` boolean in `app/config.ts`
  - When `true`: Shows UnderConstruction component instead of full site
  - When `false`: Shows normal website
- **Path Aliases**: `@/*` maps to project root via `tsconfig.json`
- **Development Tool**: React Grab loaded in development mode only (see `app/layout.tsx`)

### Routing & Pages

- **Homepage** (`app/page.tsx`): Hero → Motto → Projects sections
- **Solutions** (`app/solutions/page.tsx`): Solutions overview
- **About** (`app/about/page.tsx`): Company information
- **Contact** (`app/contact/page.tsx`): Contact page
- **Projects** (`app/project/[category]/[slug]/page.tsx`): Dynamic project pages
  - Categories: `product`, `research`
  - Project data defined in `app/project/content/projectData.ts`
  - Each project has custom content component (e.g., `PocketMineContent.tsx`, `YantoContent.tsx`)
  - Each project supports custom layouts via `customLayout` field

### Project Content System

Projects are configured in `app/project/content/projectData.ts`:

```typescript
interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  heroImages: string[];  // Array of image paths for carousel
  category: string;       // 'product' or 'research'
  customLayout?: string;  // Determines which content component to load
}
```

When adding a new project:
1. Add project data to `projectData` object in `app/project/content/projectData.ts`
2. Create content component in `app/project/content/{ProjectName}Content.tsx`
3. Import and add conditional render in `app/project/[category]/[slug]/page.tsx`
4. Place hero images in `public/project/{category}/{slug}/`

### Component Architecture

**UI Components** (`components/ui/`):
- Reusable primitives: `button.tsx`, `carousel.tsx`, `select.tsx`, `skeleton.tsx`, `pagination.tsx`
- `container.tsx`: Consistent page-width container

**Layout Components**:
- `header.tsx`: Navigation with variant support (dark/light/blue) and optional page title
- `footer.tsx`: Site footer

**Section Components**:
- `hero-section.tsx`: Homepage hero
- `motto-section.tsx`: Company motto display
- `projects-section.tsx`: Project grid/list

**Special Effects**:
- `webgl-background.tsx`: Interactive WebGL ripple effect using OGL library
- `webgl-particles.tsx`: Particle system
- `bell-animation.tsx`: Lottie animation component

**Carousels**:
- `project-hero-carousel.tsx`: Standard project hero carousel
- `yanto-hero-carousel.tsx`: Custom carousel for Yanto project

### Styling System

**CSS Variables** (defined in `app/globals.css`):
- Color system using oklch color space
- Consistent spacing: `--spacing-page-{mobile|tablet|desktop}` (2rem/3rem/4rem)
- Custom breakpoint: `--breakpoint-mobile` at 768px

**Utility Classes**:
- `.page-container`: Responsive container with consistent padding
- `.scrollbar-hide`: Hide scrollbars
- `.custom-scrollbar`: Styled scrollbar
- `.animate-marquee` / `.animate-marquee-reverse`: Marquee animations

**Fonts**:
- Access via CSS variables: `var(--font-plus-jakarta-sans)`, `var(--font-merriweather)`, `var(--font-ibm-plex-sans)`
- Or via Tailwind classes: `.font-plus-jakarta-sans`, `.font-merriweather`

### Animation Patterns

- **Framer Motion**: Used extensively for page transitions and interactive elements
- **Embla Carousel**: Carousel implementation with autoplay support
- **Lottie**: JSON-based animations via `lottie-react`
- **WebGL**: Custom shaders for ripple effects using OGL library

### Header Variants

The `Header` component supports three visual variants:
- `variant="dark"`: White text/logo (for dark backgrounds)
- `variant="light"`: Dark text/logo (for light backgrounds)
- `variant="blue"`: Blue-filtered logo and text

Optional props:
- `pageTitle` / `pageSubtitle`: Display custom title instead of logo
- `hideRightNav`: Hide "solutions" navigation link

## Important Patterns

### Custom Project Layouts

Each project in `app/project/[category]/[slug]/page.tsx` can have:
- Custom hero carousel component
- Custom overlay styling
- Custom content component
- Unique hero text positioning and styling

When modifying project pages, check the `customLayout` field to determine which components are used.

### WebGL Implementation

The WebGL background (`webgl-background.tsx`) uses:
- OGL library for WebGL rendering
- GPGPU (General-Purpose GPU) for ripple simulation
- Custom GLSL shaders for vertex/fragment processing
- Mouse/touch interaction for ripple generation

### Responsive Design

Breakpoint at 768px (`--breakpoint-mobile`) switches between mobile and desktop layouts. Use consistent padding via `.page-container` or custom spacing variables.

## Deployment

Configured for Vercel deployment via GitHub Actions (`.github/workflows/deploy.yml`). Requires secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Development Notes

- React 19 uses `react-jsx` transform (no need to import React in components)
- Next.js 16 uses async params - use `use(params)` hook from React
- Tailwind v4 uses `@import` instead of `require()` in CSS
- All client components must have `"use client"` directive
