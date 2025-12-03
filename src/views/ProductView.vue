<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <ProductBreadcrumb />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ProductImageGallery :images="productImages" />
      <div class="space-y-6">
        <ProductInfo />
        <ProductActions />
      </div>
    </div>

    <ProductTabs />
  </div>
</template>

<script setup lang="ts">
import ProductBreadcrumb from '@/components/Product/ProductBreadcrumb.vue'
import ProductImageGallery from '@/components/Product/ProductImageGallery.vue'
import ProductInfo from '@/components/Product/ProductInfo.vue'
import ProductActions from '@/components/Product/ProductActions.vue'
import ProductTabs from '@/components/Product/ProductTabs.vue'

const productImages = [
  'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/537c5f03-fcbb-48ee-8824-e8e003971de3-retina-large.png',
  'https://i5.walmartimages.com/seo/Seeds-of-Change-Organic-Quinoa-and-Brown-Rice-with-Garlic-8-5-oz-6-ct_a3a45f99-afb5-4887-a391-95b24d0682c8.cd9ed6b2615a8c8d9c7d90bd9191f4c1.jpeg',
  'https://i5.walmartimages.com/asr/9af2addf-3278-4360-828d-3a686214969c.b4c586106e468f42341eb737c780e084.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
  'https://m.media-amazon.com/images/I/810FXD-JHGL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg',
  'https://www.instacart.com/assets/domains/product-image/file/large_8bc011fc-0d84-49f4-ac4a-ec9e07113226.jpg'
]
</script>