<script lang="ts" setup>
import { useCategoryStore } from '@/stores/useCategoryStore';
import { Menu } from 'lucide-vue-next';

const cat = useCategoryStore()
</script>

<template>
  <!-- <div class="flex flex-row text-[rgba(37,61,78,1)] justify-between mb-10 items-center px-10 md:px-0">
    <div class="text-[24px] font-bold md:text-[32px]">Featured Categories</div>
    <div class="hidden md:block">
      <ul class="flex flex-row justify-center gap-10">
        <li 
        v-for="c in cat.categoriesNavbar" 
        @click="cat.selectedCategories(c)" 
        :class="cat.activeCategoriesNavbar === c ? 'font-bold': 'font-normal'" 
        class="cursor-pointer transition-colors duration-300"
        >{{ c }}</li>
      </ul>
    </div>
    <div class="block md:hidden">
      <Menu />
    </div>
  </div> -->
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
