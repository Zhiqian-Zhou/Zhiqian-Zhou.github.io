<script setup>
import { asset } from '@/composables/useAsset'

const props = defineProps({
  id: { type: String, required: true },
  sizes: { type: String, default: '(min-width: 768px) 120px, 80px' },
  wide: Boolean
})
const src = (w) => asset(`img/projects/${props.id}-${w}.webp`)
</script>

<template>
  <div class="thumb-wrap">
    <img
      :src="src(240)"
      :srcset="`${src(240)} 240w, ${src(360)} 360w, ${src(720)} 720w`"
      :sizes="sizes"
      width="120"
      height="88"
      loading="lazy"
      decoding="async"
      alt=""
      :class="['thumb block w-full h-auto', { '!aspect-[2/1]': wide }]"
    />
  </div>
</template>
