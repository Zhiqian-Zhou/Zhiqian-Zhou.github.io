<script setup>
import { projects } from '@/data/profile'
import PageSection from '@/components/ui/PageSection.vue'
import ProjectRow from '@/components/ui/ProjectRow.vue'
</script>

<template>
  <PageSection id="projects" title="Projects" tinted>
    <ProjectRow v-for="p in projects" :key="p.id" :project="p" />
  </PageSection>
</template>
