# Khandakar Muttakin Uzzaman Tonmoy — Portfolio

A modern, responsive portfolio for Khandakar Muttakin Uzzaman Tonmoy: a technical builder, Technology Risk & Delivery Advisor, and independent systems thinker based in Dhaka, Bangladesh.

## Flagship personal project

### FRIDAY Media OS

FRIDAY is the personal system that best represents Tonmoy's technical range. It brings together production control, date-scoped daily contracts, content retrieval, pagination, proxy isolation, telemetry semantics, and evidence-driven operational decision-making.

The site treats personal systems work as primary proof and professional engagements as context. It also makes the evidence model explicit: ownership, constraints, decisions, and demonstrated capability.

## Positioning

The site presents Tonmoy's work across:

- Cybersecurity risk and governance
- HSM and cryptographic security
- Anti-DDoS and network security evaluation
- Enterprise infrastructure and disaster recovery
- Procurement, proposal, and contract coordination
- Stakeholder and vendor alignment
- Independent systems architecture and operational control

## Included

- Dark/light theme with persistent preference
- React + Vite application with a lazy-loaded React Three Fiber/WebGL trophy scene
- Responsive mobile navigation
- Keyboard-visible focus states and semantic landmarks
- Case-study domain filters
- Personal systems section with FRIDAY Media OS as the flagship project
- Evidence-led sections that distinguish what was built, solved, and delivered
- Mailto contact form with no server-side storage
- SEO metadata, Open Graph tags, JSON-LD Person schema, favicon, sitemap, and robots.txt
- GitHub Pages deployment built from `dist/` by GitHub Actions

## Local preview

Install dependencies and start the Vite development server:

```bash
npm ci
npm run dev
```

For a production build and local preview:

```bash
npm run build
npm run preview
```

The build emits four HTML entry points and optimized assets into `dist/`. The initial page paints without waiting for WebGL; the trophy scene is loaded during idle time and has a CSS fallback for devices without WebGL.

## Content notes

The site uses the profile details available in the original portfolio. Education and credential details should be updated only when exact institutional and certification information is confirmed.

## License

Personal portfolio content. All rights reserved.


## Evidence model

The portfolio now frames technical work as **problem → solution → stack → stakeholder value**. This keeps the site legible to recruiters, clients, and non-technical decision-makers without hiding the engineering detail.

## Technology and solution domains

### Personal systems

- FRIDAY Media OS: production control, date-scoped contracts, content retrieval, pagination, proxy isolation, telemetry semantics, and evidence-driven operational states.
- FRIDAY stack: React, TypeScript, Vite, Python, SQLAlchemy, and PostgreSQL.

### Professional solution domains

- HSM and cryptographic security
- Anti-DDoS and network-security evaluation
- Data-center infrastructure, availability, and disaster recovery
- Procurement, proposal, vendor, SLA/NDA, and executive-decision support
- Governance, regulatory documentation, and stakeholder alignment


## Solution domains

The portfolio communicates the solution families Tonmoy can work with across evaluation, architecture, integration, procurement, and delivery:

- Security operations: EDR/XDR, DLP, SIEM, SOAR
- Network security: Firewall, NDR, ZTNA, WAF, Anti-DDoS
- Data and content: Database licenses, DAM, API
- Cloud security: CSPM, CASB
- AI and integration: MCP, RAG, LLM systems


## 3D presentation

The trophy hero is rendered by React Three Fiber on top of Three.js using physically based materials, dynamic lighting, particles, and a responsive camera. React remains responsible for semantic content and accessibility while the rendering framework owns the 3D scene. The scene is code-split and deferred so the first contentful view is not blocked by WebGL startup.

## Deployment

GitHub Pages runs the workflow in `.github/workflows/pages.yml`, which installs from `package-lock.json`, runs `npm run build`, and publishes `dist/`. For the VPS, build the same way and configure Caddy to serve the generated `dist/` directory rather than the repository source files.

