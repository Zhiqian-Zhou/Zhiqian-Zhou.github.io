<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  tinted: Boolean
})
</script>

<template>
  <section :id="id" class="px-5 md:px-12 xl:px-14 py-16 md:py-20 border-t border-rule" :class="{ 'bg-white/60': tinted }">
    <div class="max-w-content 2xl:mx-auto">
      <h2 class="text-h2">{{ title }}</h2>
      <div class="mt-8">
        <slot />
      </div>
    </div>
  </section>
</template>
