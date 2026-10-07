<script setup>
import { publications, researchExperience } from '@/data/profile'
import PageSection from '@/components/ui/PageSection.vue'
import PublicationCard from '@/components/ui/PublicationCard.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
</script>

<template>
  <PageSection id="research" title="Research">
    <h3 class="eyebrow">Publications</h3>
    <div class="mt-4 space-y-6">
      <PublicationCard v-for="p in publications" :key="p.id" :pub="p" :level="4" />
    </div>
    <h3 class="mt-14 eyebrow">Research experience</h3>
    <ul class="mt-3">
      <TimelineItem v-for="r in researchExperience" :key="r.title" :item="r" :level="4" />
    </ul>
  </PageSection>
</template>
