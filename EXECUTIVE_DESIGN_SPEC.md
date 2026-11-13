# Executive Design Specification

Status: Phase 2 approval draft  
Implementation status: Not implemented  
Design preview: Stitch project `8531345965558276729`

## Design objective

Create a premium executive portfolio communicating:

> Understanding business. Navigating technology. Building products.

The visual system must serve technical and non-technical stakeholders. Visual polish supports evidence; it never substitutes for evidence.

## Visual direction

- Premium executive and institutional.
- Deep midnight navy with warm-white text.
- Electric blue/cyan for active guidance and technical signals.
- Restrained violet for architecture and governance.
- Controlled amber/gold for proof, value, and the FRIDAY trophy.
- Generous whitespace, disciplined alignment, thin borders, layered surfaces.
- Purposeful motion only; no noisy cyberpunk effects or decorative dashboards.
- Space Grotesk for headlines and Inter for body text.

## Design tokens

| Role | Token |
|---|---|
| Canvas | `#07111F` / `#0A1422` |
| Surfaces | `#050E1C`, `#121C2A`, `#16202F`, `#212A39` |
| Text high | `#F8FAFC` / `#D9E3F7` |
| Text muted | `#94A3B8` |
| Electric blue | `#60A5FA` |
| Cyan | `#22D3EE` |
| Violet | `#8B5CF6` |
| Proof gold | `#F5C96A` |
| Structural border | `rgba(148,163,184,.18)` |

Typography: hero 56–72px desktop / 36px mobile; section headlines 32–48px; body 15–18px with generous line-height; metadata 11–13px.

Layout: 12-column desktop max 1280px, 8-column tablet, 4-column mobile. First viewport must be understandable without WebGL.

## Page architecture

### Home

Sticky navigation → executive hero → 3D trophy/signal visual → evidence scope strip → capability matrix → FRIDAY Media OS → anonymized enterprise work → contact → footer.

### About

Who I am, business/technology intersection, career context, working principles, domain exposure, and current direction.

### Experience

Chronological employment timeline after roles and dates are verified. Include responsibilities and contribution cards. Do not publish unsupported outcomes or leadership scope.

### Enterprise Work

Every case study includes business context, challenge, verified role, solution approach, technology, verified outcome/decision value, and confidentiality note.

### FRIDAY Media OS

Product overview, problem, system response, technology stack, AI/automation status, reliability controls, current development status, and approved screenshots/repository links.

### Insights

Publish only actual articles, notes, talks, or frameworks. Otherwise show an honest “in development” state.

### Contact

Email and approved professional links only. Do not add PGP, LinkedIn, CV, or relocation claims until exact details are supplied.

## 3D trophy direction

Architectural faceted silhouette; dark obsidian/graphite body; brushed gold proof accents; cyan edge light; restrained violet fill; glass vitrine or signal chamber; slow rotation and subtle float; reduced-motion static poster; lazy-loaded after first paint.

The trophy is a visual metaphor for demonstrated capability. It must not imply certification, awards, or customer results.

## Component rules

Every capability or case-study card exposes:

1. Problem.
2. Solution or approach.
3. Tools/technology.
4. Outcome or decision value.

When the outcome is not verified, use “decision value” or “intended value” and label it clearly.

Status chips are limited to: Supported, Anonymized, Active development, Needs verification, Planned.

## Responsive behavior

- Desktop: 6+6 or 7+5 hero split, 2×2 capability cards, wide editorial case rows.
- Tablet: stacked hero when needed, two-column capability cards, compact case blocks.
- Mobile: accessible collapsed navigation, trophy after primary action, single-column cards, no horizontal scroll, complete WebGL fallback.

## Preview review notes

The Stitch preview demonstrates the intended hierarchy, capability matrix, FRIDAY flagship treatment, premium trophy direction, and anonymized case-study structure.

It also generated unsupported placeholder claims that are explicitly rejected:

- FIPS 140-2 Level 3.
- Specific HSM ceremony claims.
- Zero unplanned downtime.
- Sub-second mitigation or latency figures.
- Reduced RTO claims.
- Closed-alpha deployment.
- Canada/Germany relocation pathways.
- PGP/security links not supplied by the user.

These items must be removed or replaced before implementation.

## Approval gate

Implementation begins only after approval of the visual direction, page architecture, trophy treatment, responsive layout, removal of unsupported copy, and final professional links/contact details.
