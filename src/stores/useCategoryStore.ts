import type { category, promotion } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {

    const categories = ref<category[]>([])
    // const categoriesNavbar = [
    //     "All", "Milks&Diaries", "Coffees&Teas", "Pet Foods", "Meats", "Vegatables", "Fruits"
    // ]

    async function fetchCategories(){
        try {
            const catRes = await fetch('http://localhost:3000/api/categories')
            const catData = await catRes.json()
            categories.value = Array.isArray(catData)
            ? catData.map(p => ({
                ...p,
                image: `http://localhost:3000/${p.image.replaceAll('\\', '/')}` 
                }))
            : []

        } catch (error) {
            console.error('Error fetching data:', error)
        }        
    }

    const activeCategoriesNavbar = ref('All')

    const selectedCategories = (cat: string) => {
        activeCategoriesNavbar.value = cat;
    }

    return {fetchCategories, categories, activeCategoriesNavbar, selectedCategories}
})