import type { product } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {

    const products = ref<product[]>([])

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/products')

            products.value = Array.isArray(data)
                ? data.map((pro: product) => ({
                    ...pro,
                    image: `http://localhost:3000/${String(pro.image).replace(/\\/g, '/')}`
                }))
                : []

        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }

    return { products, fetchProducts }
})
