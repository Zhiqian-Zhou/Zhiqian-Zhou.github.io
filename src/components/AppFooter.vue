<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="py-8 px-6 lg:px-16 border-t border-slate-200 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-4"
  >
    <p class="text-slate-500 text-sm">
      &copy; {{ year }} Zhiqian Zhou. All rights reserved.
    </p>
    <p class="text-slate-400 text-xs">Built with precision &amp; AI.</p>
  </footer>
</template>
