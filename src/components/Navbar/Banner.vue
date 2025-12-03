<script setup lang="ts">

</script>

<template>
  <div class="relative overflow-hidden rounded-2xl bg-amber-50 p-8 md:p-12">
    <!-- Red diagonal line -->
    <div class="absolute -left-4 top-0 h-0.5 w-full rotate-45 transform bg-red-600"></div>

    <!-- Background pattern (optional, based on your design) -->
    <div class="absolute inset-0 opacity-10">
      <img src="/images/Banner1.png" alt="" class="h-full w-full object-cover" />
    </div>

    <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
      <!-- Text Content -->
      <div class="flex-1 space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Don’t miss amazing grocery deals
        </h2>
        <p class="text-gray-600 text-lg">Sign up for the daily newsletter</p>

        <!-- Email Input + Subscribe Button -->
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="20" />
            <input
              type="email"
              placeholder="Your email address"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            class="px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors duration-200"
          >
            Subscribe
          </button>
        </div>
      </div>

      <!-- Image Section -->
      <div class="md:w-1/2 flex justify-center">
        <img
          src="/images/Banner1.png"
          alt="Fresh fruits in a mesh bag"
          class="max-w-full h-auto rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail as MailIcon } from 'lucide-vue-next';
</script>