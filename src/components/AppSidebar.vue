<script setup>
defineProps({
  activeSection: { type: String, default: 'home' },
  open: { type: Boolean, default: false }
})

const emit = defineEmits(['navigate'])

const navItems = [
  { id: 'home', label: 'Home', icon: 'fa-home' },
  { id: 'about', label: 'About', icon: 'fa-user' },
  { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
  { id: 'projects', label: 'Projects', icon: 'fa-code' },
  { id: 'publications', label: 'Research', icon: 'fa-book-open' },
  { id: 'skills', label: 'Skills', icon: 'fa-tools' },
  { id: 'awards', label: 'Awards', icon: 'fa-trophy' },
  { id: 'leadership', label: 'Leadership', icon: 'fa-users' },
  { id: 'hobbies', label: 'Hobbies', icon: 'fa-heart' }
]

const languages = [
  { code: 'CN', name: 'Chinese', level: 'Native', highlight: true },
  { code: 'ES', name: 'Spanish', level: 'Bilingual' },
  { code: 'CA', name: 'Catalan', level: 'Bilingual' },
  { code: 'EN', name: 'English', level: 'Pro' }
]

const onNav = () => emit('navigate')
</script>

<template>
  <aside
    id="sidebar"
    class="fixed top-0 left-0 z-40 sidebar-panel border-r border-slate-200 w-72 max-w-[82vw] lg:w-44 xl:w-56 2xl:w-64 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:translate-x-0 sidebar-shell"
    :class="open ? 'translate-x-0 shadow-2xl shadow-primary/10' : '-translate-x-full'"
  >
    <div class="sidebar-grid h-full">
      <!-- TOP: brand + status pip -->
      <header class="flex items-center justify-between px-4 py-4">
        <a
          href="#home"
          @click="onNav"
          class="font-mono font-bold tracking-tighter text-slate-900 transition-transform hover:scale-105 text-fluid-brand"
        >
          Zhiqian<span class="text-primary">.</span>
        </a>
        <button
          type="button"
          @click="onNav"
          class="lg:hidden w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
          aria-label="Close menu"
        >
          <i class="fas fa-xmark text-sm"></i>
        </button>
      </header>

      <!-- NAV: tight at top, doesn't stretch -->
      <nav
        class="px-3 flex flex-col gap-fluid-nav-gap py-1"
        aria-label="Page sections"
      >
        <a
          v-for="(item, idx) in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click="onNav"
          :style="{ '--nav-delay': `${idx * 35}ms` }"
          class="nav-link nav-anim group flex items-center gap-3 px-3 py-fluid-nav-py rounded-lg border-l-2 border-transparent text-slate-600 font-medium hover:text-primary hover:bg-slate-100 hover:translate-x-1 transition-all text-fluid-nav"
          :class="{ active: activeSection === item.id }"
        >
          <i :class="['fas', item.icon, 'w-5 text-center text-fluid-nav-icon shrink-0']"></i>
          <span class="truncate">{{ item.label }}</span>
        </a>
      </nav>

      <!-- SPOTLIGHT: fills remaining vertical space; auto-hidden when too short -->
      <div class="spotlight-zone min-h-0 px-3 pt-3 pb-2 flex flex-col justify-end">
        <section class="spotlight-card hidden mb-2">
          <div class="spotlight-glow rounded-2xl p-4 relative overflow-hidden">
            <div class="flex items-center gap-2 mb-2">
              <span class="relative flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                ></span>
              </span>
              <span
                class="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600"
                >Available</span
              >
            </div>
            <p class="text-xs text-slate-700 leading-snug font-medium">
              Final-year AI student, open to research and engineering
              opportunities.
            </p>
            <div
              class="mt-3 pt-3 border-t border-slate-200/70 flex items-center gap-2"
            >
              <div
                class="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0"
              >
                <i class="fas fa-hammer text-[10px] text-primary"></i>
              </div>
              <div class="min-w-0">
                <p class="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                  Building
                </p>
                <p class="text-[11px] text-slate-700 font-semibold truncate">
                  HomeCraft thesis
                </p>
              </div>
            </div>
          </div>

          <a
            href="#projects"
            @click="onNav"
            class="mt-3 group flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900 text-white text-[11px] font-medium hover:bg-slate-800 transition-colors"
          >
            <span>See latest work</span>
            <i
              class="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"
            ></i>
          </a>
        </section>
      </div>

      <!-- BOTTOM: languages strip + compact icon dock -->
      <footer
        class="px-3 pb-3 pt-2 border-t border-slate-200/80 flex flex-col gap-2"
      >
        <!-- Always-visible language pills -->
        <div class="flex items-center justify-between mb-1">
          <h4
            class="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em]"
          >
            Languages
          </h4>
        </div>
        <div class="grid grid-cols-2 gap-1">
          <span
            v-for="l in languages"
            :key="l.code"
            class="lang-pill flex items-center justify-between px-2 py-1 rounded-md text-[10px] font-medium"
            :class="
              l.highlight
                ? 'bg-primary/10 text-primary'
                : 'bg-slate-100 text-slate-700'
            "
            :title="`${l.name} — ${l.level}`"
          >
            <span class="font-mono font-bold">{{ l.code }}</span>
            <span
              class="text-[9px] opacity-80"
              :class="l.highlight ? 'font-bold' : ''"
              >{{ l.level }}</span
            >
          </span>
        </div>

        <!-- Contact + social dock -->
        <div class="flex items-center justify-around gap-1 mt-2">
          <a
            href="mailto:zhiqianzhou12@gmail.com"
            class="dock-btn tip"
            data-tip="zhiqianzhou12@gmail.com"
            aria-label="Email"
          >
            <i class="fas fa-envelope text-primary"></i>
          </a>
          <span
            class="dock-btn tip cursor-default"
            data-tip="Barcelona, Spain"
            aria-label="Location"
          >
            <i class="fas fa-map-marker-alt text-rose-500"></i>
          </span>
          <a
            href="https://www.linkedin.com/in/zhiqian-zhou-196350300/"
            target="_blank"
            rel="noopener"
            class="dock-btn tip hover:!bg-[#0A66C2] hover:!text-white"
            data-tip="LinkedIn"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Zhiqian-Zhou"
            target="_blank"
            rel="noopener"
            class="dock-btn tip hover:!bg-slate-900 hover:!text-white"
            data-tip="GitHub"
            aria-label="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  </aside>
</template>

<style scoped>
/* Layout backbone — header / nav / spotlight (1fr) / footer */
.sidebar-shell {
  height: 100dvh;
  min-height: 100svh;
}

/* Solid split-screen panel (no longer glassy/transparent) */
.sidebar-panel {
  background: #ffffff;
  box-shadow: 1px 0 0 rgba(15, 23, 42, 0.04), 4px 0 24px -8px rgba(15, 23, 42, 0.06);
}
.sidebar-grid {
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
}

/* Fluid typography — scales gently with viewport height */
.text-fluid-brand {
  font-size: clamp(1rem, 2.4vh, 1.4rem);
}
.text-fluid-nav {
  font-size: clamp(0.7rem, 1.4vh, 0.95rem);
}
.text-fluid-nav-icon {
  font-size: clamp(0.7rem, 1.4vh, 0.95rem);
}
.gap-fluid-nav-gap {
  gap: clamp(0.05rem, 0.4vh, 0.4rem);
}
.py-fluid-nav-py {
  padding-top: clamp(0.4rem, 1vh, 0.7rem);
  padding-bottom: clamp(0.4rem, 1vh, 0.7rem);
}

header {
  padding-top: clamp(0.6rem, 1.8vh, 1.2rem);
  padding-bottom: clamp(0.6rem, 1.6vh, 1rem);
}
footer {
  padding-top: clamp(0.4rem, 1vh, 0.7rem);
  padding-bottom: clamp(0.5rem, 1.2vh, 0.85rem);
}

/* Spotlight — show only when there's enough vertical room */
@media (min-height: 760px) {
  .spotlight-card {
    display: block;
    animation: spotlight-in 0.6s cubic-bezier(0.32, 0.72, 0, 1) 0.4s both;
  }
}

.spotlight-glow {
  background: linear-gradient(
    135deg,
    rgba(14, 165, 233, 0.06) 0%,
    rgba(99, 102, 241, 0.08) 100%
  );
  border: 1px solid rgba(14, 165, 233, 0.18);
  position: relative;
}
.spotlight-glow::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background: radial-gradient(
    circle at top right,
    rgba(99, 102, 241, 0.15),
    transparent 50%
  );
  pointer-events: none;
}

@keyframes spotlight-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dock buttons */
.dock-btn {
  width: clamp(1.6rem, 3.6vh, 2.1rem);
  height: clamp(1.6rem, 3.6vh, 2.1rem);
  border-radius: 9999px;
  background: rgb(241 245 249);
  color: rgb(71 85 105);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.65rem, 1.4vh, 0.85rem);
  transition: all 0.2s ease;
}
.dock-btn:hover {
  background: rgba(14, 165, 233, 0.1);
  color: rgb(14 165 233);
  transform: translateY(-2px) scale(1.08);
}

/* CSS-only tooltips */
.tip {
  position: relative;
}
.tip[data-tip='']::after,
.tip[data-tip='']::before {
  display: none;
}
.tip::after {
  content: attr(data-tip);
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translateX(-50%) translateY(4px);
  background: #0f172a;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 60;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.tip::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: calc(100% + 4px);
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: #0f172a;
  opacity: 0;
  transition: opacity 0.18s ease;
  z-index: 60;
}
.tip:hover::after,
.tip:focus-visible::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.tip:hover::before,
.tip:focus-visible::before {
  opacity: 1;
}

/* Nav slide-in stagger */
.nav-anim {
  animation: nav-slide-in 0.5s cubic-bezier(0.32, 0.72, 0, 1) both;
  animation-delay: var(--nav-delay, 0ms);
}
@keyframes nav-slide-in {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Languages popover */
.lang-pop-enter-active,
.lang-pop-leave-active {
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: bottom center;
}
.lang-pop-enter-from,
.lang-pop-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.92);
}
</style>
