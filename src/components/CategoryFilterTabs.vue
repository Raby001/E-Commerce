<!-- src/components/CategoryFilterTabs.vue -->
<script setup lang="ts">
import { useProductStore } from '@/stores/useProductStore'

const productStore = useProductStore()
</script>

<template>
  <div class="flex gap-2 flex-wrap text-sm font-medium text-center text-gray-500">
    <button
      v-for="cat in productStore.categories"
      :key="cat"
      @click="productStore.selectCategory(cat)"
      :class="[
        'px-4 py-2 rounded-full transition',
        productStore.currentFilterCategory === cat
          ? 'bg-green-600 text-white'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      ]"
    >
      {{ cat }}
    </button>
  </div>
</template>