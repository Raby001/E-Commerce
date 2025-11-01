<script setup lang="ts">
import type { promotion } from '@/types'
import Buttons from './Buttons.vue'

const pro = defineProps<{
  promotion: promotion[]
}>()
</script>

<template>
  <div class="flex gap-4 mt-6 flex-row flex-wrap justify-center">
    <div
      v-for="p in pro.promotion"
      :style="{ backgroundColor: p.background }"
      class="relative w-[350px] h-[230px] sm:w-[490px] sm:h-[300px] rounded-[10px] flex flex-row items-center justify-between"
    >
      <div
        class="absolute left-10 z-2 w-[50%] h-[55%] flex flex-col items-between justify-center text-[16px] sm:text-[24px] font-bold"
      >
        <div class="h-full flex flex-col items-start justify-between">
          <h3>{{ p.title }}</h3>
          <Buttons :text="p.buttonText" :background="p.buttonColor" :title="p.title" />
        </div>
      </div>

      <div class="z-1 h-2/3 absolute right-0 top-1/6">
        <img class="rounded-[10px] max-h-full" :src="p.image" alt="" />
      </div>
    </div>
  </div>
</template>
