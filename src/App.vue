<script setup lang="ts">
import { ref } from 'vue'
import Category from './components/Category.vue'
import Promotion from './components/Promotion.vue'

import type { category, promotion } from '@/types'

const categories = ref<category[]>([
  { name: 'Junk Food', number: 14, image: 'images/c1.png', background: 'rgba(242, 252, 228, 1)' },
  { name: 'Peach', number: 17, image: 'images/c2.png', background: 'rgba(255, 252, 235, 1)' },
  { name: 'Oganic Kiwi', number: 21, image: 'images/c3.png', background: 'rgba(236, 255, 236, 1)' },
  { name: 'Red Apple', number: 68, image: 'images/c4.png', background: 'rgba(254, 239, 234, 1)' },
  { name: 'Snack', number: 34, image: 'images/c5.png', background: 'rgba(255, 243, 235, 1)' },
  { name: 'Black plum', number: 25, image: 'images/c6.png', background: 'rgba(255, 243, 255, 1)' },
  { name: 'Vegatables', number: 65, image: 'images/c7.png', background: 'rgba(242, 252, 228, 1)' },
  { name: 'Headphone', number: 33, image: 'images/c8.png', background: 'rgba(255, 252, 235, 1)' },
  { name: 'Cake & Milk', number: 54, image: 'images/c9.png', background: 'rgba(242, 252, 228, 1)' },
  { name: 'Orange', number: 63, image: 'images/c10.png', background: 'rgba(255, 243, 255, 1)' },
])

const promotions = ref<promotion[]>([
  {
    text: 'Everyday Fresh & Clean with Our Products',
    background: 'rgba(240, 232, 213, 1)',
    image: '/images/p1.jpg',
    buttonColor: 'rgba(59, 183, 126, 1)',
    buttonText: 'Shop now',
  },
  {
    text: 'Make your Breakfast Healthy & Easy',
    background: 'rgba(243, 232, 232, 1)',
    image: '/images/p2.jpg',
    buttonColor: 'rgba(59, 183, 126, 1)',
    buttonText: 'Shop now',
  },
  {
    text: 'The Best Organic Products Online',
    background: 'rgba(231, 234, 243, 1)',
    image: '/images/p3.jpg',
    buttonColor: 'rgba(253, 192, 64, 1)',
    buttonText: 'Shop now',
  },
])
</script>

<template>
  <div class="mt-10 font-Quicksand flex flex-col items-center justify-center">
    <div class="flex flex-row gap-4">
      <Category :categories="categories" />
    </div>
    <Promotion :promotion="promotions" />
  </div>
</template>
