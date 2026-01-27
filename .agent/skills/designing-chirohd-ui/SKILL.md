---
name: designing-chirohd-ui
description: Provides design system rules, color palettes, and component guidelines for ChiroHD. Use when creating or reinforcing UI elements to match the ChiroHD brand.
---

# Designing ChiroHD UI

## When to use this skill
- When creating new UI components or pages for ChiroHD.
- When styling existing HTML/CSS to match the brand.
- When the user asks for "ChiroHD style" or "brand guidelines".

## Instructions

### Brand / Product
- **Brand Name**: "ChiroHD"
- **Vibe Keywords**: "modern", "clean", "cloud-native", "friendly", "growth-focused", "trustworthy", "fast"
- **Tone of Voice**: "Confident + warm. Short, punchy headings. Clear benefit-first copy."

### Logo
- **Source**: Use existing project logo file as-is, just size to fit page correctly.
- **Usage Rules**:
    - `keep_original_colors`: true
    - `clearspace`: "at least 1x logo height around mark"
    - `placement`: "top-left in header; optional in footer bottom right"

### Typography (Match demo landing page direction)
- **Font Direction**: "modern geometric sans (clean SaaS marketing style)"
- **Headings**:
    - Weight: 700
    - Letter Spacing: "-0.02em"
    - Line Height: 1.1
- **Body**:
    - Weight: 400-500
    - Line Height: 1.5
- **UI Text / Buttons**:
    - Weight: 600
    - Text Transform: "none"
    - Letter Spacing: "0"

### Color System
- **Background**:
    - `base`: "#FFFFFF"
    - `alt_section`: "#F8FAFC" (subtle cool gray for section separation)
- **Text**:
    - `heading`: "#0F172A" (near-slate)
    - `body`: "#334155"
    - `muted`: "#64748B"
- **Borders/Dividers**:
    - `subtle`: "#E2E8F0"

### Primary CTA
- **Label Examples**: "Request Demo", "Schedule a Demo", "Get Started"
- **Background Color**: "#7C3AED" (PRIMARY PURPLE - use for main CTA)
- **Text Color**: "#FFFFFF"
- **Hover Background**: "#6D28D9"
- **Active Background**: "#5B21B6"
- **Focus Ring**: "rgba(124, 58, 237, 0.35)"

### Secondary CTA
- **Style**: "outline"
- **Border Color**: "#CBD5E1"
- **Text Color**: "#0F172A"
- **Hover Background**: "#F1F5F9"

### Accent Colors
- **Good (Success)**: "#22C55E"
- **Warn (Warning)**: "#F59E0B"
- **Info**: "#3B82F6"

### Layout + Components
- **Max Width**: "1120px"
- **Grid**: "12-col desktop; 4-col mobile"
- **Section Padding Y**: "80px desktop / 56px mobile"

### Hero
- **Headline Style**: "large bold, 48–56px desktop, 34–40px mobile"
- **Subhead Style**: "18–20px, muted slate"
- **CTA**: "primary purple button"
- **Stats**:
    - Presentation: "4-up stat row with bold number + short label"
    - Number Weight: 700
    - Label Color: muted

### Buttons
- **Radius**: "12px"
- **Height**: "44–48px"
- **Padding X**: "18–22px"
- **Shadow**: "soft shadow on primary only"

### Cards
- **Radius**: "16px"
- **Background**: "#FFFFFF"
- **Border**: "1px solid #E2E8F0"
- **Shadow**: "very subtle"
- **Icon Style**: "simple mono icons; small pop of purple allowed"

### Forms
- **Input Height**: "44px"
- **Radius**: "12px"
- **Border**: "#CBD5E1"
- **Focus**: "purple ring + border"

### Imagery
- **Style**: "SaaS marketing screenshots + friendly people testimonials"
- **Treatment**: "rounded corners, minimal heavy gradients"

### Motion
- **Subtle**: "fade/slide 12px on scroll"
- **Duration**: "180–240ms"
- **Easing**: "ease-out"

### Do / Don’t
- **DO**: "lots of whitespace, clear hierarchy, modern SaaS feel"
- **DO**: "use purple only for strongest actions + highlights"
- **DON'T**: "neon gradients, heavy shadows, busy backgrounds"
