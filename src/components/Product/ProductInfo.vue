<template>
  <div class="space-y-4">
    <!-- Stock Badge -->
    <div class="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-md">
      In Stock
    </div>

    <!-- Title -->
    <h1 class="text-2xl font-bold text-gray-800">
      Seeds of Change Organic Quinoa, Brown
    </h1>

    <!-- Rating -->
    <div class="flex items-center gap-1">
      <StarIcon v-for="i in 4" :key="i" :size="16" class="text-yellow-500 fill-current" />
      <StarIcon :size="16" class="text-gray-300 fill-current" />
      <span class="ml-1 text-sm text-gray-500">(4.0)</span>
    </div>

    <!-- Price -->
    <div class="flex items-center gap-4">
      <span class="text-3xl font-bold text-green-600">$38</span>
      <span class="text-gray-400 line-through">$42</span>
    </div>

    <!-- Description -->
    <p class="text-gray-600 text-sm">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
    </p>

    <!-- Vendor & SKU -->
    <div class="mt-6 text-sm text-gray-600 space-y-1">
      <div><strong>Vendor:</strong> NestMart</div>
      <div><strong>SKU:</strong> FWM15VKT</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star as StarIcon } from 'lucide-vue-next'
</script>