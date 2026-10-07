<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import ProjectThumb from './ProjectThumb.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article
    class="project-row grid grid-cols-[80px_minmax(0,1fr)] md:grid-cols-[120px_minmax(0,1fr)_170px] gap-4 md:gap-6 py-6 border-t border-rule first:border-t-0 first:pt-0"
  >
    <ProjectThumb :id="project.id" class="mt-1 self-start" />

    <div class="min-w-0">
      <h3 class="text-h3"><span class="project-title">{{ project.title }}</span></h3>
      <p class="text-[13.5px] text-accent leading-snug">{{ project.subtitle }}</p>
      <p class="md:hidden mt-1 award">
        {{ project.year }}<template v-if="project.award || project.event"> · {{ project.award || project.event }}</template>
      </p>
      <p class="mt-2 text-[14.5px] leading-relaxed text-ink-2 max-w-prose">{{ project.description }}</p>
      <div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <ul class="flex flex-wrap gap-1.5">
          <li v-for="t in project.tags" :key="t" class="pill">{{ t }}</li>
        </ul>
        <a
          v-for="l in project.links"
          :key="l.href"
          :href="l.href"
          target="_blank"
          rel="noopener"
          class="link-arrow up"
          :aria-label="`${project.title} ${l.label} on GitHub (opens in new tab)`"
        ><span aria-hidden="true">[{{ l.label }}]</span><ArrowUpRight :size="12" :stroke-width="1.5" /></a>
      </div>
    </div>

    <div class="hidden md:flex flex-col border-l border-rule pl-5 pt-1">
      <span class="font-mono text-[13px] text-ink font-medium tabular-nums">{{ project.year }}</span>
      <span v-if="project.award" class="award mt-1">{{ project.award }}</span>
      <span v-else-if="project.event" class="mt-1 font-mono text-[11px] text-muted">{{ project.event }}</span>
    </div>
  </article>
</template>
