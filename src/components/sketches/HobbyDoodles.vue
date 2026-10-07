<script setup>
import { hobbies } from '@/data/profile'
</script>

<template>
  <ul class="grid grid-cols-3 sm:grid-cols-5 gap-x-4 gap-y-6 text-ink-2">
    <li v-for="h in hobbies" :key="h.id" class="flex flex-col items-center text-center">
      <svg class="doodle h-14 w-14 text-muted" viewBox="0 0 64 64" aria-hidden="true">
        <!-- Fondue: caquelon on a stand, fork with a bread cube -->
        <template v-if="h.id === 'fondue'">
          <path d="M13 30 h38 c0 12 -8 19 -19 19 s-19 -7 -19 -19 z" />
          <path d="M51 33 h8" />
          <path d="M20 30 c0 4 3 4 3 0 M30 30 c0 5 3 5 3 0 M40 30 c0 3 2 3 2 0" opacity=".7" />
          <path d="M19 49 l-4 9 M45 49 l4 9 M11 58 h42" />
          <path d="M30 57 c-1 -3 2 -4 2 -7 c2 2 3 4 2 7" opacity=".7" />
          <path d="M36 28 L48 8" />
          <path d="M45 3 l7 2 l-2 7 l-7 -2 z" />
        </template>
        <!-- Dumplings (jiaozi) on a plate with chopsticks -->
        <template v-else-if="h.id === 'dumplings'">
          <ellipse cx="30" cy="46" rx="25" ry="6" />
          <path d="M9 42 c3 -13 19 -13 22 0 z" />
          <path d="M13 36 l2 -3 M18 33 v-3 M23 33 l1 -3 M27 36 l2 -3" opacity=".7" />
          <path d="M28 43 c3 -12 18 -12 21 0" />
          <path d="M32 37 l2 -3 M38 34 v-3 M44 37 l1 -3" opacity=".7" />
          <path d="M38 6 L60 30 M43 4 L62 25" />
        </template>
        <!-- Boxing glove -->
        <template v-else-if="h.id === 'boxing'">
          <path d="M20 26 c0 -11 8 -18 18 -18 c10 0 15 8 15 17 v9 c0 7 -5 11 -11 11 H28 c-5 0 -8 -3 -8 -8 z" />
          <path d="M20 31 c-5 0 -7 4 -6 7 c1 3 5 4 8 3" />
          <path d="M26 45 v11 h22 v-11" />
          <path d="M26 50 h22" opacity=".6" />
          <path d="M32 16 c4 -3 10 -3 13 1" opacity=".5" />
        </template>
        <!-- Dancing: music notes with motion lines -->
        <template v-else-if="h.id === 'dancing'">
          <path d="M22 46 V18 l22 -6 v28" />
          <path d="M22 24 l22 -6" opacity=".7" />
          <ellipse cx="17" cy="46" rx="5" ry="4" />
          <ellipse cx="39" cy="40" rx="5" ry="4" />
          <path d="M50 22 c4 2 6 6 5 10 M54 16 c6 4 8 10 6 16" opacity=".5" />
          <path d="M8 56 c8 -3 16 3 24 0 s16 3 24 0" opacity=".6" />
        </template>
        <!-- Travel: suitcase with a sticker -->
        <template v-else>
          <rect x="11" y="22" width="42" height="30" rx="4" />
          <path d="M24 22 v-6 h16 v6" />
          <path d="M21 22 v30 M43 22 v30" opacity=".7" />
          <circle cx="32" cy="36" r="5" opacity=".7" />
          <path d="M16 52 v4 M48 52 v4" />
        </template>
      </svg>
      <span class="mt-1 font-hand text-[1.25rem] leading-none text-ink-2">{{ h.name }}</span>
      <span class="font-mono text-[10.5px] text-muted mt-0.5">{{ h.note }}</span>
    </li>
  </ul>
</template>
