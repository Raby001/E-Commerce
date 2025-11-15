<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/useProductStore'

const products = useProductStore()

onMounted(async () => {
  products.fetchProducts()
})

</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
    <div
      v-for="p in products.products"
      :key="p.name"
      class="group bg-white shadow-sm hover:shadow-md transition rounded-xl p-4 cursor-pointer"
    >
      <!-- IMAGE -->
      <div class="relative w-full h-40 flex items-center justify-center">
        <img
          :src="p.image"
          :alt="p.name"
          class="max-h-full object-contain transition-transform group-hover:scale-105"
        />

        <!-- Promotion Badge -->
        <span
          v-if="p.promtionAsPerentage"
          class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
        >
          -{{ p.promtionAsPerentage }}%
        </span>
      </div>

      <!-- CONTENT -->
      <div class="mt-4">
        <h3 class="font-semibold text-gray-900 text-lg truncate">
          {{ p.name }}
        </h3>

        <p class="text-gray-500 text-sm mt-1">Size: {{ p.size }}</p>

        <div class="flex items-center justify-between mt-3">
          <p class="text-green-600 font-bold text-lg">
            ${{ p.price.toFixed(2) }}
          </p>

          <button
            class="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded-md transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
