<template>
  <div class="flex items-center gap-3 my-6">
    <!-- Quantity Selector -->
    <div class="flex items-center border rounded-md overflow-hidden">
      <button @click="decrement" class="px-3 py-2 bg-gray-100 hover:bg-gray-200">-</button>
      <input v-model.number="quantity" type="number" min="1" class="w-12 text-center border-x focus:outline-none" />
      <button @click="increment" class="px-3 py-2 bg-gray-100 hover:bg-gray-200">+</button>
    </div>

    <!-- Add to Cart -->
    <button class="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition">
      <ShoppingCartIcon :size="18" class="inline mr-2" /> Add To Cart
    </button>

    <!-- Wishlist -->
    <button class="p-2 border rounded-md hover:bg-gray-100">
      <HeartIcon :size="20" />
    </button>

    <!-- Share -->
    <button class="p-2 border rounded-md hover:bg-gray-100">
      <Share2Icon :size="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShoppingCart as ShoppingCartIcon, Heart as HeartIcon, Share2 as Share2Icon } from 'lucide-vue-next'

const quantity = ref(1)

const increment = () => quantity.value++
const decrement = () => {
  if (quantity.value > 1) quantity.value--
}
</script>