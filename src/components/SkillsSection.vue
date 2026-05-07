<script setup>
const groups = [
  {
    title: 'Programming',
    icon: 'fa-code',
    color: 'primary',
    items: ['Python (Advanced)', 'C++', 'Java', 'SQL', 'R', 'MATLAB', 'Prolog', 'PDDL']
  },
  {
    title: 'Gen AI & LLMs',
    icon: 'fa-brain',
    color: 'secondary',
    items: ['LangChain', 'RAG Architectures', 'ReAct', 'MCP', 'Tool Use / Skills']
  },
  {
    title: 'ML & Data Science',
    icon: 'fa-chart-network',
    color: 'emerald',
    items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas']
  },
  {
    title: 'CV & NLP & MLOps',
    icon: 'fa-eye',
    color: 'rose',
    items: ['CNNs', 'ViT', 'OpenCV', 'MediaPipe', 'Docker', 'FastAPI']
  }
]

const iconColor = (c) =>
  ({
    primary: 'text-primary',
    secondary: 'text-secondary',
    emerald: 'text-emerald-500',
    rose: 'text-rose-500'
  })[c]

const hoverBorder = (c) =>
  ({
    primary: 'hover:border-primary/50 hover:text-primary',
    secondary: 'hover:border-secondary/50 hover:text-secondary',
    emerald: 'hover:border-emerald-500/50 hover:text-emerald-600',
    rose: 'hover:border-rose-500/50 hover:text-rose-600'
  })[c]
</script>

<template>
  <section
    id="skills"
    class="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-slate-200 mb-10"
  >
    <div class="flex items-center gap-4 mb-12" data-aos="fade-up">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Technical Arsenal</h2>
      <div class="heading-line h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div
        v-for="(group, idx) in groups"
        :key="group.title"
        class="glass-card p-6 sm:p-8 rounded-2xl"
        data-aos="fade-up"
        :data-aos-delay="100 + idx * 100"
      >
        <h3
          class="text-xl font-bold mb-6 text-slate-900 border-b border-slate-100 pb-4"
        >
          <i :class="['fas', group.icon, iconColor(group.color), 'mr-3']"></i>
          {{ group.title }}
        </h3>
        <div class="flex flex-wrap gap-2.5">
          <span
            v-for="(item, i) in group.items"
            :key="item"
            class="chip-wave px-4 py-2 bg-slate-50 border border-slate-200 transition-all rounded-lg text-sm font-medium text-slate-700 cursor-default"
            :class="hoverBorder(group.color)"
            :style="{ '--chip-delay': `${i * 60}ms` }"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
