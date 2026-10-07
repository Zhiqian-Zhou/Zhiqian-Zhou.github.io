<script setup>
import { awards } from '@/data/profile'
import PageSection from '@/components/ui/PageSection.vue'
</script>

<template>
  <PageSection id="awards" title="Awards & Honors" tinted>
    <ul class="divide-y divide-rule border-y border-rule">
      <li v-for="a in awards" :key="a.label" class="grid gap-1 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8 py-3.5">
        <span class="font-mono text-[12.5px] text-muted tabular-nums md:pt-0.5">{{ a.year }}</span>
        <span>
          <span class="text-ink text-[15px]" :lang="a.lang">{{ a.label }}</span>
          <span v-if="a.detail" class="block text-[13.5px] text-muted">{{ a.detail }}</span>
        </span>
      </li>
    </ul>
  </PageSection>
</template>
