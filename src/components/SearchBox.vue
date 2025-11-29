<script setup lang="ts">
import { ref } from 'vue'
import { Search, ChevronDown } from 'lucide-vue-next'

const searchQuery = ref('')
const selectedCategory = ref('')

const emit = defineEmits(['search'])

const emitSearch = () => {
  emit('search', {
    query: searchQuery.value.trim(),
    category: selectedCategory.value || 'all'
  })
}
</script>


<template>
  <div class="flex items-center w-full max-w-3xl mx-auto border border-green-300  rounded-lg overflow-hidden shadow-sm hover:shadow-md focus-within:ring-2">
    <!-- Category Dropdown -->
    <div class="relative">
      <select
        v-model="selectedCategory"
        @change="emitSearch"
        class="appearance-none bg-transparent pl-5 pr-12 py-4 text-gray-700 font-medium focus:outline-none cursor-pointer text-base"
      >
        <option value="" selected>All Categories</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="dairy">Dairy & Eggs</option>
        <option value="beverages">Beverages</option>
        <option value="bakery">Bakery</option>
        <option value="snacks">Snacks</option>
        <option value="meat">Meat & Seafood</option>
      </select>

      <!-- Lucide Chevron Down -->
      <ChevronDown
        class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
      />
    </div>

    <!-- Divider -->
    <div class="w-px h-10 bg-green-200  mx-2"></div>

    <!-- Search Input -->
    <input
      type="text"
      v-model="searchQuery"
      @keyup.enter="emitSearch"
      placeholder="Search for items..."
      class="flex-1 px-4 py-4 text-gray-700 placeholder-gray-400 focus:outline-none text-base"
    />

    <!-- Search Button -->
    <button
      @click="emitSearch"
      class="bg-green-400  hover:bg-cyan-600 px-7 py-4 text-white transition-colors"
    >
      <!-- Lucide Search Icon -->
      <Search class="w-6 h-6" />
    </button>
  </div>
</template>
