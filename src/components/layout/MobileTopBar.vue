<script setup>
import { Menu, X } from 'lucide-vue-next'
import { person } from '@/data/profile'

defineProps({ open: Boolean })
const emit = defineEmits(['toggle'])
</script>

<template>
  <header
    class="lg:hidden fixed top-0 inset-x-0 z-40 h-14 bg-paper/90 backdrop-blur border-b border-rule flex items-center justify-between px-5"
  >
    <a href="#about" class="font-serif text-xl text-ink" aria-label="Zhiqian Zhou — back to top">{{ person.monogram }}</a>
    <button
      type="button"
      class="p-2.5 -mr-2.5 text-ink"
      :aria-expanded="open"
      aria-controls="site-nav"
      aria-label="Toggle navigation"
      @click="emit('toggle')"
    >
      <X v-if="open" :size="20" :stroke-width="1.5" />
      <Menu v-else :size="20" :stroke-width="1.5" />
    </button>
  </header>
</template>
