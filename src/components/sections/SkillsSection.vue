<script setup>
import { hobbiesIntro, languages, leadership, skills } from '@/data/profile'
import PageSection from '@/components/ui/PageSection.vue'
import HobbyDoodles from '@/components/sketches/HobbyDoodles.vue'
</script>

<template>
  <PageSection id="skills" title="Skills">
    <h3 class="eyebrow">Technical &amp; languages</h3>
    <dl class="mt-4 divide-y divide-rule border-y border-rule">
      <div v-for="g in skills" :key="g.title" class="grid gap-1 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8 py-3">
        <dt class="font-mono text-[12.5px] text-muted md:pt-0.5">{{ g.title }}</dt>
        <dd class="text-[15px] text-ink">
          <template v-for="(it, i) in g.items" :key="it">{{ it }}<span v-if="i < g.items.length - 1" aria-hidden="true"> · </span><span v-if="i < g.items.length - 1" class="sr-only">, </span></template>
        </dd>
      </div>
      <div class="grid gap-1 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8 py-3">
        <dt class="font-mono text-[12.5px] text-muted md:pt-0.5">Languages</dt>
        <dd class="text-[15px] text-ink">
          <template v-for="(l, i) in languages" :key="l.name">
            {{ l.name }} <span class="text-muted">({{ l.level }})</span><span v-if="i < languages.length - 1" aria-hidden="true"> · </span><span v-if="i < languages.length - 1" class="sr-only">, </span>
          </template>
        </dd>
      </div>
    </dl>

    <div class="mt-16">
      <h3 class="eyebrow">Beyond the lab</h3>
      <div class="mt-4 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
        <div>
          <h4 class="font-sans text-ink font-medium text-[15px]">{{ leadership.role }}</h4>
          <p class="text-[14px] text-accent">
            {{ leadership.org }} · <span class="font-mono text-[12px] text-muted">{{ leadership.period }}</span>
          </p>
          <p class="mt-2 max-w-prose text-[14.5px]">{{ leadership.text }}</p>
        </div>
        <div>
          <p class="text-[14.5px]">{{ hobbiesIntro }}</p>
          <HobbyDoodles class="mt-5" />
        </div>
      </div>
    </div>
  </PageSection>
</template>
