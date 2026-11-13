# FRIDAY Media OS — Product Profile

Status: Phase 1 working document  
Product classification: Independent personal system / active product work  
Publication rule: Separate demonstrated functionality from planned or unverified capability.

## One-sentence overview

Draft:

> FRIDAY Media OS is an independent operating system for controlled media production and evidence-driven daily operations.

The product name, core purpose, and personal-project positioning are present in the current portfolio. The exact product scope and release status require confirmation.

## The problem

Media and operational work becomes fragile when production tasks, date-scoped commitments, content retrieval, contracts, pagination, and status evidence are spread across disconnected tools.

FRIDAY is intended to make the operating state explicit:

- What needs to happen today.
- Which production or operational contract applies.
- What content is available.
- Which state is known, incomplete, or blocked.
- What evidence supports the next decision.

This is a product narrative, not a claim that every capability is currently production-ready.

## Who it is for

Potential audiences:

- Independent media operators.
- Small production teams.
- Technology and operations leaders who need controlled workflows.
- Product builders exploring evidence-driven operational systems.

Target-user definition: NEEDS VERIFICATION.

## Product capabilities described by current portfolio material

| Capability | Current wording | Status |
|---|---|---|
| Production control | Controls production and operational state | PARTIALLY SUPPORTED |
| Date-scoped retrieval | Retrieves content and state for a defined date or operating window | PARTIALLY SUPPORTED |
| Daily contracts | Uses date-scoped daily contracts to define expected operating behavior | PARTIALLY SUPPORTED |
| Pagination | Handles multi-page retrieval or content traversal | PARTIALLY SUPPORTED |
| Proxy isolation | Separates external or upstream access through a controlled boundary | PARTIALLY SUPPORTED |
| Telemetry semantics | Gives operational signals an explicit meaning | PARTIALLY SUPPORTED |
| Evidence-driven decisions | Connects system state to a defensible next action | SUPPORTED as product principle |
| AI workflows | AI, automation, MCP, RAG, or LLM features | NEEDS VERIFICATION |
| Production readiness | Live, reliable, monitored production service | NEEDS VERIFICATION |

## Architecture narrative

Draft:

> FRIDAY is organized around a controlled application boundary. The interface presents the operating state; application logic defines the contract and retrieval behavior; data and integration layers provide the evidence needed to make the next decision.

Potential layers to confirm:

1. Interface and operator workflow.
2. Application and domain logic.
3. Date-scoped contract and state model.
4. Retrieval and pagination.
5. Proxy or integration boundary.
6. Telemetry and evidence.
7. Persistence and audit trail.

Do not publish a detailed architecture diagram until the repository or approved technical documentation confirms these layers.

## Technology stack

The existing README names the following stack:

- React.
- TypeScript.
- Vite.
- Python.
- SQLAlchemy.
- PostgreSQL.

Status: PARTIALLY SUPPORTED. Confirm each technology against the actual FRIDAY repository before publishing it as the product's implemented stack. The portfolio website's current frontend stack is Vite, React, React Three Fiber, Drei, and Three.js; that is separate from the FRIDAY product stack.

## AI and automation workflows

The master brief asks for AI and automation workflows. No implementation evidence is currently present in the portfolio repository.

Required evidence before publication:

- Workflow diagrams.
- Prompt or orchestration examples that can be safely disclosed.
- Model/provider names, if public.
- MCP, RAG, retrieval, evaluation, and guardrail behavior.
- Human approval and failure-handling paths.
- Screenshots or a working demonstration.

Until then, use:

> AI and automation directions are under development and will be documented as implementation evidence becomes available.

Do not describe FRIDAY as an AI product with production-ready automation without evidence.

## Reliability and operational controls

Potential controls suggested by the product narrative:

- Explicit state semantics.
- Date-scoped contracts.
- Controlled retrieval.
- Pagination behavior.
- Proxy isolation.
- Telemetry.
- Evidence trails.
- Failure and incomplete-state handling.

Verification required:

- Automated tests.
- Error and retry behavior.
- Observability.
- Deployment model.
- Backup and recovery.
- Security boundary.
- Performance measurements.

## Current development status

Safe interim description:

> FRIDAY Media OS is an independent system under active development. It is the clearest example of how Tonmoy approaches architecture, operational semantics, integration boundaries, and evidence-driven delivery.

Status: Confirm whether “active development” remains accurate. Do not use “production,” “enterprise-ready,” “battle-tested,” or “launched” without evidence.

## Approved product-page structure

1. Product statement.
2. The operational problem.
3. What FRIDAY controls.
4. How the system is organized.
5. Technology stack.
6. Reliability and evidence model.
7. AI and automation status.
8. Current development status.
9. Screenshots or demo.
10. Repository or contact link.

## Evidence request list

To complete this profile, provide:

- FRIDAY repository or approved code excerpts.
- Current architecture diagram.
- Current feature list and release status.
- Screenshots or a safe demo URL.
- Confirmed stack.
- AI/automation workflow evidence.
- Test and reliability evidence.
- What may be publicly disclosed.
