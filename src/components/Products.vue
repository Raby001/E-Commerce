<script setup lang="ts">
import type { product } from '@/types'
import Stars from './Stars.vue'
import { reactive } from 'vue';

defineProps<{
  products: product[]
}>()

// Track quantity for each product separately
const quantities = reactive<{ [key: number]: number }>({});

// Functions
const addToCart = (index: number) => {
  quantities[index] = 1
}

const increment = (index: number) => {
  quantities[index] = (quantities[index] || 0) + 1
}


const decrement = (index: number) => {
  const current = quantities[index] ?? 0 // safely handle undefined
  if (current > 1) {
    quantities[index] = current - 1
  } else if (current === 1) {
    delete quantities[index] // go back to "Add" button
  }
}

</script>

<template>
  <div class="flex flex-row gap-10 flex-wrap">
    <div v-for="(pro, index) in products" :key="index" class="h-[400px] w-[300px] border-2 border-gray-200 hover:border-green-300 rounded-[10px]">
      <div class="flex justify-center mt-10">
        <img class="h-[150px]" :src="pro.image" alt="">
      </div>
      
      <div class="flex flex-col gap-2 mx-5">
        <p class="text-[16px] text-gray-600 ">Hodo Foods</p>
        <p class="text-[18px] font-bold">{{ pro.name }}</p>
        <Stars :rating="Number(pro.rating)"/>
        <div class="text-[16px] text-gray-600">{{ pro.size }}</div>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row gap-3 items-center">
            <p class="text-[24px] font-bold text-green-500">${{ pro.price }}</p>
            <p class="text-[16px] line-through">${{ pro.finalPrice }}</p>
          </div>

          <!-- Add / Counter -->
          <div class="flex items-center justify-center ">
            <button
              v-if="!quantities[index]"
              @click="addToCart(index)"
              class="cursor-pointer flex items-center gap-2 px-5 py-2 bg-green-200 text-green-500 rounded-[5px] font-medium hover:bg-green-50 transition-all"
            >
              Add
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>

            <div v-else class="flex items-center border-2 border-green-500 text-[20px] font-medium rounded-[10px] overflow-hidden">
              <button @click="decrement(index)" class="px-3 bg-green-100 text-green-500 cursor-pointer">-</button>
              <input 
                class="h-8 w-10 text-center custom-number " 
                type="number" 
                :value="quantities[index]" 
                readonly
              >
              <button @click="increment(index)" class="px-3 bg-green-100 text-green-500 cursor-pointer">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div v-if="products.length === 0" class="text-center py-16 text-gray-500">
    <p class="text-xl">No products found in this category.</p>
    <p class="mt-2">Try selecting "All" or another category.</p>
  </div>
</template>
