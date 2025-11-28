// stores/useProductStore.ts
import type { product } from '@/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import { normalizeImageUrl } from '../utils/Image.utils'

const API_BASE_URL = 'http://localhost:3000'


export const useProductStore = defineStore('product', () => {
  const products = ref<product[]>([])
  const currentFilterCategory = ref('All')
  const categories = ref<string[]>([
    'All',
    'Fruits',
    'Vegetables',
    'Meats',
    'Milks & Diaries',
    'Coffees & Teas',
    'Pet Foods',
    'Frozen Foods',
    'Bakery',
    'Snacks'
  ])

  function calculatePrice(price: number, discount?: number): number {
    // If no discount or invalid → return original
    if (!discount ||discount === 0){
      return (price);
    } 

    const discountPercent = Math.abs(discount); // works with 20 or -20
    return Number((price * (100 - discountPercent) / 100).toFixed(2));
  }

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/products`)
      products.value = res.data.map((p: any) => ({
        ...p,
        image: normalizeImageUrl(p.image, API_BASE_URL),
        finalPrice: calculatePrice(Number(p.price), Number(p.promotionAsPercentage))
      }))
    } catch (err) {
      console.error('Failed to fetch products', err)
    }
  }

  const selectCategory = (cat: string) => {
    currentFilterCategory.value = cat
  }

  const filteredProducts = computed(() => {
    if (currentFilterCategory.value === 'All'){
      return products.value      
    } 
    return products.value.filter(p => p.group === currentFilterCategory.value)
  })

  return {
    products,
    categories,
    currentFilterCategory,
    filteredProducts,
    fetchProducts,
    selectCategory
  }
})