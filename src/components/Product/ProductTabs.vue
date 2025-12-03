<template>
  <div class="border-t pt-6">
    <div class="flex border-b">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        @click="activeTab = tab.name"
        :class="[
          'px-4 py-2 font-medium text-sm',
          activeTab === tab.name
            ? 'text-green-600 border-b-2 border-green-600'
            : 'text-gray-600 hover:text-green-600'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="py-4">
      <ProductTabContent :content="tabs.find(t => t.name === activeTab)?.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductTabContent from '@/components/Product/ProductTabContent.vue'

const activeTab = ref('description')

const tabs = [
  {
    name: 'description',
    label: 'Description',
    content: 'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.'
  },
  {
    name: 'additional',
    label: 'Additional info',
    content: 'Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.'
  },
  {
    name: 'reviews',
    label: 'Reviews (3)',
    content: '⭐⭐⭐⭐☆ Great product! Very fresh and tasty.\n\n⭐⭐⭐⭐⭐ Love it! Will buy again.\n\n⭐⭐⭐☆☆ Good quality, but packaging could be better.'
  }
]
</script>