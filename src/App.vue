<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="font-Quicksand min-h-screen bg-gray-50 py-10">
    <div class="max-w-[1550px] mx-auto px-4">

      <Navbar/>
      <router-view/>


    </div>
  </div>
</template>