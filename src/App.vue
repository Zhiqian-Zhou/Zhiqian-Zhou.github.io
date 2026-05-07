<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import AppSidebar from './components/AppSidebar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import PublicationsSection from './components/PublicationsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import AwardsSection from './components/AwardsSection.vue'
import LeadershipSection from './components/LeadershipSection.vue'
import HobbiesSection from './components/HobbiesSection.vue'
import AppFooter from './components/AppFooter.vue'

const activeSection = ref('home')
const sidebarOpen = ref(false)
const scrollPercent = ref(0)
const showScrollTop = ref(false)
const isDesktop = ref(false)

const checkDesktop = () => {
  isDesktop.value = window.innerWidth >= 1024
  if (isDesktop.value) sidebarOpen.value = false
}

const handleScroll = () => {
  const scrollY = window.pageYOffset
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight
  scrollPercent.value = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
  showScrollTop.value = scrollY > 600

  let current = ''
  document.querySelectorAll('section[id]').forEach((section) => {
    const top = section.offsetTop - 150
    if (scrollY > top && scrollY <= top + section.offsetHeight) {
      current = section.getAttribute('id')
    }
  })
  if (current) activeSection.value = current
}

const handleKey = (e) => {
  if (e.key === 'Escape') sidebarOpen.value = false
}

const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value)
const closeSidebar = () => (sidebarOpen.value = false)
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

watch(sidebarOpen, (open) => {
  document.body.classList.toggle('no-scroll', open && !isDesktop.value)
})

const fabIconColor = computed(() =>
  sidebarOpen.value ? 'text-white' : 'text-white'
)

onMounted(() => {
  checkDesktop()
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', checkDesktop)
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkDesktop)
  window.removeEventListener('keydown', handleKey)
  document.body.classList.remove('no-scroll')
})
</script>

<template>
  <div>
    <!-- Scroll progress bar -->
    <div
      class="scroll-progress"
      :style="{ width: scrollPercent + '%' }"
      aria-hidden="true"
    ></div>

    <!-- Ambient background blobs -->
    <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        class="absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"
      ></div>
      <div
        class="absolute bottom-0 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/2 left-10 w-64 h-64 bg-emerald-300/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"
        style="animation-delay: 4s"
      ></div>
    </div>

    <!-- Mobile backdrop -->
    <Transition name="fade">
      <div
        v-if="sidebarOpen"
        @click="closeSidebar"
        class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 lg:hidden"
        aria-hidden="true"
      ></div>
    </Transition>

    <!-- Sidebar: always rendered. On desktop fixed-visible; on mobile slides in. -->
    <AppSidebar
      :active-section="activeSection"
      :open="sidebarOpen"
      @navigate="closeSidebar"
    />

    <!-- Floating menu button (mobile only) -->
    <button
      type="button"
      @click="toggleSidebar"
      class="fab-pop fab-ring lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      :aria-expanded="sidebarOpen"
      aria-label="Toggle navigation menu"
    >
      <span class="hamburger" :class="{ open: sidebarOpen }" :aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <!-- Scroll-to-top FAB (all viewports, appears past 600px scroll) -->
    <Transition name="pop">
      <button
        v-if="showScrollTop"
        type="button"
        @click="scrollToTop"
        class="fixed bottom-5 right-5 lg:bottom-6 lg:right-6 z-40 w-12 h-12 rounded-full bg-white text-primary border border-slate-200 shadow-lg shadow-slate-300/40 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-0.5"
        :class="['lg:flex', sidebarOpen ? 'hidden' : 'hidden lg:flex']"
        aria-label="Scroll back to top"
      >
        <i class="fas fa-arrow-up text-sm"></i>
      </button>
    </Transition>

    <!-- Main scroll area. At 2xl, equal margins center the content on the viewport.
         Note: no `w-full` — that would conflict with mr-* and overflow the viewport. -->
    <main class="lg:ml-44 xl:ml-56 2xl:ml-64 2xl:mr-64 min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <SkillsSection />
      <AwardsSection />
      <LeadershipSection />
      <HobbiesSection />
      <AppFooter />
    </main>
  </div>
</template>
