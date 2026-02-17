# Adeel Asghar Portfolio — Vite Edition

A blazing-fast, pixel-perfect dark portfolio built with **Vite + React + Tailwind CSS + Framer Motion**.

## 🎨 Design
Exact match to the reference design:
- Deep navy dark background (`#0a0f1e`)
- Cyan/teal accent color (`#22d3ee`)
- Animated active navbar indicator
- Typing role animation in Hero
- Framer Motion scroll-triggered animations
- Glowing borders and hover effects

## 🚀 Quick Start (Local)

### 1. Add your profile photo
Place your photo at:
```
src/assets/Pic.jpg
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run dev server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

---

## ☁️ Deploy to Vercel (3 steps)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow prompts → your site is live!

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repo
4. Settings auto-detected ✅  
5. Click **Deploy** → live in ~60 seconds

> Vercel automatically detects Vite — no extra config needed.  
> The included `vercel.json` handles SPA routing.

---

## 📁 Project Structure

```
vite-portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json              ← Vercel SPA config
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            ← Global styles + CSS vars
    ├── assets/
    │   └── Pic.jpg          ← ⚠️ ADD YOUR PHOTO HERE
    └── components/
        ├── Navbar.jsx       ← Active indicator, scroll spy
        ├── Hero.jsx         ← Typing effect, profile pic
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Publications.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 🎨 Color System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0f1e` | Page background |
| `--bg-secondary` | `#0d1529` | Alternate sections |
| `--bg-card` | `#0f1a2e` | Cards |
| `--accent-cyan` | `#22d3ee` | Primary accent |
| `--text-primary` | `#f1f5f9` | Headings |
| `--text-secondary` | `#94a3b8` | Body text |
| `--text-muted` | `#64748b` | Muted/labels |

## ✨ Features
- ⚡ Vite (ultra-fast HMR)
- 🎭 Framer Motion animations
- 🌙 Deep dark navy theme
- 💠 Cyan glowing accents
- 📍 Scroll-spy active navbar
- ⌨️ Typing role animation
- 🖼️ Profile image with glow ring
- 🃏 Expandable project cards
- 📱 Fully responsive
- 🚀 Vercel-ready
