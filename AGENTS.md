# AGENTS.md

**Project:** Home Daycare Website (Static → Dynamic Evolution)

---

## Overview

The project will evolve in two major phases:

1. **Phase 1: Static Informational Site**
   A simple, static website for a home daycare provider to advertise services, programs, and contact details.
   It should be hosted cheaply (e.g., GitHub Pages) and optimized for future expansion.

2. **Phase 2: Dynamic Web Application**
   Introduce user accounts, a provider dashboard, and parent portals to handle documents, communications, and inventory tracking.
   The dynamic system should grow naturally from the static foundation without a full rebuild.

The LLM should understand both phases as parts of a continuous system architecture that scales from static to dynamic with minimal friction.

---

## Phase 1 — Static Informational Website

**Primary Objective:**
Deliver a fully functional, mobile-friendly, SEO-optimized static site deployable on GitHub Pages.

**Guiding Principles**

* Minimal dependencies; focus on simplicity and clarity.
* Choose a framework that can later support dynamic features (e.g., **Next.js** with static export).
* Clean separation between content (copy, structure) and presentation (styling).

**Core Pages**

* **Home** — Mission statement, welcoming visuals, call-to-action to contact or enroll.
* **Programs** — Age groups, curriculum overview, activities.
* **About** — Provider biography, certifications, safety policies.
* **Enrollment** — Process, waitlist, tuition info, basic inquiry form.
* **Policies** — Hours, holidays, illness rules, late pickup policy, etc.
* **Contact** — Address, map, phone, email, and optional inquiry form.

**Implementation Steps**

1. Initialize the project using a framework that supports both SSG and SSR (Next.js preferred).
2. Implement the public pages as static routes with clean, semantic HTML.
3. Configure build and deploy pipeline for GitHub Pages (or custom domain if available).
4. Add SEO metadata, sitemap, and accessibility basics.
5. Verify site works under `username.github.io` and under a potential custom domain.

**Deliverables**

* Functional static site ready for public deployment.
* Documentation for how to build and deploy.
* Foundation ready to evolve into a dynamic web app.

---

## Phase 2 — Dynamic Web Application

**Primary Objective:**
Transform the static site into a role-based web application supporting parents and the daycare provider.

**Guiding Principles**

* Preserve Phase 1 codebase and progressively enhance it.
* Add authentication, persistence, and role-based access control.
* Separate user-facing portals (parents) from provider administrative views.
* All sensitive data (documents, child info) must be securely stored and transmitted.

**Core Capabilities**

* **User Authentication:** Parents, Provider, optional Assistants.
* **Provider Dashboard:**

  * Manage roster (children/families)
  * Upload or store documents (contracts, immunizations)
  * Track inventory (diapers, wipes, formula, etc.) with quantity thresholds
  * Send notifications to parents (email/SMS)
  * Post announcements or messages
* **Parent Portal:**

  * View documents shared by the provider
  * Receive notifications and updates
  * View their child’s inventory status or reminders

**Implementation Steps**

1. Introduce authentication (Clerk or Auth.js) with role distinction.
2. Add database connectivity (e.g., Postgres via Prisma ORM).
3. Create data models for users, children, documents, inventory, and notifications.
4. Add secure file storage and access (e.g., S3 or Supabase Storage).
5. Implement basic API endpoints or server actions to handle data operations.
6. Add email/SMS notifications via third-party integrations (Resend, Twilio, etc.).
7. Expand navigation:

   * Public site remains intact (marketing pages).
   * Authenticated areas for parents and providers.
8. Deploy to a hosted platform (e.g., Vercel) once dynamic behavior is introduced.

**Deliverables**

* Working dynamic web app with authentication and persistent data.
* Provider dashboard and parent portal accessible by role.
* Secure handling of all private information and file uploads.
* Clear documentation on architecture, environment setup, and future extensions.

---

## Future Expansion Ideas

* Digital payments and invoices.
* Attendance tracking or check-in/out system.
* Photo-sharing feed (with consent).
* Push notifications or mobile app wrapper.
* Multi-provider (multi-tenant) architecture.

---

## High-Level Design Preferences

* **Framework:** Next.js with TypeScript (LLM-friendly, highly documented).
* **Styling:** Tailwind CSS (optional design system later).
* **Database:** Postgres (Neon or Supabase).
* **Auth:** Clerk or Auth.js (developer’s choice).
* **Storage:** Supabase Storage or AWS S3.
* **Notifications:** Resend (email), Twilio (SMS).
* **Hosting:**

  * Phase 1: GitHub Pages (static).
  * Phase 2: Vercel (SSR, APIs).
* **Testing:** Playwright (E2E), Vitest (unit).
* **Version Control:** GitHub with CI/CD workflow.

---

## Meta Instructions for Future Agents

* Use this document as **architectural context**.
* All implementation details (file naming, folder structure, configuration) are **open design choices**.
* Prioritize **clarity, extensibility, and role separation** when generating code.
* Preserve compatibility between static and dynamic phases.
* Always include security and privacy considerations in the reasoning chain.
* Avoid overengineering; focus on iterative, functional growth.

