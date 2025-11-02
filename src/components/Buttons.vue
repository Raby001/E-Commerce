<script setup lang="ts">
const prop = defineProps<{
  background: string
  title: string
}>()

function shopNow() {
  alert('Let shop ' + prop.title)
}
</script>

<template>
  <button
    :style="{ backgroundColor: prop.background }"
    class="rounded-[3px] flex items-center justify-center px-3 sm:px-[25px] py-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:text-gray-300 cursor-pointer"
  >
    <div @click="shopNow" class="flex flex-row items-center gap-2">
      <p class="font-medium text-[14px] text-white">Shop Now</p>
      <img class="w-5" src="/images/icon1.png" alt="" />
    </div>
  </button>
</template>
