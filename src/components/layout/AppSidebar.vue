<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { nav, person, site } from '@/data/profile'
import { asset } from '@/composables/useAsset'
import SocialLinks from '@/components/ui/SocialLinks.vue'

defineProps({
  activeId: String,
  open: Boolean
})
const emit = defineEmits(['navigate'])

const hrefFor = (item) => (item.external ? asset(site.cv) : `#${item.id}`)
</script>

<template>
  <div
    id="site-nav"
    class="fixed inset-y-0 left-0 z-50 w-[260px] lg:w-[180px] bg-paper border-r border-rule overflow-x-hidden overflow-y-auto overscroll-contain duration-300 ease-out lg:translate-x-0 lg:visible"
    :class="open ? 'translate-x-0 visible transition-transform' : '-translate-x-full invisible transition-[transform,visibility]'"
  >
    <div class="relative min-h-full flex flex-col px-7 pt-8 [@media(max-height:600px)]:pb-8">
      <a href="#about" aria-label="Zhiqian Zhou — back to top" class="font-serif text-[1.75rem] leading-none text-ink tracking-tight" @click="emit('navigate')">
        {{ person.monogram }}
      </a>

      <nav class="mt-14 [@media(max-height:720px)]:mt-8" aria-label="Primary">
        <ul class="flex flex-col gap-1 lg:gap-1.5 -ml-[15px]">
          <li v-for="item in nav" :key="item.id">
            <a
              :href="hrefFor(item)"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener' : undefined"
              class="nav-item"
              :aria-current="activeId === item.id ? 'location' : undefined"
              :aria-label="item.external ? 'CV (PDF, opens in new tab)' : undefined"
              @click="emit('navigate')"
            >
              {{ item.label }}
              <ArrowUpRight v-if="item.external" :size="12" :stroke-width="1.5" class="-ml-1 opacity-60" />
            </a>
          </li>
        </ul>
      </nav>

      <div class="mt-auto mb-[calc(min(38vh,340px)+8px)] [@media(max-height:720px)]:mb-[calc(26vh+8px)] [@media(max-height:600px)]:hidden">
        <span class="block h-px w-6 bg-ink/30 mb-5" aria-hidden="true"></span>
        <SocialLinks />
      </div>

      <div class="sidebar-alps" aria-hidden="true"></div>
    </div>
  </div>
</template>
