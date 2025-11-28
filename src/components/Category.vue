<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/useProductStore'
import { useContentStore } from '@/stores/useContentStore'

const productStore = useProductStore()
const contentStore = useContentStore()

// Compute which category card(s) to show
const filteredCategories = computed(() => {
  if (productStore.currentFilterCategory === 'All') {
    return contentStore.featuredCategories
  }
  return contentStore.featuredCategories.filter(
    cat => cat.name === productStore.currentFilterCategory
  )
})
</script>

<template>
  <div class="flex gap-4 flex-wrap justify-center">
    <div
      v-for="c in filteredCategories"
      class="flex flex-col items-center rounded-[10px] w-[136px] h-[177px]"
      :style="{ backgroundColor: c.color }"
    >
      <img :src="c.image" alt="" class="w-[120px] h-[120px] object-contain" />
      <div class="font-semibold text-[16px]">{{ c.name }}</div>
      <div class="text-[12px] text-gray-400">{{ c.productCount }} items</div>
    </div>
  </div>

  <!-- Optional: nice message when only one category is shown -->
  <div
    v-if="productStore.currentFilterCategory !== 'All' && filteredCategories.length === 0"
    class="text-center py-12 text-gray-500 col-span-full"
  >
    No featured category for "{{ productStore.currentFilterCategory }}"
  </div>
</template>