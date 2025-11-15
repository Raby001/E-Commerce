<script setup lang="ts">
import Buttons from './Buttons.vue'
import { usePromotionStore } from '@/stores/usePromotionStore';

const pro = usePromotionStore();
</script>

<template>
  <div class="flex gap-4 mt-6 flex-col md:flex-row flex-wrap justify-center items-center">
    <div
      v-for="p in pro.promotions"
      :style="{ backgroundColor: p.color}"
      class="relative w-[350px] h-[230px] sm:w-[490px] sm:h-[300px] rounded-[10px] flex flex-row items-center justify-between"
    >
      <div
        class="absolute left-10 z-2 w-[50%] h-[55%] flex flex-col items-between justify-center text-[16px] sm:text-[24px] font-bold"
      >
        <div class="h-full flex flex-col items-start justify-between">
          <h3>{{ p.title }}</h3>
          <Buttons :background="p.buttonColor" :title="p.title" />
        </div>
      </div>

      <div class="z-1 h-2/3 absolute right-0 top-1/6">
        <img class="rounded-[10px] max-h-full" :src="p.image" alt="" />
      </div>
    </div>
  </div>
</template>
