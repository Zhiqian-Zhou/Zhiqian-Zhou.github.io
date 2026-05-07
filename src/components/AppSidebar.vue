<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

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
  { id: 'leadership', label: 'Leadership', icon: 'fa-users' }
]

const languages = [
  { name: 'Chinese', level: 'Native', highlight: true },
  { name: 'Spanish', level: 'Bilingual' },
  { name: 'Catalan', level: 'Bilingual' },
  { name: 'English', level: 'Professional' }
]

const onNav = () => emit('navigate')

const langOpen = ref(false)
const langRef = ref(null)

const onClickOutside = (e) => {
  if (langOpen.value && langRef.value && !langRef.value.contains(e.target)) {
    langOpen.value = false
  }
}
const onEsc = (e) => {
  if (e.key === 'Escape') langOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onEsc)
})
onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onEsc)
})
</script>

<template>
  <aside
    id="sidebar"
    class="fixed top-0 left-0 z-40 glass border-r border-slate-200 w-72 max-w-[82vw] lg:w-44 xl:w-56 2xl:w-64 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:translate-x-0 sidebar-shell"
    :class="open ? 'translate-x-0 shadow-2xl shadow-primary/10' : '-translate-x-full'"
  >
    <div class="sidebar-grid h-full">
      <!-- TOP: brand -->
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

      <!-- MIDDLE: navigation, distributes vertical space -->
      <nav
        class="min-h-0 px-3 flex flex-col justify-evenly gap-fluid-nav-gap py-2"
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

      <!-- BOTTOM: compact icon dock -->
      <footer
        class="px-3 pb-3 pt-2 border-t border-slate-200/80 flex flex-col gap-2"
      >
        <div class="flex items-center justify-around gap-1">
          <a
            href="mailto:zhiqianzhou12@gmail.com"
            class="dock-btn tip"
            data-tip="zhiqianzhou12@gmail.com"
            aria-label="Email"
          >
            <i class="fas fa-envelope text-primary"></i>
          </a>
          <a
            href="tel:"
            class="dock-btn tip"
            data-tip=""
            aria-label="Phone"
          >
            <i class="fas fa-phone text-emerald-500"></i>
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

          <!-- Languages popover -->
          <div ref="langRef" class="relative">
            <button
              type="button"
              @click.stop="langOpen = !langOpen"
              class="dock-btn tip"
              :class="{ '!bg-primary/10 !text-primary': langOpen }"
              :data-tip="langOpen ? '' : 'Languages'"
              :aria-expanded="langOpen"
              aria-label="Languages"
            >
              <i class="fas fa-language"></i>
            </button>
            <Transition name="lang-pop">
              <div
                v-if="langOpen"
                class="lang-pop absolute bottom-full mb-3 right-0 lg:left-1/2 lg:-translate-x-1/2 lg:right-auto z-50 w-44 bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-300/40 p-3"
                role="dialog"
                aria-label="Languages list"
              >
                <h4
                  class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2"
                >
                  Languages
                </h4>
                <ul class="space-y-1.5">
                  <li
                    v-for="lang in languages"
                    :key="lang.name"
                    class="flex justify-between items-center text-xs"
                  >
                    <span class="text-slate-700 font-medium">{{ lang.name }}</span>
                    <span
                      class="py-0.5 px-1.5 rounded text-[10px] font-medium"
                      :class="
                        lang.highlight
                          ? 'bg-primary/10 text-primary font-bold'
                          : 'bg-slate-100 text-slate-600'
                      "
                      >{{ lang.level }}</span
                    >
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </div>
      </footer>
    </div>
  </aside>
</template>

<style scoped>
/* Layout backbone — three zones, middle absorbs slack, never overflows */
.sidebar-shell {
  height: 100dvh;
  min-height: 100svh;
}
.sidebar-grid {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
}

/* Fluid typography — scales with viewport height */
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
  padding-top: clamp(0.35rem, 0.9vh, 0.7rem);
  padding-bottom: clamp(0.35rem, 0.9vh, 0.7rem);
}

/* Hide brand close-button gap on lg, brand only */
header { padding-top: clamp(0.6rem, 1.8vh, 1.2rem); padding-bottom: clamp(0.6rem, 1.6vh, 1rem); }
footer { padding-top: clamp(0.4rem, 1vh, 0.7rem); padding-bottom: clamp(0.5rem, 1.2vh, 0.85rem); }

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
.tip { position: relative; }
.tip[data-tip='']::after,
.tip[data-tip='']::before { display: none; }
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
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Languages popover transition */
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
