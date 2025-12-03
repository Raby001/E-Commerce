<script setup lang="ts">
import { User, ArrowLeftRight, Heart, ShoppingCart } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

// Optional: replace these with your real store/pinia values later
const cartCount = 3
const wishlistCount = 5

const router = useRouter()
const goTo = (path: any) => {
  router.push(path)
}
</script>

<template>
  <div class="flex items-center gap-6 md:gap-8">
    <!-- Account -->
    <button
      @click="goTo('/account')"
      class="group flex items-center gap-2 text-gray-700 hover:text-cyan-600 transition-colors"
    >
      <User class="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span class="hidden md:inline text-sm font-medium">Account</span>
    </button>

    <!-- Compare -->
    <button
      @click="goTo('/compare')"
      class="group flex items-center gap-2 text-gray-700 hover:text-cyan-600 transition-colors"
    >
      <ArrowLeftRight class="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span class="hidden md:inline text-sm">Compare</span>
    </button>

    <!-- Wishlist -->
    <button
      @click="goTo('/wishlist')"
      class="group relative flex items-center text-gray-700 hover:text-cyan-600 transition-colors"
    >
      <Heart class="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span class="hidden md:inline text-sm ml-2">Wishlist</span>

    </button>

    <!-- Cart -->
    <button
      @click="goTo('/cart')"
      class="group relative flex items-center text-gray-700 hover:text-cyan-600 transition-colors"
    >
      <ShoppingCart class="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span class="hidden md:inline text-sm ml-2">Cart</span>
    </button>
  </div>
</template>
