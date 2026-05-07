<script setup>
import { ref } from 'vue'
import profileSrc from '@/assets/profile.jpg'

const fallback =
  "this.onerror=null;this.src='https://placehold.co/400x400/f8fafc/0ea5e9?text=Zhiqian';"

const tiltStyle = ref('')
const onMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - r.left) / r.width - 0.5) * 16 // deg
  const y = ((e.clientY - r.top) / r.height - 0.5) * 16
  tiltStyle.value = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.04)`
}
const onLeave = () => (tiltStyle.value = '')
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex items-center px-5 sm:px-6 lg:px-16 py-20 relative"
  >
    <div class="max-w-5xl mx-auto w-full flex flex-col justify-center">
      <div
        class="flex flex-col-reverse lg:flex-row lg:items-center gap-6 sm:gap-8 mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="flex-1 text-left">
          <p class="text-primary font-mono mb-3 sm:mb-4 text-base sm:text-lg">
            <i class="fas fa-sparkles mr-2 sparkle"></i>Welcome
          </p>
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Hi, I'm <span class="text-gradient">Zhiqian.</span>
          </h1>
        </div>

        <div
          class="flex-shrink-0 relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 ml-0 lg:ml-auto float-anim tilt"
          :style="{ transform: tiltStyle }"
          @mousemove="onMove"
          @mouseleave="onLeave"
        >
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-lg opacity-30 animate-pulse"
          ></div>
          <div
            class="absolute inset-1 rounded-full border-2 border-slate-200 overflow-hidden bg-white z-10 p-1 glass-card"
          >
            <img
              :src="profileSrc"
              alt="Zhiqian Zhou"
              class="w-full h-full object-cover rounded-full"
              :onerror="fallback"
            />
          </div>
        </div>
      </div>

      <div
        class="text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h2
          class="text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 mb-5 sm:mb-6"
        >
          AI Researcher &amp; Intelligent Systems Engineer
        </h2>
        <p
          class="text-slate-600 text-base sm:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed"
        >
          Final-year AI student at UPC BarcelonaTech. I specialize in constrained LLM
          generation, RAG architectures, and multi-agent systems, transforming complex
          data into spatial reasoning and actionable real-world insights.
        </p>

        <div class="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#projects"
            class="shine-btn px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-white font-bold hover:bg-sky-500 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#about"
            class="px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass border border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:-translate-y-0.5 transition-all font-medium text-slate-700 active:scale-95"
          >
            About Me
          </a>
        </div>
      </div>

      <!-- Scroll hint -->
      <div
        class="hidden md:flex flex-col items-center mt-16 text-slate-400 animate-pulse"
        data-aos="fade"
        data-aos-delay="800"
      >
        <span class="text-xs font-mono mb-2 tracking-wider">SCROLL</span>
        <i class="fas fa-chevron-down text-sm"></i>
      </div>
    </div>
  </section>
</template>
