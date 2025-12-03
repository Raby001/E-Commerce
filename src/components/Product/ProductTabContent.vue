<template>
  <div v-if="content" class="prose text-gray-700 text-sm">
    <p v-for="(paragraph, index) in content.split('\n\n')" :key="index" class="mb-4">
      {{ paragraph }}
    </p>
  </div>
  <div v-else class="text-gray-500 italic">No content available.</div>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: ''
  }
})
</script>