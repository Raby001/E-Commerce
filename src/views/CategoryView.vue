<script setup lang="ts">
import BreadCrumBanner from '@/components/Navbar/BreadCrumBanner.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>


<template>
    <div class="">
        <BreadCrumBanner/>
    </div>
</template>
