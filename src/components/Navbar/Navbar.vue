<script lang="ts" setup>
import SearchBox from './SearchBox.vue'
import BelowNav from './BelowNav.vue';
import RightPart from './RightPart.vue';

</script>
<template>
    <nav class="flex flex-col gap-10">
        <div class="flex flex-row justify-between items-center">
            <router-link :to="{name: 'Home'}" class="flex flex-row">
                <img src="/images/Logo.png" alt="Melon Mart Logo" class="h-12" />
                <div class="">
                    <p class="font-bold text-[24px] text-green-600">Melon</p>
                    <p class="text-[14px]">Mart & GROCERY</p>
                </div>
            </router-link>
            <div class="">
                <SearchBox/>
            </div>

            <div class="">
                <RightPart/>
            </div>
        </div>
        <div>
            <BelowNav/>
        </div>        
    </nav>

</template>