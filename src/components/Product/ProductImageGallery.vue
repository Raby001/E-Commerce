<template>
  <div class="mb-6">
    <!-- Main Image -->
    <div class="relative bg-white rounded-lg p-4 shadow-sm">
      <img :src="mainImage" alt="Product" class="w-full h-auto object-contain max-h-96" />
      <button class="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
        <SearchIcon :size="20" />
      </button>
    </div>

    <!-- Thumbnail Carousel -->
    <div class="flex items-center gap-2 mt-4 overflow-x-auto pb-2">
      <button v-for="(img, index) in thumbnails" :key="index" @click="setMainImage(img)" class="shrink-0 w-20 h-20 border rounded-md p-1 hover:border-green-500">
        <img :src="img" alt="" class="w-full h-full object-cover" />
      </button>
      <button class="shrink-0 w-20 h-20 border rounded-md flex items-center justify-center bg-gray-100">
        <ChevronRightIcon :size="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search as SearchIcon, ChevronRight as ChevronRightIcon } from 'lucide-vue-next'

const props = defineProps({
  images: {
    type: Array<string>,
    default: () => []
  }
})

const mainImage = ref(props.images[0] || '')
const thumbnails = ref(props.images.slice(1))

const setMainImage = (img: string) => {
  mainImage.value = img
}
</script>