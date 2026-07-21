# Sentiq Labs Website Full Feature Build

We will transform the current single-page structure into a full multi-page web application using the provided content strategy. The design language (colors, glassmorphism, 3D model) will be retained and expanded across all new pages.

## User Review Required
> [!IMPORTANT]
> **3D Model Integration**: Your current Hero section has the 3D AI Brain model. The new prompt asks for an "Animated visual/ticker showing leaking-revenue keywords cycling". I plan to keep the 3D model alongside the text, and add the keyword ticker directly below the Hero text (or as a band underneath the Hero section) to satisfy both. Let me know if you prefer to remove the 3D model entirely.

> [!NOTE]
> **Component Structure**: I will create a new `src/pages` directory to separate full page layouts from reusable UI components (like the Final CTA band, Forms, and Accordions). 

## Open Questions
1. **Forms & Routing**: Should the "Book Free Audit" CTA buttons link to the `/contact` page, or trigger a modal popup? (I will route them to `/contact` as specified, but let me know if you'd prefer a modal).
2. **Audio Samples**: For the "Voice Sample Library" on the AI Voice Agents page, I will create placeholder audio players. Do you have `.mp3` files ready, or should I leave them as UI-only for now?

---

## Proposed Changes

### 1. Routing & Architecture Updates (src/App.tsx & src/pages/)
We will migrate from a unified "Home" component in `App.tsx` to dedicated page components.

#### [NEW] `src/pages/Home.tsx`
#### [NEW] `src/pages/Services.tsx`
#### [NEW] `src/pages/AIVoiceAgents.tsx`
#### [NEW] `src/pages/Solutions.tsx`
#### [NEW] `src/pages/About.tsx`
#### [NEW] `src/pages/Contact.tsx`
#### [MODIFY] `src/App.tsx` (Add routing for all pages)

---

### 2. Global Components (Navbar, Footer, CTA Band)
#### [MODIFY] `src/components/Navbar.tsx`
- Add exact links: Home | Services | AI Voice Agents | Solutions | About | Contact
- Update sticky CTA button to route to `/contact`.
#### [MODIFY] `src/components/Footer.tsx`
- Add 3 columns: Brand (Logo+Tagline), Navigation (Links), Get Started (CTA).
#### [NEW] `src/components/FinalCTA.tsx`
- Reusable component for the bottom of every page: "Book Free Audit" + "Explore Solutions" + Reassurance microcopy.

---

### 3. Home Page Components
#### [MODIFY] `src/components/HeroSection.tsx`
- Update H1, subhead, and CTAs.
- Integrate the leaking-revenue keyword ticker.
- Add scrolling industry logo strip at the bottom of the section.
#### [NEW] `src/components/ProblemSection.tsx`
- 3 pain-point cards.
#### [MODIFY] `src/components/ProcessSection.tsx`
- Update to the 4-step process content provided.
#### [NEW] `src/components/StatsBar.tsx`
- Animated counter numbers for metrics.
#### [NEW] `src/components/FAQ.tsx`
- Interactive accordion component for FAQ.
#### [NEW] `src/components/WhyUs.tsx`
- 4 value-prop blocks.

---

### 4. AI Voice Agents Microsite Components
#### [NEW] `src/components/AIVoice/VoiceHero.tsx`
- Hero with language toggle and embedded audio button.
#### [NEW] `src/components/AIVoice/ComparisonTable.tsx`
- AI vs Traditional calling comparison grid.
#### [NEW] `src/components/AIVoice/ROICalculator.tsx`
- **Functional component**: Takes inputs (leads, deal value, conversion rate) and outputs estimated lost revenue dynamically.
#### [NEW] `src/components/AIVoice/DeployForm.tsx`
- Multi-field lead capture form.

---

### 5. Solutions Catalogue Components
#### [NEW] `src/components/Solutions/SolutionsFilter.tsx`
- Tabbed interface to filter solutions (All, AI & Automation, AI Voice, Web, Audit & Strategy).
#### [NEW] `src/components/Solutions/SolutionsGrid.tsx`
- Comprehensive grid of all standalone offerings.

## Verification Plan

### Automated Verification
- Ensure `npm run build` completes successfully without TypeScript or routing errors.

### Manual Verification
- Test all navigation links to ensure they route to standalone pages (not anchor links).
- Verify the ROI calculator calculates revenue lost based on user input.
- Check responsive behavior of the Comparison Table and Filter Tabs on mobile views.
- Ensure the Global CTA band appears consistently at the bottom of all pages before the footer.
