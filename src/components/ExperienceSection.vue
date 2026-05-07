<script setup>
const work = [
  {
    title: "Bachelor's Thesis (HomeCraft)",
    period: 'Feb 2026 – Present',
    org: 'Polytechnic University of Catalonia',
    icon: 'fa-university',
    filled: true,
    body: `Building a framework translating natural language descriptions into 3D architectural structures by coupling large language models with graph-based spatial reasoning, using Minecraft as the evaluation testbed.`
  },
  {
    title: 'Research Assistant',
    period: 'Jul 2025 – Present',
    org: 'DAMA-UPC Research Group',
    icon: 'fa-microscope',
    filled: false,
    bullets: [
      'Explored methods for enabling LLMs to generate structured outputs under limited computational resource constraints.',
      'Built a knowledge graph integrating multimodal flight and rail schedule data to model disruption propagation (TRA 2026 submission).'
    ]
  }
]

const education = [
  {
    title: 'Exchange Student in AI',
    period: 'Sept 2025 – Jan 2026',
    org: 'Beihang University, Beijing',
    icon: 'fa-globe-asia',
    filled: true,
    body: `<strong class="text-slate-800">GPA: 96/100.</strong> Core courses in Foundation Models, Intelligent Security, Medical Image Computing.`,
    sub: `Benchmarked ResNet50 vs DeiT-Small on HAM10000 dataset, implemented multimodal fusion for fetal ultrasound analysis, and tested adversarial attacks (FGSM, PGD) to measure robustness degradation.`
  },
  {
    title: 'B.S. in Artificial Intelligence',
    period: 'Sept 2022 – Jun 2026',
    org: 'UPC BarcelonaTech',
    icon: 'fa-graduation-cap',
    filled: false,
    body: `<strong class="text-slate-800">GPA: 8.94/10.</strong> Distinctions (Top 5%) in High Performance Computing, Speech/Dialogue Processing, Knowledge/Automated Reasoning, Systems Modeling, and Calculus.`
  }
]

const groups = [
  { label: 'Work Experience', icon: 'fa-briefcase', color: 'primary', items: work },
  { label: 'Education', icon: 'fa-graduation-cap', color: 'secondary', items: education }
]
</script>

<template>
  <section
    id="experience"
    class="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-slate-200 relative"
  >
    <div class="flex items-center gap-4 mb-16" data-aos="fade-up">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
        Experience &amp; Education
      </h2>
      <div
        class="heading-line h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md"
      ></div>
    </div>

    <div class="space-y-20">
      <div v-for="group in groups" :key="group.label">
        <h3
          class="flex items-center gap-3 mb-8 text-sm font-bold uppercase tracking-[0.2em]"
          :class="group.color === 'primary' ? 'text-primary' : 'text-secondary'"
          data-aos="fade-up"
        >
          <span
            class="w-8 h-8 rounded-full flex items-center justify-center"
            :class="group.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'"
          >
            <i :class="['fas', group.icon, 'text-xs']"></i>
          </span>
          {{ group.label }}
        </h3>

        <div
          class="relative border-l-2 ml-4 space-y-14"
          :class="group.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'"
        >
          <div
            v-for="(item, idx) in group.items"
            :key="idx"
            class="relative pl-10"
            data-aos="fade-up"
          >
            <div
              class="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-4"
              :class="[
                group.color === 'primary' ? 'border-primary' : 'border-secondary',
                item.filled
                  ? group.color === 'primary'
                    ? 'shadow-md shadow-primary/40'
                    : 'shadow-md shadow-secondary/40'
                  : ''
              ]"
            ></div>
            <div
              class="flex flex-col xl:flex-row xl:items-baseline xl:justify-between mb-2"
            >
              <h4 class="text-2xl font-bold text-slate-900">{{ item.title }}</h4>
              <span
                class="font-mono text-sm mt-1 xl:mt-0 px-3 py-1 rounded-full w-max"
                :class="
                  group.color === 'primary'
                    ? 'text-primary bg-primary/10'
                    : 'text-secondary bg-secondary/10'
                "
                >{{ item.period }}</span
              >
            </div>
            <p
              class="text-lg text-slate-700 mb-4 font-medium flex items-center gap-2"
            >
              <i :class="['fas', item.icon, 'text-slate-400']"></i> {{ item.org }}
            </p>

            <ul
              v-if="item.bullets"
              class="list-disc list-outside ml-4 text-slate-600 space-y-2"
            >
              <li v-for="(b, i) in item.bullets" :key="i">{{ b }}</li>
            </ul>

            <div
              v-else
              class="glass p-5 rounded-xl border border-slate-200 bg-white/60"
            >
              <p
                class="text-slate-600 leading-relaxed"
                :class="{ 'mb-3': item.sub }"
                v-html="item.body"
              ></p>
              <p v-if="item.sub" class="text-slate-600 text-sm">{{ item.sub }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
