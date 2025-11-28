<script setup lang="ts">
import { computed } from 'vue'
import { Star, StarHalf } from 'lucide-vue-next'

const props = defineProps<{
  rating: number
  max?: number
}>()

const maxStars = props.max ?? 5

const fullStars = computed(() => Math.floor(props.rating))
const hasHalf = computed(() => props.rating % 1 >= 0.5)
const emptyStars = computed(() => maxStars - fullStars.value - (hasHalf.value ? 1 : 0))
</script>

<template>
  <div class="flex items-center gap-1">
    <!-- Full stars -->
    <Star
      v-for="n in fullStars"
      :key="'full-' + n"
      class="w-3 h-3 fill-yellow-400 text-yellow-400"
    />

    <!-- Half star -->
    <StarHalf
      v-if="hasHalf"
      class="w-3 h-3 fill-yellow-400 text-yellow-400"
    />

    <!-- Empty stars -->
    <Star
      v-for="n in emptyStars"
      :key="'empty-' + n"
      class="w-3 h-3 text-gray-300"
    />

    <!-- Optional: show number -->
    <span class="ml-2 text-sm text-gray-600">({{ rating.toFixed(1) }})</span>
  </div>
</template>