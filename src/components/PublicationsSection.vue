<script setup>
const papers = [
  {
    badge: 'Accepted',
    venue: 'ICML 2026 — AIWILD Workshop',
    title: 'WinDOM: Self-Family Distillation for Small-Model GUI Grounding',
    authorsHtml:
      'C. Li Chen, <strong class="text-slate-900">Z. Zhou</strong>, H. Chen, N. Chauvin.',
    affiliation: 'Agents in the Wild Workshop @ ICML 2026',
    affilIcon: 'fa-flask',
    color: 'secondary',
    link: 'https://openreview.net/forum?id=wqful6F0Em'
  },
  {
    badge: 'Accepted',
    venue: 'TRA 2026',
    title: 'Bridging Disruptions: AI-Driven Coordination Across Air and Rail Networks',
    authorsHtml:
      'I. Stroumpou, P. Mrazovic, M. Nadal Par, H. Chen, <strong class="text-slate-900">Z. Zhou</strong>, J. L. Larriba-Pey.',
    affiliation: 'Transport Research Arena',
    affilIcon: 'fa-university',
    color: 'primary',
    link: 'https://traconference.eu/'
  }
]

const badgeClass = (badge) =>
  badge === 'Accepted'
    ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
    : 'bg-yellow-100 text-yellow-700 border-yellow-200'
</script>

<template>
  <section
    id="publications"
    class="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-slate-200"
  >
    <div class="flex items-center gap-4 mb-12" data-aos="fade-up">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
        Publications &amp; Research
      </h2>
      <div class="heading-line h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md"></div>
    </div>

    <div class="space-y-6" data-aos="fade-up">
      <div
        v-for="paper in papers"
        :key="paper.title"
        class="glass p-6 md:p-8 rounded-2xl border border-slate-200 bg-white/50 transition-colors hover:bg-white"
        :class="
          paper.color === 'primary'
            ? 'hover:border-primary/40'
            : 'hover:border-secondary/40'
        "
      >
        <div class="flex flex-wrap gap-3 mb-4">
          <span
            class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border"
            :class="badgeClass(paper.badge)"
            >{{ paper.badge }}</span
          >
          <span
            class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded border border-slate-200"
            >{{ paper.venue }}</span
          >
        </div>
        <h4 class="text-xl md:text-2xl font-bold text-slate-900 mb-3">
          <a
            v-if="paper.link"
            :href="paper.link"
            target="_blank"
            rel="noopener"
            class="hover:text-primary transition-colors"
            >{{ paper.title }}</a
          >
          <template v-else>{{ paper.title }}</template>
        </h4>
        <p class="text-base text-slate-600 mb-4 leading-relaxed" v-html="paper.authorsHtml"></p>
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p
            class="text-sm font-mono flex items-center gap-2"
            :class="paper.color === 'primary' ? 'text-primary' : 'text-secondary'"
          >
            <i :class="['fas', paper.affilIcon]"></i> {{ paper.affiliation }}
          </p>
          <a
            v-if="paper.link"
            :href="paper.link"
            target="_blank"
            rel="noopener"
            class="text-sm font-mono text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            View paper <i class="fas fa-arrow-up-right-from-square text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
