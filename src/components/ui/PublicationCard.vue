<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
  pub: { type: Object, required: true },
  level: { type: Number, default: 3 }
})
</script>

<template>
  <article class="border-l-2 border-accent pl-5 py-1">
    <component :is="`h${level}`" class="text-[1.3rem] leading-snug">{{ pub.title }}</component>
    <p class="mt-2 text-[15px]">
      <template v-for="(a, i) in pub.authors" :key="a">
        <strong v-if="a === pub.me" class="font-semibold text-ink underline decoration-accent/40 underline-offset-4">{{ a }}</strong>
        <span v-else>{{ a }}</span><span v-if="i < pub.authors.length - 1">, </span>
      </template>
    </p>
    <p class="mt-1 font-serif italic text-[15px] text-ink-2">{{ pub.venue }}</p>
    <p v-if="pub.tldr" class="mt-3 max-w-prose text-[14.5px] leading-relaxed text-ink-2">
      <span class="font-mono text-[11.5px] uppercase tracking-wide text-muted">TL;DR</span> {{ pub.tldr }}
    </p>
    <p class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
      <span class="pill">{{ pub.type }}</span>
      <a
        v-for="l in pub.links"
        :key="l.href"
        :href="l.href"
        target="_blank"
        rel="noopener"
        class="link-arrow up"
        :aria-label="`${l.title} (opens in new tab)`"
      ><span aria-hidden="true">[{{ l.label }}]</span><ArrowUpRight :size="12" :stroke-width="1.5" /></a>
    </p>
    <details v-if="pub.bibtex" class="mt-2 group">
      <summary class="inline-block cursor-pointer list-none font-mono text-[12.5px] text-accent hover:underline [&::-webkit-details-marker]:hidden">[bibtex]</summary>
      <pre class="mt-2 max-w-full overflow-x-auto rounded-md border border-rule bg-pill/60 p-3 font-mono text-[12px] leading-relaxed text-ink-2"><code>{{ pub.bibtex }}</code></pre>
    </details>
  </article>
</template>
