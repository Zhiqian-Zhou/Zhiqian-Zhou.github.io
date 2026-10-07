<script setup>
import { site } from '@/data/profile'
</script>

<template>
  <div class="bg-band px-5 md:px-12 xl:px-14 py-14">
    <figure class="max-w-content 2xl:mx-auto">
      <blockquote class="relative font-serif italic text-[1.6rem] md:text-[1.9rem] leading-[1.3] text-ink max-w-[26ch]">
        <span class="absolute -left-5 top-0 text-accent not-italic" aria-hidden="true">“</span>{{ site.quote }}<span aria-hidden="true">”</span>
      </blockquote>
      <span class="mt-5 block h-0.5 w-10 bg-accent" aria-hidden="true"></span>
    </figure>
  </div>
</template>
