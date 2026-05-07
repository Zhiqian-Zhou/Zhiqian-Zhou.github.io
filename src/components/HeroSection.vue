<script setup>
import { ref } from 'vue'
import profileSrc from '@/assets/profile.jpg'

const fallback =
  "this.onerror=null;this.src='https://placehold.co/400x400/f8fafc/0ea5e9?text=Zhiqian';"

const tiltStyle = ref('')
const onMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - r.left) / r.width - 0.5) * 16
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
      <!-- Top: text + larger photo -->
      <div
        class="flex flex-col-reverse lg:flex-row lg:items-center gap-8 sm:gap-10 mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="flex-1 text-left">
          <!-- Status pill: now available -->
          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-5"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
              ></span>
            </span>
            Open to opportunities
          </div>

          <p class="text-primary font-mono mb-3 sm:mb-4 text-base sm:text-lg">
            <i class="fas fa-sparkles mr-2 sparkle"></i>Welcome
          </p>
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Hi, I'm <span class="text-gradient">Zhiqian</span>
            <span class="wave inline-block">👋</span>
          </h1>
        </div>

        <!-- Bigger photo with floating "Now" badge -->
        <div
          class="flex-shrink-0 relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 ml-0 lg:ml-auto float-anim tilt"
          :style="{ transform: tiltStyle }"
          @mousemove="onMove"
          @mouseleave="onLeave"
        >
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-xl opacity-40 animate-pulse"
          ></div>
          <div
            class="absolute inset-2 rounded-full border-2 border-slate-200 overflow-hidden bg-white z-10 p-1 glass-card"
          >
            <img
              :src="profileSrc"
              alt="Zhiqian Zhou"
              class="w-full h-full object-cover rounded-full"
              :onerror="fallback"
            />
          </div>
          <!-- Floating badge -->
          <div
            class="now-badge absolute -bottom-2 -right-2 z-20 bg-white rounded-full px-3 py-1.5 shadow-lg shadow-primary/20 border border-slate-100 flex items-center gap-1.5"
          >
            <span class="text-base">🇪🇸</span>
            <span class="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
              Barcelona
            </span>
          </div>
        </div>
      </div>

      <!-- Bio -->
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

        <!-- Primary CTA buttons -->
        <div class="flex flex-wrap gap-3 sm:gap-4 mb-7">
          <a
            href="#projects"
            class="shine-btn px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-white font-bold hover:bg-sky-500 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            <i class="fas fa-rocket text-sm"></i>
            View My Work
          </a>
          <a
            href="mailto:zhiqianzhou12@gmail.com"
            class="shine-btn px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            <i class="fas fa-paper-plane text-sm"></i>
            Contact Me
          </a>
          <a
            href="#about"
            class="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:-translate-y-0.5 transition-all font-medium text-slate-700 active:scale-95"
          >
            About Me
          </a>
        </div>

        <!-- Social row -->
        <div class="flex items-center gap-4 flex-wrap">
          <span class="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
            Find me on
          </span>
          <div class="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/zhiqian-zhou-196350300/"
              target="_blank"
              rel="noopener"
              class="social-link group flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all hover:-translate-y-0.5"
            >
              <i class="fab fa-linkedin-in text-sm"></i>
              <span class="text-xs font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Zhiqian-Zhou"
              target="_blank"
              rel="noopener"
              class="social-link group flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <i class="fab fa-github text-sm"></i>
              <span class="text-xs font-semibold">GitHub</span>
            </a>
            <a
              href="mailto:zhiqianzhou12@gmail.com"
              class="social-link group flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5"
            >
              <i class="fas fa-envelope text-sm"></i>
              <span class="text-xs font-semibold">Email</span>
            </a>
          </div>
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

<style scoped>
/* Hand wave animation */
.wave {
  animation: wave 2.6s ease-in-out infinite;
  transform-origin: 70% 70%;
}
@keyframes wave {
  0%,
  60%,
  100% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

/* Floating "Now" badge animation */
.now-badge {
  animation: badge-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both;
}
@keyframes badge-pop {
  from {
    opacity: 0;
    transform: scale(0.5) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
