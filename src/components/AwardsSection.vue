<script setup>
const awards = [
  {
    title: '1st Prize, MERIThON UPC',
    year: '2026',
    color: 'primary',
    descHtml:
      'Won for <strong class="text-slate-800">AImSafe</strong>, an AI-powered worker safety monitoring computer-vision system.'
  },
  {
    title: '1st Prize, MERIThON UPC',
    year: '2025',
    color: 'secondary',
    descHtml:
      'Won for <strong class="text-slate-800">AIvidence</strong>, a Multi-Agent LLM-based misinformation detection system.'
  },
  {
    title: '3rd Prize, InterHackBCN',
    year: '2026',
    color: 'rose',
    descHtml:
      'Won for <strong class="text-slate-800">NextBuy</strong> (Inibsa Challenge), an explainable sales-prioritisation system generating 400 daily commercial alerts from transactional history.'
  },
  {
    title: 'Schneider Electric Impact Maker',
    year: '2024',
    color: 'emerald',
    descHtml:
      'Awarded the distinction for being the best mid-term female student in Artificial Intelligence GIA.'
  },
  {
    title: 'Academic Honors Distinction',
    year: '2021-2026',
    color: 'rose',
    descHtml:
      'High School Honors (Matrícula de Honor, GPA: 9.8) & 5 UPC university courses passed with distinction (Top 5%).'
  }
]

const borderClass = (c) =>
  ({
    primary: 'border-l-primary',
    secondary: 'border-l-secondary',
    emerald: 'border-l-emerald-500',
    rose: 'border-l-rose-500'
  })[c]

const tagClass = (c) =>
  ({
    primary: 'text-primary bg-primary/10',
    secondary: 'text-secondary bg-secondary/10',
    emerald: 'text-emerald-600 bg-emerald-500/10',
    rose: 'text-rose-600 bg-rose-500/10'
  })[c]
</script>

<template>
  <section
    id="awards"
    class="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-slate-200"
  >
    <div class="flex items-center gap-4 mb-12" data-aos="fade-up">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Honors &amp; Awards</h2>
      <div class="heading-line h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(a, idx) in awards"
        :key="`${a.title}-${a.year}`"
        class="glass-card p-6 rounded-2xl border-l-4"
        :class="borderClass(a.color)"
        data-aos="fade-up"
        :data-aos-delay="100 + idx * 100"
      >
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-xl font-bold text-slate-900">{{ a.title }}</h3>
          <span
            class="font-mono text-xs font-bold px-2.5 py-1 rounded-md"
            :class="tagClass(a.color)"
            >{{ a.year }}</span
          >
        </div>
        <p class="text-slate-600 text-sm leading-relaxed" v-html="a.descHtml"></p>
      </div>
    </div>
  </section>
</template>
