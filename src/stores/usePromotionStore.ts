import type { category, promotion } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePromotionStore = defineStore('promotion', () => {

    const promotions = ref<promotion[]>([])
    async function fetchPromotion(){
        try {
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
    }

    return {fetchPromotion, promotions}
})