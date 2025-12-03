<template>
  <div class="relative overflow-hidden rounded-lg h-60 bg-green-100 py-6 px-4 sm:px-8">
    <!-- Decorative Background Elements (optional) -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <!-- You can replace these with actual SVGs or remove if not needed -->
      <div class="absolute top-2 right-10 text-green-600">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2C9.24 2 7 4.24 7 7c0 1.23.45 2.35 1.18 3.22L12 14l3.82-3.78C16.55 9.35 17 8.23 17 7c0-2.76-2.24-5-5-5z"/>
        </svg>
      </div>
      <div class="absolute bottom-4 left-12 text-green-600">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2C9.24 2 7 4.24 7 7c0 1.23.45 2.35 1.18 3.22L12 14l3.82-3.78C16.55 9.35 17 8.23 17 7c0-2.76-2.24-5-5-5z"/>
        </svg>
      </div>
      <div class="absolute top-4 left-20 text-green-600">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2C9.24 2 7 4.24 7 7c0 1.23.45 2.35 1.18 3.22L12 14l3.82-3.78C16.55 9.35 17 8.23 17 7c0-2.76-2.24-5-5-5z"/>
        </svg>
      </div>
      <div class="absolute bottom-2 right-20 text-green-600">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2C9.24 2 7 4.24 7 7c0 1.23.45 2.35 1.18 3.22L12 14l3.82-3.78C16.55 9.35 17 8.23 17 7c0-2.76-2.24-5-5-5z"/>
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col justify-start  items-center  sm:flex-row  sm:items-center gap-2">
      <h1 class="text-2xl font-bold text-gray-800">Coke & Milk</h1>
      <nav class="text-sm text-gray-600 flex items-center gap-2">
        <router-link to="/" class="hover:text-green-600">Home</router-link>
        <span>›</span>
        <router-link to="/categories" class="hover:text-green-600">Categories</router-link>
        <span>›</span>
        <span class="font-medium">Coke & Milk</span>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed unless you want dynamic data
</script>