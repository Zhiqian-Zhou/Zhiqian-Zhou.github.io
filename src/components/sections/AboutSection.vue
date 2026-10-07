<script setup>
import { Download, Mail, MapPin } from 'lucide-vue-next'
import { person, site } from '@/data/profile'
import { asset } from '@/composables/useAsset'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import HandUnderline from '@/components/sketches/HandUnderline.vue'

const portrait = (w) => asset(`img/portrait-${w}.webp`)
</script>

<template>
  <section id="about" class="px-5 md:px-12 xl:px-14 pt-20 md:pt-24 lg:pt-12 pb-16">
    <div class="max-w-content 2xl:mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_230px] lg:grid-cols-[minmax(0,1fr)_330px] xl:grid-cols-[minmax(0,1fr)_350px] gap-10 md:gap-12 items-start">
      <div class="min-w-0">
        <p class="eyebrow rise">{{ person.greeting }}</p>
        <h1 class="mt-3 text-name font-normal -ml-[0.04em] rise" style="animation-delay: 80ms">{{ person.name }}</h1>
        <p class="mt-5 font-serif text-[1.25rem] md:text-[1.375rem] text-ink-2 rise" style="animation-delay: 160ms">
          <template v-for="(r, i) in person.roles" :key="r">
            <span class="whitespace-nowrap">{{ r }}</span><span v-if="i < person.roles.length - 1" class="text-faint" aria-hidden="true"> · </span><span v-if="i < person.roles.length - 1" class="sr-only">, </span>
          </template>
        </p>

        <ul class="mt-6 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[12.5px] text-ink-2">
          <li class="inline-flex items-center gap-2"><MapPin :size="15" :stroke-width="1.5" /> {{ person.location }}</li>
          <li>
            <a :href="`mailto:${person.email}`" class="inline-flex items-center gap-2 underline decoration-ink/30 underline-offset-4 hover:text-accent">
              <Mail :size="15" :stroke-width="1.5" /> {{ person.email }}
            </a>
          </li>
        </ul>
        <!-- Sidebar carries these on desktop -->
        <div class="mt-4 lg:hidden">
          <SocialLinks variant="labeled" :only="['github', 'linkedin']" />
        </div>

        <div class="mt-8 space-y-3 max-w-[58ch] text-[15.5px] leading-relaxed">
          <p v-for="p in person.bio" :key="p">{{ p }}</p>
        </div>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center gap-2 min-h-8 py-1 px-3 rounded-full border border-rule-strong font-mono text-[12px] leading-snug text-ink-2">
            <span class="relative flex h-2 w-2" aria-hidden="true">
              <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-500/50 motion-safe:animate-ping"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </span>
            {{ site.availability }}
          </span>
          <a :href="asset(site.cv)" target="_blank" rel="noopener" class="btn-primary h-8">
            <Download :size="14" :stroke-width="1.5" /> CV (PDF)<span class="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>

      <div class="relative mx-auto md:mx-0 w-[min(200px,52vw)] md:w-full lg:w-[240px] xl:w-[260px] order-first md:order-none pt-2">
        <figure class="portrait">
          <img
            :src="portrait(560)"
            :srcset="`${portrait(400)} 400w, ${portrait(560)} 560w, ${portrait(778)} 778w`"
            sizes="(min-width: 1280px) 260px, (min-width: 768px) 240px, 68vw"
            width="300"
            height="375"
            alt="Portrait of Zhiqian Zhou"
            fetchpriority="high"
          />
        </figure>
        <div class="hidden lg:block absolute left-[calc(100%+22px)] top-[52%] rotate-[-10deg]" aria-hidden="true">
          <p class="font-hand text-[1.35rem] leading-[1.05] text-ink-2/80">
            <span v-for="w in person.handNote" :key="w" class="block">{{ w }}</span>
          </p>
          <HandUnderline class="mt-1 w-[72px] text-muted" />
        </div>
      </div>
    </div>
  </section>
</template>
