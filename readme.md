# radwandoufan.com 🌐

Personal portfolio and interactive project showcase for **Radwan Doufan**, featuring software engineering projects, dynamic UI components, and technical system demonstrations.

🔗 **Live Site:** [radwandoufan.com](https://radwandoufan.com)

---

## 🚀 Features & Architecture

- **Interactive UI & Terminal View:** Modular JavaScript components supporting multiple viewing modes, including an interactive terminal and project grid rendering.
- **Data-Driven Showcase:** Decoupled project data (`projectsData.js`) for streamlined portfolio updates and dynamic DOM rendering.
- **Modular Stylesheets:** Clean separation of concerns with global base styles (`base.css`) and role-tailored views (`recruiter.css`).
- **Search Engine Optimization (SEO):**
  - Schema.org `Person` JSON-LD structured data for Google Knowledge Graph entity mapping.
  - Fully configured `robots.txt` and `sitemap.xml` for Google Search Console indexing.

---

## 📂 Project Structure

```text
.
├── index.html            # Main entry point and structured metadata
├── robots.txt            # Search engine crawler directives
├── sitemap.xml           # XML sitemap for Search Console indexing
├── css/
│   ├── base.css          # Core layouts, variables, and global styles
│   └── recruiter.css     # Tailored recruiter/presentation styling
└── js/
    ├── main.js           # Application initialization and event wiring
    ├── projectsData.js   # Structured project registry and metadata
    └── ui/
        ├── renderGrid.js # Dynamic DOM project card and grid renderer
        └── terminal.js   # Interactive terminal emulator component