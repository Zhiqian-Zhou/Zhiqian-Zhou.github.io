<script setup>
const hobbies = [
  {
    name: 'Singing',
    icon: 'fa-microphone-lines',
    color: 'primary',
    blurb: 'Belting tunes on long bus rides — strictly volume-first.'
  },
  {
    name: 'Boxing',
    icon: 'fa-hand-fist',
    color: 'rose',
    blurb: 'Throwing hands at the bag — sharper jab every week.'
  },
  {
    name: 'Dancing',
    icon: 'fa-music',
    color: 'secondary',
    blurb: 'Floor open. Music on. Knees do not get a vote.'
  },
  {
    name: 'Eating',
    icon: 'fa-utensils',
    color: 'amber',
    blurb: 'Self-declared food critic — extra spicy, please.'
  },
  {
    name: 'Travelling',
    icon: 'fa-plane-departure',
    color: 'emerald',
    blurb: 'Always plotting the next stamp in the passport.'
  }
]

const tile = (color) =>
  ({
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    rose: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    amber: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
  })[color]
</script>

<template>
  <section
    id="hobbies"
    class="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-slate-200"
  >
    <div class="flex items-center gap-4 mb-12" data-aos="fade-up">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
        Off the Clock
      </h2>
      <div
        class="heading-line h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md"
      ></div>
    </div>

    <p
      class="text-slate-600 text-lg max-w-2xl mb-10"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      What I'm into when I'm not in front of a terminal.
    </p>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div
        v-for="(h, idx) in hobbies"
        :key="h.name"
        class="hobby-card glass-card rounded-2xl p-5 flex flex-col items-center text-center group cursor-default"
        :style="{ '--hobby-delay': `${idx * 90}ms` }"
      >
        <div
          class="hobby-icon w-14 h-14 rounded-2xl border flex items-center justify-center mb-3 transition-transform"
          :class="tile(h.color)"
        >
          <i :class="['fas', h.icon, 'text-xl']"></i>
        </div>
        <h3 class="font-bold text-slate-900 mb-1">{{ h.name }}</h3>
        <p class="text-xs text-slate-500 leading-snug">{{ h.blurb }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hobby-card {
  animation: hobby-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: var(--hobby-delay, 0ms);
}
.hobby-card:hover .hobby-icon {
  transform: scale(1.12) rotate(-6deg);
}
@keyframes hobby-pop {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
