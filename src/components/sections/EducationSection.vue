<script setup>
import { education } from '@/data/profile'
import PageSection from '@/components/ui/PageSection.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
</script>

<template>
  <PageSection id="education" title="Education">
    <ul class="-mt-6">
      <TimelineItem v-for="e in education" :key="e.title" :item="e" class="first:border-t-0" />
    </ul>
  </PageSection>
</template>
