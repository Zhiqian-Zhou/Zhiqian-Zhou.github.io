<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import AppSidebar from './components/layout/AppSidebar.vue'
import MobileTopBar from './components/layout/MobileTopBar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import QuoteBand from './components/layout/QuoteBand.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ResearchSection from './components/sections/ResearchSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import AwardsSection from './components/sections/AwardsSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import { useScrollSpy } from './composables/useScrollSpy'

const activeId = useScrollSpy(['about', 'research', 'projects', 'education', 'awards', 'skills', 'contact'])
const drawerOpen = ref(false)

const close = () => (drawerOpen.value = false)
const onKey = (e) => e.key === 'Escape' && close()
const onResize = () => window.innerWidth >= 1024 && close()

watch(drawerOpen, async (open) => {
  document.body.classList.toggle('no-scroll', open)
  if (window.innerWidth >= 1024) return
  await nextTick()
  // Move focus into the drawer when it opens and back to the toggle when it closes.
  const target = open
    ? document.querySelector('#site-nav nav a')
    : document.querySelector('[aria-controls="site-nav"]')
  target?.focus()
})

onMounted(() => {
  window.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
  document.body.classList.remove('no-scroll')
})
</script>

<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] btn-primary">Skip to content</a>

  <MobileTopBar :open="drawerOpen" @toggle="drawerOpen = !drawerOpen" />

  <Transition name="fade">
    <div v-if="drawerOpen" class="lg:hidden fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px]" aria-hidden="true" @click="close"></div>
  </Transition>

  <AppSidebar :active-id="activeId" :open="drawerOpen" @navigate="close" />

  <main id="main" class="lg:ml-[180px] overflow-x-clip">
    <AboutSection />
    <ResearchSection />
    <ProjectsSection />
    <EducationSection />
    <AwardsSection />
    <SkillsSection />
    <QuoteBand />
  </main>
  <AppFooter />
</template>
