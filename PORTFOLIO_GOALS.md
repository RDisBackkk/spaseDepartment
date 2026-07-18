# Portfolio Goals & Design Reference

This project is configured as a high-performance, minimal Swiss-editorial portfolio showcase designed to demonstrate full-stack engineering and design capability to freelancing clients.

## Key Visual & Technical Highlights for Clients:
1. **Modern Layout Rhythm (Swiss-Editorial):** Leverages clean grid columns, wide breathing room margins, and fluid fluid typography (`clamp(...)`) matching premier modern web design standards.
2. **Interactive Elements:** Features a custom cursor orb trail, a dynamic dot grid backdrop overlay, and a custom interactive CTA card that triggers arrow movement on hover.
3. **Optimized Performance:** Fully compiled Next.js static generation (SSG) reaching top-tier load speeds.
4. **Clean Code & Configurations:** Architected so that all copy and media paths are isolated in `config/site.ts`, showing clients how clean, maintainable, and easily editable the codebase is.

---

## How to Customize:
- All texts, titles, links, and image paths are loaded from `config/site.ts`.
- To swap the showcase image, change the `imagePath` in `config/site.ts` (e.g., from `/images/coffee.jpg` to `/images/runner.png`).
