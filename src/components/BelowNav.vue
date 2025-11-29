<!-- src/components/CategoryNav.vue -->
<template>
  <div class="shadow-sm border-b">
    <div class="">
      <div class="flex items-center justify-between h-14">

        <!-- Left: Browse All Categories Button -->
        <div class="flex items-center">
          <button
            class="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            <Menu class="w-5 h-5" />
            Browse All Categories
            <ChevronDown class="w-4 h-4 ml-2" />
          </button>

          <!-- Category Links -->
          <nav class="hidden md:flex items-center ml-10 space-x-8">
            <a href="#" class="flex items-center gap-1 text-red-600 font-medium">
              <Flame class="w-5 h-5" />
              Hot Deals
            </a>
            <a href="#" class="text-gray-700 hover:text-green-600 font-medium transition">Home</a>
            <a href="#" class="text-gray-700 hover:text-green-600 font-medium transition">Food</a>
            <a href="#" class="text-gray-700 hover:text-green-600 font-medium transition">Vegetables</a>
            <a href="#" class="text-gray-700 hover:text-green-600 font-medium transition">Drink</a>
            <a href="#" class="text-gray-700 hover:text-green-600 font-medium transition">Cookies</a>
            <a href="#" class="text-gray-700 hover:text-green-600 font-medium transition">Meat & Seafood</a>
            <a href="#" class="text-gray-700 hover:text-green-600 font-medium transition">Bakery</a>
          </nav>
        </div>

        <!-- Right: Support Info -->
        <div class="flex items-center gap-3 text-gray-600">
          <Phone class="w-6 h-6 text-green-600" />
          <div class="text-right">
            <div class="text-xl font-bold text-green-600">097 777 888</div>
            <div class="text-xs">24/7 Support Center</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu, ChevronDown, Flame, Phone } from 'lucide-vue-next'
</script>