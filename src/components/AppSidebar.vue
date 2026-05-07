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
  { id: 'leadership', label: 'Leadership', icon: 'fa-users' }
]

const languages = [
  { name: 'Chinese', level: 'Native', highlight: true },
  { name: 'Spanish', level: 'Bilingual' },
  { name: 'Catalan', level: 'Bilingual' },
  { name: 'English', level: 'Prof.' }
]

const onNav = () => emit('navigate')
</script>

<template>
  <aside
    id="sidebar"
    class="fixed top-0 left-0 h-screen z-40 glass border-r border-slate-200 flex flex-col overflow-y-auto overflow-x-hidden w-72 max-w-[82vw] lg:w-44 xl:w-56 2xl:w-64 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:translate-x-0"
    :class="open ? 'translate-x-0 shadow-2xl shadow-primary/10' : '-translate-x-full'"
  >
    <div class="p-4 lg:p-4 xl:p-5 flex flex-col h-full">
      <!-- Brand row -->
      <div class="flex items-center justify-between mb-5">
        <a
          href="#home"
          @click="onNav"
          class="font-mono font-bold tracking-tighter inline-block text-slate-900 transition-transform hover:scale-105 text-xl lg:text-xl xl:text-2xl"
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
      </div>

      <!-- Contact -->
      <div class="mb-5 space-y-2.5">
        <h3
          class="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
        >
          Contact
        </h3>
        <a
          href="mailto:zhiqianzhou12@gmail.com"
          class="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-[11px] xl:text-xs group overflow-hidden"
        >
          <div
            class="w-6 h-6 xl:w-7 xl:h-7 shrink-0 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all"
          >
            <i class="fas fa-envelope text-primary text-[10px] xl:text-xs"></i>
          </div>
          <span class="truncate block" title="zhiqianzhou12@gmail.com"
            >zhiqianzhou12@gmail.com</span
          >
        </a>
        <div
          class="flex items-center gap-2 text-slate-600 text-[11px] xl:text-xs overflow-hidden"
        >
          <div
            class="w-6 h-6 xl:w-7 xl:h-7 shrink-0 rounded-full bg-slate-100 flex items-center justify-center"
          >
            <i class="fas fa-phone text-emerald-500 text-[10px] xl:text-xs"></i>
          </div>
          <span class="truncate block"></span>
        </div>
        <div
          class="flex items-center gap-2 text-slate-600 text-[11px] xl:text-xs overflow-hidden"
        >
          <div
            class="w-6 h-6 xl:w-7 xl:h-7 shrink-0 rounded-full bg-slate-100 flex items-center justify-center"
          >
            <i class="fas fa-map-marker-alt text-rose-500 text-[10px] xl:text-xs"></i>
          </div>
          <span class="truncate block">Barcelona, Spain</span>
        </div>

        <div class="flex gap-2 pt-1.5">
          <a
            href="https://www.linkedin.com/in/zhiqian-zhou-196350300/"
            target="_blank"
            rel="noopener"
            class="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white hover:scale-110 transition-all text-xs xl:text-sm"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Zhiqian-Zhou"
            target="_blank"
            rel="noopener"
            class="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all text-xs xl:text-sm"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div class="h-px bg-slate-200 w-full mb-4"></div>

      <!-- Navigation -->
      <nav class="flex flex-col space-y-1 mb-5">
        <h3
          class="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
        >
          Sections
        </h3>
        <a
          v-for="(item, idx) in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click="onNav"
          :style="{ '--nav-delay': `${idx * 35}ms` }"
          class="nav-link nav-anim px-3 py-2 text-[12px] xl:text-sm text-slate-600 hover:text-primary hover:bg-slate-100 hover:translate-x-1 rounded-lg border-l-2 border-transparent transition-all flex items-center gap-3 font-medium"
          :class="{ active: activeSection === item.id }"
        >
          <i :class="['fas', item.icon, 'w-4 text-center text-xs xl:text-sm']"></i>
          {{ item.label }}
        </a>
      </nav>

      <!-- Languages -->
      <div class="pt-4 border-t border-slate-200 mb-auto">
        <h3
          class="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
        >
          Languages
        </h3>
        <div class="space-y-1.5">
          <div
            v-for="lang in languages"
            :key="lang.name"
            class="flex justify-between items-center text-[11px] xl:text-xs"
          >
            <span class="text-slate-700 font-medium">{{ lang.name }}</span>
            <span
              class="py-1 px-2 rounded font-medium text-[10px] xl:text-[11px]"
              :class="
                lang.highlight
                  ? 'bg-primary/10 text-primary font-bold'
                  : 'bg-slate-100 text-slate-600'
              "
              >{{ lang.level }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
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
</style>
