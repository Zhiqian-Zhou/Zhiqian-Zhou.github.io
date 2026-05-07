# Zhiqian Zhou — Personal Site

Vue 3 + Vite + Tailwind CSS portfolio site, ported from a single-file HTML template into componentized Vue.

## Stack

- Vue 3 (`<script setup>`, Composition API)
- Vite 6
- Tailwind CSS 3
- AOS (animate on scroll)
- Font Awesome 6 + Google Fonts via CDN

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to http://localhost:5173).

## Add your photo

Drop a square image at `public/profile.jpg`. It will appear in the hero section automatically. If absent, the page falls back to a placeholder.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  main.js               # Vue + AOS bootstrap
  App.vue               # Layout (sidebar + main scroll area, scroll-spy)
  assets/main.css       # Tailwind layers + glass/gradient utilities
  components/
    AppSidebar.vue      # Fixed left nav, contacts, languages
    HeroSection.vue
    AboutSection.vue
    ExperienceSection.vue   # Timeline (data-driven)
    ProjectsSection.vue     # Project cards (data-driven)
    PublicationsSection.vue
    SkillsSection.vue       # Skill groups (data-driven)
    AwardsSection.vue       # Award cards (data-driven)
    LeadershipSection.vue
    AppFooter.vue
```
