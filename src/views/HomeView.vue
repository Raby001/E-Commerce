<script setup>
import { onMounted } from 'vue'

// Components
import Category from '@/components/Category.vue'
import Promotion from '@/components/Promotion.vue'
import Products from '@/components/Products.vue'
import CategoryFilterTabs from '@/components/CategoryFilterTabs.vue'  // ← our new reusable filter

// Stores
import { useProductStore } from '@/stores/useProductStore'
import { useContentStore } from '@/stores/useContentStore'

const productStore = useProductStore()
const contentStore = useContentStore()

onMounted(async () => {
  await Promise.all([
    contentStore.fetchFeaturedCategories(),
    contentStore.fetchPromotions(),   // ← gets real category names
    productStore.fetchProducts()
  ])
})
</script>

<template>
  <div class="font-Quicksand min-h-screen bg-gray-50 py-10">
    <div class="max-w-[1550px] mx-auto px-4">

      <!-- ==================== Featured Categories Section ==================== -->
      <section class="">
        <div class="flex flex-row items-center justify-between ">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Categories
          </h2>

          <!-- First Filter Bar (above categories) -->
          <div class="flex justify-center mb-8">
            <CategoryFilterTabs />
          </div>          
        </div>


        <!-- Category Grid -->
        <Category />
      </section>

      <!-- ==================== Promotions ==================== -->
      <section class="mb-16">
        <Promotion />
      </section>

      <!-- ==================== Popular Products Section ==================== -->
      <section>
        <div class="flex flex-row items-center justify-between">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            Popular Products
          </h2>

          <!-- Second Filter Bar (above products) -->
          <div class="flex justify-center mb-8">
            <CategoryFilterTabs />
          </div>          
        </div>


        <!-- Products Grid – automatically filtered by the store! -->
        <Products :products="productStore.filteredProducts" />
      </section>

    </div>
  </div>
</template>