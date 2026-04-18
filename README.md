# Haris Laeeq — Portfolio

A modern, animated portfolio website built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Google Fonts (Syne + DM Sans)
- **Deployment**: Vercel (recommended)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── Education.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   ├── Footer.tsx / .module.css
│   └── Orbs.tsx / .module.css
└── styles/
    └── globals.css       # Global styles, CSS variables, shared utilities
public/
└── haris.jpeg            # Profile photo
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — just click **Deploy**

## Customisation Tips

- **Projects**: Edit the `projects` array in `src/components/Projects.tsx`
- **Skills**: Edit the `skillsData` array in `src/components/Skills.tsx`
- **Education**: Edit the `educationData` array in `src/components/Education.tsx`
- **Colors**: Change CSS variables in `src/styles/globals.css` (`:root` block)
- **Photo**: Replace `public/haris.jpeg` with any image and update the `src` in `Hero.tsx`
