<script setup>
import { Download, Mail } from 'lucide-vue-next'
import { person, site } from '@/data/profile'
import { asset } from '@/composables/useAsset'

const year = new Date().getFullYear()
const mailto = `mailto:${person.email}?subject=${encodeURIComponent('Internship opportunity')}`
</script>

<template>
  <footer class="lg:ml-[180px] px-5 md:px-12 xl:px-14 py-16">
    <div class="max-w-content 2xl:mx-auto">
      <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" class="text-h2">Contact</h2>
      <p class="mt-3 max-w-prose text-[15px]">Email is the fastest way to reach me.</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a :href="mailto" class="btn-primary"><Mail :size="15" :stroke-width="1.5" /> {{ person.email }}</a>
        <a :href="asset(site.cv)" target="_blank" rel="noopener" class="btn-ghost">
          <Download :size="15" :stroke-width="1.5" /> CV (PDF)<span class="sr-only"> (opens in new tab)</span>
        </a>
      </div>
      </section>
      <p class="mt-12 border-t border-rule pt-6 font-mono text-[12px] text-muted">
        © {{ year }} {{ person.name }} · Last updated {{ site.lastUpdated }} · Lausanne &amp; project photos: Unsplash
      </p>
    </div>
  </footer>
</template>
