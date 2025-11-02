<script lang="ts" setup>
import type { category } from '@/types'

const cat = defineProps<{
  categories: category[]
}>()
</script>

<template>
  <div class="flex gap-4 flex-wrap justify-center">
    <div
      v-for="c in cat.categories"
      class="flex flex-col items-center rounded-[10px] w-[136px] h-[177px]"
      :style="{ backgroundColor: c.color }"
    >
      <img :src="c.image" alt="" class="w-[120px] h-[120px] object-contain" />
      <div class="font-semibold text-[16px]">{{ c.name }}</div>
      <div class="text-[12px] text-gray-400">{{ c.productCount }} items</div>
    </div>
  </div>
</template>
