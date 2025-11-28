<!-- components/Products.vue -->
<script setup lang="ts">
import type { product } from '@/types'
import Stars from './Stars.vue'
import { ref } from 'vue';

defineProps<{
  products: product[]
}>()

const quantity = ref(0);

// Functions — clean and simple
const addToCart = () => {
  if (quantity.value === 0) {
    quantity.value = 1
  }
}

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--
  } else {
    quantity.value = 0  // back to "Add +" button
  }
}

</script>


<template>

  <div class="flex flex-row gap-10">
    <div  v-for="pro in products" class="h-[400px] w-[300px] border-2 border-gray-200 hover:border-green-300 rounded-[10px]">
      <div class="">
        <div class="flex justify-center mt-10">
          <img class="h-[150px]" :src="pro.image" alt="">
        </div>
        
        <div class="flex flex-col gap-2 mx-5">
          <p class="text-[16px] text-gray-600 ">Hodo Foods</p>
          <div class="">
            <p class="text-[18px] font-bold">{{ pro.name }}</p>
          </div>
          <div class="">
            <Stars :rating="Number(pro.rating)"/>
          </div>
          <div class="text-[16px] text-gray-600">
            {{ pro.size }}
          </div>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-3 items-center">
              <p class="text-[24px] font-bold text-green-500  ">${{ pro.price }}</p>
              <p class="text-[16px] line-through ">${{ pro.finalPrice}}</p>
            </div>
            <!-- --------------------------- -->
            <div class="flex items-center justify-center">
                <!-- If NOT in cart → show "Add +" button -->
                <button
                  v-if="!quantity"
                  @click="addToCart"
                  class="flex items-center gap-2 px-5 py-2 bg-green-200 text-green-500 rounded-[5px] font-medium hover:bg-green-50 transition-all"
                >
                  Add
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>

                <!-- If IN cart → show counter with - 1 + -->
                <div
                  v-else
                  class="flex items-center border-2 border-green-500 text-[20px] font-medium  rounded-[10px] overflow-hidden"
                >
                    <input class="h-8 w-25 px-2.5 custom-number" type="number" min="0" value="1">
                </div>
            </div>


            <!-- -------------------- -->
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

<style scoped>
.custom-number::-webkit-inner-spin-button,
.custom-number::-webkit-outer-spin-button {
  opacity: 1;
  filter: hue-rotate(90deg) saturate(5); /* green arrows */
}
</style>