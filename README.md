# zhiqian-zhou.github.io

Personal site — Vue 3 + Vite + Tailwind. Single page in academic order: About · Research · Projects · Education · Awards · Skills · CV. Each fact lives in exactly one section.

## Editing content
All text lives in `src/data/profile.js`. The CV served by the site is `public/ZhiqianZhou_CV.pdf`.

## Images
Source photos (Unsplash + portrait) are in `scripts/src-images/`. Regenerate the graded WebP files in `public/img/` with:

```bash
node scripts/images.mjs
```

## Develop / deploy
```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run deploy    # build + force-push dist/ to the gh-pages branch
```

## Structure
```
src/
  App.vue                 shell: sidebar, mobile top bar, sections
  data/profile.js         all content
  composables/            useScrollSpy, asset()
  components/
    layout/               AppSidebar, MobileTopBar, QuoteBand, AppFooter
    sections/             About, Research, Projects, Education, Awards, Skills
    ui/                   PageSection, ProjectRow, ProjectThumb, PublicationCard, TimelineItem, SocialLinks
    sketches/             hand-drawn SVG doodles
```
