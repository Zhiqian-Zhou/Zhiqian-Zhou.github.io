<script setup>
import { Github, Linkedin, Mail, Link } from 'lucide-vue-next'
import { links } from '@/data/profile'

const props = defineProps({
  variant: { type: String, default: 'icons' }, // 'icons' | 'labeled'
  only: { type: Array, default: null }
})

const icons = { github: Github, linkedin: Linkedin, email: Mail, website: Link }
const items = props.only ? links.filter((l) => props.only.includes(l.id)) : links
const external = (href) => href.startsWith('http')
</script>

<template>
  <ul v-if="variant === 'icons'" class="flex items-center gap-3.5">
    <li v-for="l in items" :key="l.id">
      <a
        :href="l.href"
        :aria-label="external(l.href) ? `${l.label} (opens in new tab)` : l.label"
        :title="l.label"
        :target="external(l.href) ? '_blank' : undefined"
        :rel="external(l.href) ? 'noopener' : undefined"
        class="text-ink-2 hover:text-accent transition-colors"
      >
        <component :is="icons[l.id]" :size="16" :stroke-width="1.5" />
      </a>
    </li>
  </ul>
  <ul v-else class="flex flex-wrap items-center gap-x-6 gap-y-2">
    <li v-for="l in items" :key="l.id">
      <a
        :href="l.href"
        :target="external(l.href) ? '_blank' : undefined"
        :rel="external(l.href) ? 'noopener' : undefined"
        class="inline-flex items-center gap-2 font-mono text-[12.5px] text-ink hover:text-accent transition-colors"
      >
        <component :is="icons[l.id]" :size="15" :stroke-width="1.5" />
        {{ l.label }}
      </a>
    </li>
  </ul>
</template>
