<script setup lang="ts">
import type { navbarCat } from '@/types'

const prop = defineProps<{
  navbarCat: navbarCat[]
}>()


</script>

<template>
  <div class="flex flex-row justify-between items-center my-10">
    <div class="">Featured categories</div>
    <div class="flex flex-row justify-center gap-10">
      <div v-for="t in prop.navbarCat" class="">
        {{ t.title }}
      </div>
    </div>
  </div>
</template>
