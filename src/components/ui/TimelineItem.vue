<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
  item: { type: Object, required: true },
  level: { type: Number, default: 3 }
})
</script>

<template>
  <li class="grid gap-1 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8 py-6 border-t border-rule">
    <p class="font-mono text-[12.5px] text-muted tabular-nums md:pt-1 whitespace-pre-line">{{ item.period }}</p>
    <div>
      <component :is="`h${level}`" class="text-h3">{{ item.title }}</component>
      <p class="text-[14px] text-accent">{{ item.org }}</p>
      <p v-if="item.note" class="mt-0.5 text-[13.5px] text-muted">{{ item.note }}</p>
      <ul v-if="item.bullets" class="mt-3 space-y-1.5 text-[15px] max-w-prose">
        <li v-for="b in item.bullets" :key="b" class="flex gap-2.5">
          <span class="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true"></span>
          {{ b }}
        </li>
      </ul>
      <div v-if="item.links" class="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        <a
          v-for="l in item.links"
          :key="l.href"
          :href="l.href"
          target="_blank"
          rel="noopener"
          class="link-arrow up"
          :aria-label="`${l.title || l.label} (opens in new tab)`"
        ><span aria-hidden="true">[{{ l.label }}]</span><ArrowUpRight :size="12" :stroke-width="1.5" /></a>
      </div>
    </div>
  </li>
</template>
