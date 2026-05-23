<script setup>
const projects = [
  {
    title: 'AImSafe',
    icon: 'fa-shield-alt',
    color: 'primary',
    award: '1st Prize, MERIThON UPC 2026',
    description:
      "Real-time privacy-preserving CV system tracking up to 5 factory workers. Monitors fatigue, detects unsafe postures, and fuses signals into a unified REBA safety score. Deployed an LLM agent for natural-language coaching and automated MQTT equipment control.",
    tags: ['Computer Vision', 'LLM Agents', 'IoT'],
    repo: 'https://github.com/ChenghengLi/AImSafe',
    decor: true
  },
  {
    title: 'AIvidence',
    icon: 'fa-search-plus',
    color: 'secondary',
    award: '1st Prize, MERIThON UPC 2025',
    description:
      'Multi-Agent Misinformation Hunter. Designed a four-agent pipeline using LLMs and RAG to detect misinformation through automated fact-checking and credibility scoring, complete with transparent and interpretable reasoning logs.',
    tags: ['RAG', 'Multi-Agent', 'Fact-Checking'],
    repo: 'https://github.com/ChenghengLi/AIvidence',
    decor: true
  },
  {
    title: 'NextBuy',
    icon: 'fa-cart-shopping',
    color: 'rose',
    award: '3rd Prize, InterHackBCN 2026 — Inibsa Challenge',
    description:
      'Intelligent sales-prioritisation system for Inibsa (dental clinic distributor) processing ~14k customer-product combinations. Generates 400 daily commercial alerts ranked by probability, euro impact, and time urgency; LightGBM + XGBoost models with TreeSHAP explanations narrated by Gemini 2.5 Flash. Achieves P@5% > 0.90 on top-priority alerts. FastAPI + MongoDB backend, Vue 3 CRM-style frontend.',
    tags: ['LightGBM', 'XGBoost', 'SHAP', 'Gemini', 'FastAPI', 'Vue 3'],
    repo: 'https://devpost.com/software/nextbuy',
    decor: true
  },
  {
    title: 'Creative.AI',
    icon: 'fa-wand-magic-sparkles',
    color: 'amber',
    event: 'HackUPC 2026 — Smadex Creative Intelligence Challenge',
    description:
      'AI assistant for mobile-ad creatives. Built a soft-vote tabular ensemble (XGBoost, LightGBM, CatBoost) for health scoring, fine-tuned SmolVLM for structured strengths/weaknesses analysis, and a Flux LoRA + DPO pipeline that rebuilds creatives. Ships as an offline-capable SPA with 1,076 precomputed predictions and a circle-to-ask coaching interface. Test macro-F1 of 0.677.',
    tags: ['Vision Models', 'ML Ensemble', 'FastAPI', 'AdTech'],
    repo: 'https://github.com/xuyaooo/smadex-creative',
    decor: true
  },
  {
    title: 'CUPME (Siemens Energy)',
    icon: 'fa-robot',
    color: 'emerald',
    description:
      "Enterprise RAG Chatbot built over Siemens Energy's technical documentation. Utilized external knowledge retrieval strategies to drastically minimize hallucinations in natural-language responses.",
    tags: ['Enterprise RAG', 'NLP'],
    repo: 'https://github.com/randreu27/Chatbot-Ultra-Pro-Max-Energy-CUPME'
  },
  {
    title: 'Voice Command Recognition',
    icon: 'fa-microphone-alt',
    color: 'rose',
    description:
      'Architected an audio classification system that accurately recognizes voice commands. Achieved 96% accuracy by implementing and tuning CNNs and Transformer-based solutions.',
    tags: ['Audio Processing', 'CNNs', 'Transformers'],
    repo: 'https://github.com/C-H-E-N-Zhihao/Voice-command-recognition'
  }
]

const colorClass = (color, slot) => {
  const map = {
    primary: {
      bg: 'bg-primary/10',
      border: 'border-primary/20',
      text: 'text-primary',
      decor: 'bg-primary/5'
    },
    secondary: {
      bg: 'bg-secondary/10',
      border: 'border-secondary/20',
      text: 'text-secondary',
      decor: 'bg-secondary/5'
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-500',
      decor: 'bg-emerald-500/5'
    },
    rose: {
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      text: 'text-rose-500',
      decor: 'bg-rose-500/5'
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-600',
      decor: 'bg-amber-500/5'
    }
  }
  return map[color]?.[slot] || ''
}
</script>

<template>
  <section
    id="projects"
    class="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-slate-200"
  >
    <div class="flex items-center gap-4 mb-12" data-aos="fade-up">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Key Projects</h2>
      <div class="heading-line h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        v-for="(p, idx) in projects"
        :key="p.title"
        class="glass-card rounded-2xl p-6 sm:p-8 flex flex-col h-full group relative overflow-hidden"
        data-aos="fade-up"
        :data-aos-delay="100 + idx * 100"
      >
        <div
          v-if="p.decor"
          class="absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"
          :class="colorClass(p.color, 'decor')"
        ></div>

        <div class="flex justify-between items-start mb-6">
          <div
            class="icon-tile w-14 h-14 rounded-xl flex items-center justify-center border"
            :class="[colorClass(p.color, 'bg'), colorClass(p.color, 'border')]"
          >
            <i :class="['fas', p.icon, 'text-2xl', colorClass(p.color, 'text')]"></i>
          </div>
          <a
            :href="p.repo"
            target="_blank"
            rel="noopener"
            class="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <i class="fab fa-github text-3xl"></i>
          </a>
        </div>

        <h3 class="text-2xl font-bold mb-3 text-slate-900">{{ p.title }}</h3>
        <p
          v-if="p.award"
          class="text-sm font-mono mb-5 flex items-center gap-2"
          :class="colorClass(p.color, 'text')"
        >
          <i class="fas fa-trophy text-yellow-500"></i> {{ p.award }}
        </p>
        <p
          v-else-if="p.event"
          class="text-sm font-mono mb-5 flex items-center gap-2"
          :class="colorClass(p.color, 'text')"
        >
          <i class="fas fa-flag-checkered"></i> {{ p.event }}
        </p>
        <p class="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          {{ p.description }}
        </p>

        <div class="flex flex-wrap gap-2 mt-auto text-xs font-mono">
          <span
            v-for="tag in p.tags"
            :key="tag"
            class="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
