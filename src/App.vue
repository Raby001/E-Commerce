<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Category from './components/Category.vue'
import Promotion from './components/Promotion.vue'

import type { category, promotion } from '@/types'


// const categories = ref<category[]>([
//   { name: 'Junk Food', productCount: 14, image: 'images/c1.png', color: 'rgba(242, 252, 228, 1)' },
//   { name: 'Peach', productCount: 17, image: 'images/c2.png', color: 'rgba(255, 252, 235, 1)' },
//   { name: 'Oganic Kiwi', productCount: 21, image: 'images/c3.png', color: 'rgba(236, 255, 236, 1)' },
//   { name: 'Red Apple', productCount: 68, image: 'images/c4.png', color: 'rgba(254, 239, 234, 1)' },
//   { name: 'Snack', productCount: 34, image: 'images/c5.png', color: 'rgba(255, 243, 235, 1)' },
//   { name: 'Black plum', productCount: 25, image: 'images/c6.png', color: 'rgba(255, 243, 255, 1)' },
//   { name: 'Vegatables', productCount: 65, image: 'images/c7.png', color: 'rgba(242, 252, 228, 1)' },
//   { name: 'Headphone', productCount: 33, image: 'images/c8.png', color: 'rgba(255, 252, 235, 1)' },
//   { name: 'Cake & Milk', productCount: 54, image: 'images/c9.png', color: 'rgba(242, 252, 228, 1)' },
//   { name: 'Orange', productCount: 63, image: 'images/c10.png', color: 'rgba(255, 243, 255, 1)' },
// ])

// const promotions = ref<promotion[]>([
//   {
//     title: 'Everyday Fresh & Clean with Our Products',
//     color: 'rgba(240, 232, 213, 1)',
//     image: '/images/p1.jpg',
//     buttonColor: 'rgba(59, 183, 126, 1)',
//   },
//   {
//     title: 'Make your Breakfast Healthy & Easy',
//     color: 'rgba(243, 232, 232, 1)',
//     image: '/images/p2.jpg',
//     buttonColor: 'rgba(59, 183, 126, 1)',
//   },
//   {
//     title: 'The Best Organic Products Online',
//     color: 'rgba(231, 234, 243, 1)',
//     image: '/images/p3.jpg',
//     buttonColor: 'rgba(253, 192, 64, 1)',
//   },
// ])

const categories = ref<category[]>([])
const promotions = ref<promotion[]>([])

onMounted(async () => {
  try {
    const catRes = await fetch('http://localhost:3000/api/categories')
    const catData = await catRes.json()
    categories.value = Array.isArray(catData)
      ? catData.map(p => ({
          ...p,
          image: `http://localhost:3000/${p.image.replaceAll('\\', '/')}` 
        }))
      : []

    const promoRes = await fetch('http://localhost:3000/api/promotions')
    const promoData = await promoRes.json()
    promotions.value = Array.isArray(promoData) ? promoData : []
    promotions.value = Array.isArray(promoData)
      ? promoData.map(p => ({
          ...p,
          image: `http://localhost:3000/${p.image.replaceAll('\\', '/')}` 
        }))
      : []

  } catch (error) {
    console.error('Error fetching data:', error)
  }
})


</script>

<template>
  <div class="font-Quicksand flex flex-col items-center justify-center mt-10">
    <div class="max-w-[1550px]">
      <div class="">
        <Category :categories="categories" />
      </div>
      <div class="">
        <Promotion :promotion="promotions" />
      </div>
    </div>
  </div>
</template>
