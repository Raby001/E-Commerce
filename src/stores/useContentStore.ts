import type { category, promotion } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { normalizeImageUrl } from '../utils/Image.utils'

const API_BASE_URL = 'http://localhost:3000';

export const useContentStore = defineStore('content', () => {
  // --- STATE ---
  const featuredCategories = ref<category[]>([]);
  const promotions = ref<promotion[]>([]);

  // --- ACTIONS ---
  const fetchFeaturedCategories = async () => {
    try {
      const response = await axios.get<category[]>(`${API_BASE_URL}/api/categories`);
      featuredCategories.value = response.data.map((cat: any) => ({
        ...cat,
        image: normalizeImageUrl(cat.image, API_BASE_URL),
      }) as category);
    } catch (error) {
      console.error('Error fetching featured categories:', error);
    }
  };

  const fetchPromotions = async () => {
    try {
      const response = await axios.get<promotion[]>(`${API_BASE_URL}/api/promotions`);
      promotions.value = response.data.map((promo: any) => ({
        ...promo,
        image: normalizeImageUrl(promo.image, API_BASE_URL),
      }) as promotion);
    } catch (error) {
      console.error('Error fetching promotions:', error);
    }
  };


  return {
    featuredCategories,
    fetchFeaturedCategories,
    promotions,
    fetchPromotions,
  };
});