# Nizomjon Husanov — Personal Developer Portfolio (System 01)

> **"BUILDING AT THE EDGE OF LOGIC & DESIGN."**  
> An experimental, high-performance personal portfolio engineered for **Nizomjon Husanov** (`Husanov Nizomjon In'omjon o'g'li`).

---

## 01 — Visual Concept: "CONTROLLED CHAOS / SYSTEM 01"

This portfolio rejects cookie-cutter developer landing pages, purple SaaS gradients, and generic cards. It is designed around the principles of:
- **Swiss Editorial Design**: Mathematical grid alignments, visible hairline borders, and strict typographical contrast.
- **Experimental Digital Typography**: Dual typeface hierarchy combining *Space Grotesk* for editorial display and *JetBrains Mono* for engineering readouts.
- **Architectural Precision**: Real geographic telemetry (`40.4907° N, 68.7842° E` — Gulistan, Syrdarya, Uzbekistan), time zone synchronization (Asia/Tashkent), and honest academic disclosures.
- **Restrained Color Palette**:
  - Obsidian Background: `#0B0D10`
  - Elevated Surfaces: `#12161B` & `#191F26`
  - Text: `#F0F2F4` (Primary), `#929BA6` (Secondary)
  - Surgical Accent: Electric Cyan `#7CE7E8` (strictly reserved for active states, reticles, and interactions).

---

## 02 — Signature Interaction: "SYSTEM 01 : COORDINATE FIELD"

Located in the Hero section, the **System 01 Canvas** is an interactive spatial coordinate matrix:
- Emits real-time mouse/touch coordinate deltas (`Δ X/Y`).
- Features velocity-damped reticle tracking and compass calibration rings with degree notches.
- Detects proximity to dynamically illuminate nearby coordinate vertices.
- **Zero GPU Overhead**: Built with pure 2D Canvas context, throttling off-screen rendering via `IntersectionObserver`.
- **Accessibility & Reduced Motion**: Automatically falls back to a static blueprint layout if `prefers-reduced-motion` is active.

---

## 03 — Data-Driven Architecture & Honest Verification

All content is structured within centralized TypeScript records (`src/data/portfolioData.ts` and `src/i18n/translations.ts`):
- **Verified Repositories**: Directly sourced from Nizomjon's verified GitHub profile (`https://github.com/nizikdur-beep`):
  1. `YoshlarHub`: PHP & MySQL backend architecture with Telegram bot automation for youth engagement.
  2. `StudyHub Agency`: Modular educational web portal built with React, Vite, and Tailwind.
  3. `NizomjonTube`: Interface study exploring component hierarchies, video grid flow, and responsive state.
  4. `Clock Master`: Mathematical temporal visualization with real-time SVG trigonometry.
  5. `Mening Mahalla`: Citizen-oriented regional accessibility portal.
- **Technical Stack Distinction**: Confirmed production capabilities (HTML5, CSS3, JavaScript, React.js) are strictly demarcated from technologies currently being learned (PHP, Laravel, MySQL — tagged *Currently Exploring*).
- **Academic Distinctions**: SAT 1280, Mathematics Grade B+, English CEFR B2, and Gulistan district stage Olympiad results (2nd in Al-Khwarizmi Math, 3rd in Foreign Languages).
- **Experience**: Assistant Instructor at ITLive Learning Center (October 2026 – Present).

---

## 04 — Bilingual System (EN / UZ)

The site includes an instant, zero-reload language switcher supporting:
- **English (EN)**: Tailored for an international technical and design audience.
- **Uzbek (UZ)**: Culturally natural, professional, and grammatically precise Uzbek localization.
- **Persistence**: Selected preference is automatically preserved in session storage.

---

## 05 — Technology Stack

- **Runtime / Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8 (ESM, sub-400ms production build)
- **Styling**: Modern CSS Custom Properties & CSS Grid (zero runtime CSS-in-JS overhead)
- **Icons**: Custom architectural SVG vectors + Lucide React
- **Linter**: Oxlint (0 warnings, 0 errors)

---

## 06 — Development & Production Commands

```bash
# Navigate to project directory
cd "C:\Users\Husanov Nizomjon\.gemini\antigravity\scratch\nizomjon-portfolio"

# Start local development server
npm run dev

# Run strict linter
npm run lint

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```
