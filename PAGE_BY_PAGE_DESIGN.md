# Page-by-Page Executive Website Design

Status: Phase 2 detailed approval draft  
Implementation status: Not implemented  
Parent specification: EXECUTIVE_DESIGN_SPEC.md

## 1. Global application shell

### Header

Desktop:

- Left: Tonmoy wordmark and small descriptor: “Business • Technology • Products”.
- Center/right: Home, About, Experience, Enterprise Work, FRIDAY Media OS, Insights, Contact.
- Utility: Light/dark mode control only if both themes are fully designed.
- Primary action: “Start a conversation”.

Mobile:

- Wordmark left.
- Menu button right with visible label and accessible expanded/collapsed state.
- Menu opens as a full-width sheet with the same page order.
- Sticky header remains compact and never covers focused content.

### Footer

- Tonmoy wordmark.
- One-line professional positioning.
- Approved email, LinkedIn, GitHub, CV, and location only when supplied.
- Small privacy/governance note.
- No invented publications, credentials, client logos, or security claims.

### Global interaction rules

- Keyboard-visible focus states.
- Reduced-motion mode disables trophy rotation, parallax, and non-essential transitions.
- Every interactive card has a real link or button.
- No hover-only information.
- No layout shift while the 3D scene loads.
- All pages have a static fallback if WebGL is unavailable.

---

## 2. Home — executive positioning

### Purpose

Answer within the first viewport:

1. Who is Tonmoy?
2. What kind of problems does he work on?
3. What proof can the visitor explore?
4. How can a stakeholder start a conversation?

### Hero layout

Desktop: 7-column editorial copy + 5-column trophy visual.

Eyebrow:

> BUSINESS LEADERSHIP  /  ENTERPRISE TECHNOLOGY  /  AI PRODUCT DEVELOPMENT

Headline:

> Understanding business. Navigating technology. Building products.

Supporting copy:

> I translate complex cybersecurity, enterprise technology, and delivery decisions into clear options, defensible systems, and actions stakeholders can trust.

Actions:

- Explore the work.
- Start a conversation.

Secondary context line:

> Technology Risk & Delivery Advisor • Independent systems builder

### Trophy visual

- Dark architectural glass chamber.
- Faceted obsidian/graphite trophy.
- Restrained gold proof accents.
- Cyan edge light and violet ambient fill.
- Labels: Business context, Enterprise technology, Independent products.
- Static poster appears immediately.
- React Three Fiber scene loads after first paint.
- Trophy is metaphorical; it must not imply an award or certification.

### Proof strip

Use scope statements rather than fabricated achievements:

- FRIDAY — Independent system.
- Anonymized — Enterprise engagements.
- Solution domains — Security, infrastructure, data, cloud, AI.
- Documented — Evidence-led delivery.

### Capability section

Heading:

> What I can solve

Four cards:

1. Cyber defense — EDR/XDR, DLP, SIEM, SOAR.
2. Network security — Firewall, NDR, ZTNA, WAF, Anti-DDoS.
3. Data and content — Database licenses, DAM, API.
4. Cloud and AI integration — CSPM, CASB, MCP, RAG, LLMs.

Each card contains:

- Stakeholder problem.
- Solution approach.
- Tools and technology range.
- Decision value.
- Link to the relevant page.

### FRIDAY teaser

Show:

- Product name.
- One-sentence overview.
- Problem → response → stack → status.
- Status chip: Active development only if confirmed.
- CTA: View FRIDAY Media OS.

### Enterprise teaser

Three anonymized cards:

- Cryptographic assurance.
- Anti-DDoS evaluation.
- Infrastructure and disaster-recovery support.

Only show context, contribution, technology area, and decision value. Do not show unsupported metrics.

### Closing CTA

> Let’s make the next technology decision clearer.

Actions:

- Start a conversation.
- Explore enterprise work.

### Mobile behavior

- Copy first, trophy second.
- Capability cards become one column.
- Proof strip becomes a two-column grid or horizontal scroll with keyboard support.
- FRIDAY appears before enterprise work.
- CTA remains visible without excessive vertical padding.

---

## 3. About — who Tonmoy is

### Purpose

Introduce the person behind the systems without turning the page into an unverified biography.

### Hero

Eyebrow:

> PROFESSIONAL PROFILE

Headline:

> A builder of systems, decisions, and operating clarity.

Supporting copy:

> My work sits between technical capability, operational reality, and business judgment. I am interested in what happens after the architecture diagram: the controls, evidence, decisions, and people that make a system trustworthy.

### Section: Who I am

Two-column layout:

Left:

- Executive narrative.
- Business and technology intersection.
- Why independent product work matters.

Right:

- Compact principle cards:
  - Translate complexity.
  - Document the decision.
  - Surface risk early.
  - Design for operation.
  - Keep evidence visible.

### Section: Domain exposure

Grouped cards:

- Cybersecurity and governance.
- Network and infrastructure resilience.
- Financial-services technology.
- Procurement and vendor evaluation.
- API, cloud, and AI integration.
- Independent systems development.

Each group distinguishes “domain exposure” from “certification” or “implementation ownership.”

### Section: Career context

Use a restrained timeline shell.

- Employer names appear only after role and date verification.
- Missing information is not shown publicly as a blank claim.
- The narrative focuses on capability carried across environments.
- No disparagement of employers or competitors.

### Section: Working model

Three large editorial statements:

1. Context before tooling.
2. Evidence before confidence.
3. Delivery before decoration.

### CTA

> See the work behind the profile.

Link to Experience and FRIDAY Media OS.

### Mobile behavior

- Principle cards become a vertical sequence.
- Timeline becomes a single-column list.
- Domain groups use accordions only if keyboard-accessible and not required to understand the page.

---

## 4. Experience — career progression and responsibility

### Purpose

Show professional progression, responsibilities, and operating scope without inventing dates or achievements.

### Hero

Headline:

> Experience is the context. Capability is the through-line.

Supporting copy:

> The companies and engagements provide context. The stronger signal is the judgment, documentation, coordination, and systems thinking carried across them.

### Timeline

Each verified role card contains:

- Employer.
- Exact job title.
- Date range.
- Location or working model.
- Scope.
- Responsibilities.
- Evidence-backed contribution.
- Related technology domains.

The current employer names—Spectrum Engineering Consortium (Pvt.) Ltd. and Infosonik Systems Limited—remain in the evidence register until exact roles and dates are confirmed.

### Responsibility matrix

Columns:

- Business management.
- Technical advisory.
- Cybersecurity and infrastructure.
- Procurement and vendors.
- Stakeholder communication.
- Documentation and governance.

Use qualitative descriptions until quantified scope is evidenced.

### Leadership section

Do not claim people management by default.

Possible states:

- Technical coordination.
- Stakeholder alignment.
- Vendor communication.
- Decision support.
- Team leadership — only when verified.

### Evidence callout

A visually distinct panel explains that public case studies are anonymized and that confidential details are intentionally omitted.

### CTA

- Download CV — only when an approved CV exists.
- Contact Tonmoy.
- Explore enterprise work.

### Mobile behavior

- Timeline line becomes a left border.
- Role details stack in the order: context → responsibility → evidence → domains.
- Keep dates prominent once verified.

---

## 5. Enterprise Work — anonymized case studies

### Purpose

Make professional work credible to executives without exposing customers or inventing outcomes.

### Hero

Headline:

> Enterprise work, translated into decisions.

Supporting copy:

> Anonymized engagements showing how technical requirements, risk, vendors, documentation, and delivery decisions connect.

### Filter bar

Filters:

- All.
- Cybersecurity.
- Network security.
- Infrastructure.
- Banking and financial services.
- Procurement and delivery.

Filters must work with keyboard navigation and URL state where practical.

### Case-study card

Each card shows:

- Engagement label.
- Sector context.
- Business challenge.
- Verified role.
- Technology area.
- Decision value.
- Confidentiality marker.

### Detail template

When a case is opened:

1. Context.
2. Customer challenge.
3. Personal role.
4. Constraints.
5. Approach.
6. Technology and solution range.
7. Verified outcome or decision value.
8. What remains confidential.

### Initial case set

- Cryptographic assurance for a government-owned bank.
- Anti-DDoS evaluation for a commercial bank.
- Infrastructure and disaster-recovery support.
- Procurement and proposal coordination.

Specific vendors, product versions, certifications, metrics, and client identities remain excluded until approved evidence exists.

### CTA

> Need a technical decision made clearer?

Link to Contact.

### Mobile behavior

- Cards become single-column.
- Detail sections use clear headings, not hidden tabs.
- Technology tags wrap without horizontal overflow.

---

## 6. FRIDAY Media OS — independent product showcase

### Purpose

Prove technical capability through a personal product with clear non-technical context.

### Hero

Eyebrow:

> INDEPENDENT PRODUCT

Headline:

> FRIDAY Media OS makes operational state visible.

Overview:

> An independent operating system for controlled media production and evidence-driven daily operations.

Status:

- Active development — only if confirmed.
- Otherwise: Development status to be confirmed.

### Problem section

Explain the problem in stakeholder language:

- Production work becomes fragile when tasks, dates, contracts, retrieval, assets, and evidence are scattered.
- Operators need to know what is expected, what is available, and what decision follows.

### System response

Four-step architecture:

1. Define the operating contract.
2. Retrieve the relevant state.
3. Isolate boundaries and dependencies.
4. Expose evidence for the next decision.

### Technology section

Separate confirmed stack from conceptual architecture.

Potential documented stack:

- React.
- TypeScript.
- Vite.
- Python.
- SQLAlchemy.
- PostgreSQL.

Each item must be confirmed against the product repository before publication.

### Architecture visual

A clean flow diagram:

Operator → Contract/state model → Retrieval and pagination → Proxy/integration boundary → Telemetry/evidence → Decision.

No pseudo-diagram should be presented as a production architecture until verified.

### AI and automation

Dedicated status block:

- Implemented.
- In development.
- Planned.
- Not disclosed.

MCP, RAG, LLM, agent, and automation claims require repository, demo, or workflow evidence.

### Reliability section

Possible controls:

- Explicit state semantics.
- Date-scoped contracts.
- Retrieval boundaries.
- Pagination.
- Proxy isolation.
- Telemetry.
- Evidence trails.
- Failure-state handling.

Only implemented controls should be labeled as implemented.

### Product CTA

- View approved repository.
- Request a product walkthrough.
- Contact Tonmoy.

### Mobile behavior

- Product story before stack list.
- Architecture flow becomes vertical.
- Screenshots remain readable and labeled.
- Status is visible near the product title.

---

## 7. Insights — professional thinking

### Purpose

Create a credible editorial surface without manufacturing publications.

### Hero

Headline:

> Notes on business, technology, risk, and building systems.

Supporting copy:

> Short, evidence-led perspectives on the decisions behind enterprise technology and independent product work.

### Content states

If approved content exists:

- Featured insight.
- Topic filters.
- Reading time.
- Date.
- Summary.
- Article page.

If no approved content exists:

> Insights are being prepared. For now, explore the work or start a conversation.

Do not create fake titles, dates, author bios, or publication logos.

### Topic taxonomy

- Technology risk.
- Cybersecurity decisions.
- Infrastructure resilience.
- Procurement and vendor evaluation.
- AI product development.
- Evidence-driven operations.

### CTA

- Explore enterprise work.
- View FRIDAY Media OS.
- Contact Tonmoy.

### Mobile behavior

- Featured insight first.
- Topic filters become a scrollable, keyboard-accessible row.
- Cards use summary-first layout.

---

## 8. Contact — professional conversation

### Purpose

Make the next action obvious and trustworthy.

### Hero

Headline:

> Let’s talk about fit, risk, and opportunity.

Supporting copy:

> Start a conversation about enterprise technology decisions, advisory work, product development, or a role where technical judgment matters.

### Contact options

Use only supplied and approved details:

- Email.
- LinkedIn.
- GitHub.
- CV download.
- Optional location/availability.

### Contact form

The current website uses a mailto-style contact flow. If retained:

- Explain that the visitor’s mail client will open.
- Do not imply server-side storage.
- Include accessible labels and error-free fallback.

If a backend form is added later:

- Add spam protection.
- Add privacy notice.
- Do not store messages without an explicit retention policy.

### Conversation categories

- Enterprise technology risk.
- Cybersecurity and infrastructure.
- Vendor/procurement evaluation.
- Independent product work.
- Advisory or leadership opportunity.

### Closing note

Do not publish relocation, availability, security-key, or response-time claims until verified.

### Mobile behavior

- Contact method cards become a single column.
- Primary email action stays above the fold.
- Form controls use 44px minimum touch targets.

---

## 9. Approval checklist

Before frontend implementation, approve:

- The page order and navigation labels.
- The Home hero wording.
- The trophy direction.
- The page-specific sections.
- The case-study disclosure model.
- The FRIDAY status language.
- The Insights empty-state approach.
- The final email, LinkedIn, GitHub, CV, and location details.
