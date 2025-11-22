# ISH Technologies - Company Profile

A modern, elegant company profile website for ISH Technologies built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Clean, minimalist black & white design
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 & React 19
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS v4 for styling

## Tech Stack

- **Framework**: Next.js 15.0.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Font**: Geist Sans & Geist Mono
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd company-profile
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Option 2: Using GitHub Actions

The project includes a GitHub Actions workflow for automated deployments.

1. Create a new project on Vercel and note down:
   - `VERCEL_TOKEN` - Get from Vercel Account Settings → Tokens
   - `VERCEL_ORG_ID` - Get from Vercel Project Settings
   - `VERCEL_PROJECT_ID` - Get from Vercel Project Settings

2. Add these as secrets in your GitHub repository:
   - Go to Settings → Secrets and variables → Actions
   - Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`

3. Push to the `main` branch and GitHub Actions will automatically deploy

### Option 3: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Project Structure

```
company-profile/
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Hero/About section
│   ├── solutions-section.tsx # Solutions section
│   └── industries-section.tsx # Industries section with images
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets

```

## Customization

### Colors

The project uses a black & white theme defined in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --muted: #f5f5f5;
  --muted-foreground: #666666;
  --border: #e5e5e5;
}
```

### Content

Update the content in the respective component files:
- Company info: `components/hero-section.tsx`
- Solutions: `components/solutions-section.tsx`
- Industries: `components/industries-section.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Copyright © 2025 ISH Technologies. All rights reserved.
