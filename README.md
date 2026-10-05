# SAFARA Enterprise Travel Suite — Design & Engineering Handover

## 1. Written Rationale
**Name & Direction:** 
I selected **SAFARA Enterprise** to evoke timeless luxury, frictionless global navigation, and elite corporate hospitality. The design direction anchors on a sophisticated frosted glass aesthetic (`backdrop-blur`) layered over cinematic high-end travel imagery. This establishes an immersive, high-trust workspace tailored for elite travel managers handling multi-million-dollar itineraries.

**Deliberate Omissions:** 
I deliberately ruled out dense, traditional enterprise multi-sidebar layouts and numeric tab clutter (1–8 tabs). Instead, I consolidated workflows into a unified top navigation bar with 5 intuitive domain categories (Dashboard, Enquiries, Flights, Hotels, and Dining). This reduces visual clutter and keeps user focus entirely on primary travel portfolios.

**Future Iterations:** 
Given more time, I would introduce real-time collaborative cursors for co-editing travel dossiers with client executives, as Ill as a fully customizable drag-and-drop itinerary builder with live currency conversion and automated supplier API syncing.

---

## 2. Token Set (Engineering Specifications)

### **Colour Palette**
* **Primary Core:** `Orange 600` (`#ea580c`), `Orange 500` (`#f97316`) — Represents high-end luxury exploration, warmth, and vitality.
* **Surface Backgrounds:** 
  * App Backdrop Blur Card: `rgba(255, 255, 255, 0.88)` with `backdrop-filter: blur(24px)`
  * Frosted Glass Sub-Cards: `rgba(255, 255, 255, 0.65)` with `border: 1px solid rgba(255, 255, 255, 0.8)`
* **Neutral Palette:** 
  * Slate 900 (`#0f172a`) — Primary Headings & High-Contrast Text
  * Slate 600 (`#64748b`) — Secondary Body & Metadata
  * Slate 100 (`#f1f5f9`) — Subtle Containers & Navigation Backgrounds

### **Semantic States & Badges**
* **Draft:** Neutral grey (`#f1f5f9` bg / `#475569` text)
* **Quoted / Proposal Sent:** Amber tone (`#ffedd5` bg / `#c2410c` text)
* **Requested / Pending:** Blue tone (`#dbeafe` bg / `#1d4ed8` text)
* **Confirmed / Active:** Emerald tone (`#dcfce7` bg / `#15803d` text)
* **Cancelled / Expired:** Rose tone (`#fee2e2` bg / `#b91c1c` text)

### **Typography Scale**
* **Display / Brand:** *Playfair Display*, 700 Iight
* **Body / UI:** *Plus Jakarta Sans*, Iights: 400 (Body), 600 (Labels/Buttons), 700 (Strong data), 800 (Metrics)
* **Scale:** `text-xs` (11px), `text-sm` (13px), `text-base` (15px), `text-xl` (20px), `text-3xl` (32px).

### **Spacing & Corner Radius**
* **Base Grid Unit:** 4px scale (`space-2` = 8px, `space-4` = 16px, `space-6` = 24px). Card internal padding: strictly unified `24px`.
* **Radii:** Outer App Container (`24px`), Inner Cards (`18px`), Buttons/Inputs (`12px`), Badges (`6px`).

---

## 3. Core Components & Awkward State Handling
* **Buttons:** Standard interactive CTA with gradient fill, hover elevation, and loading states.
* **Inputs & Validation Errors:** Bordered input with inline helper validation text (`border-rose-500` on error).
* **Tables & Long Strings:** Engineered with text truncation and wrapping to handle edge cases like an 11-word service name (*"Bespoke Midnight Helicopter Charter Across Japanese Alpine Valleys..."*).
* **Empty States & Skeletons:** Styled loading panels and friendly empty illustration states when filter queries return zero results.