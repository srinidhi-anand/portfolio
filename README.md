# Srinidhi A. — Portfolio

> A dual-path portfolio built with Next.js 14 — presenting two distinct professional profiles from a single codebase.

🌐 **Live:** [portfolio-six-azure-75.vercel.app](https://portfolio-six-azure-75.vercel.app)

---

## Overview

This portfolio is architected around a version-selector home page that routes visitors into one of two tailored profiles:

- **`/freelancer`** — Client-facing profile for end-to-end web, e-commerce and mobile projects
- **`/profile`** — Senior R&D profile targeting product-based companies, computer vision research, and PhD-track opportunities

Both versions share a single Next.js codebase with independent routing, content, and styling — no duplication, no separate deployments.

---

## Profiles

### 💼 Freelancer (`/freelancer`)

Designed for potential clients evaluating project work.

- Strong hero with availability status and trust signals
- 4 focused service offerings with pricing signals
- 8 project case studies with impact metrics
- Real Upwork testimonials
- Contact form with email integration

### 🔬 Senior R&D (`/profile`)

Designed for product company recruiters and R&D hiring managers.

- Research-driven positioning — computer vision, deep learning, systems architecture
- Full work experience timeline (Lumel Technologies, Boston Harbor Consulting)
- Emotion Detection CNN project as R&D flagship
- Microsoft Fabric & PowerBI enterprise projects
- PhD sponsorship interest (IISc MoU companies)
- Salary target: 28+ LPA · Remote-first

---

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 14.2 (App Router)                      |
| UI Library | React 18                                       |
| Styling    | Tailwind CSS · MUI · Bootstrap 5 · Emotion     |
| Icons      | React Icons · Material Icons · Bootstrap Icons |
| Deployment | Vercel                                         |
| Media      | Cloudinary (project images)                    |
| Email      | EmailJS (contact form)                         |

---

## Project Structure

```
src/
└── app/
    ├── page.js                  ← Version selector home
    │
    ├── freelancer/              ← Freelancer profile
    │   ├── page.js              ← Hero + testimonials
    │   ├── about/page.js
    │   ├── skills/page.js
    │   ├── services/page.js
    │   ├── projects/
    │   │   ├── page.js
    │   │   └── details/page.js
    │   └── contact/page.js
    │
    └── profile/                 ← Senior R&D profile
        ├── page.js              ← Research-focused hero
        ├── about/page.js
        ├── services/page.js     ← Work experience timeline
        ├── skills/page.js
        ├── projects/page.js     ← Emotion detection flagship
        └── contact/page.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## Available Scripts

| Script           | Description                                |
| ---------------- | ------------------------------------------ |
| `npm run dev`    | Start local development server             |
| `npm run build`  | Build for production                       |
| `npm run export` | Build and export static version            |
| `npm run deploy` | Deploy to Vercel (`portfolio-feat` branch) |

---

## Key Projects Showcased

| Project                       | Domain                          | Tech                               |
| ----------------------------- | ------------------------------- | ---------------------------------- |
| Emotion Detection System      | Computer Vision · Deep Learning | Python · OpenCV · CNN · TensorFlow |
| Intelligent Testing Framework | Developer Tooling · Gen AI      | Node.js · TypeScript · LLM APIs    |
| Fabric 1P (Microsoft)         | Enterprise SaaS · Cloud         | Node.js · TypeScript · OneLake     |
| PowerBI Inforiver             | Data Visualization              | Node.js · React · TypeScript       |
| Digital Cash                  | Fintech · Mobile                | Ionic · Angular · MongoDB · AWS    |
| SAP CPQ — OCTanner            | Enterprise CPQ                  | Knockout.js · Python · SQL         |

---

## Deployment

Deployed on **Vercel** with automatic deployments on push to `master`.

- Production: `portfolio-six-azure-75.vercel.app`
- Preview: Auto-generated per branch push

```bash
# Merge feature branch and deploy
git checkout master
git merge portfolio-feat
git push origin master
```

---

## Author

**Srinidhi A.**
Senior Full-Stack Engineer · Computer Vision · 7.5 years

[![LinkedIn](https://img.shields.io/badge/LinkedIn-srinidhi--a-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/srianand27)
[![GitHub](https://img.shields.io/badge/GitHub-srinidhi--anand-black?style=flat&logo=github)](https://github.com/srinidhi-anand)
[![Resume](https://img.shields.io/badge/Resume-View%20PDF-green?style=flat)](https://drive.google.com/file/d/1FUhDazPGG-J-rZnK5y0kz3iDMkEIlIlz/view)
