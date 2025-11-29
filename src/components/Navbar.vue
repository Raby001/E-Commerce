<script lang="ts">
import SearchBox from '@/components/SearchBox.vue';
import RightPart from '@/components/RightPart.vue';
import BelowNav from '@/components/BelowNav.vue';

export default {
    name: "NavBar"
}
</script>

<template>
    <nav class="flex flex-col gap-10">
        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row">
                <img src="/images/Logo.png" alt="Melon Mart Logo" class="h-12" />
                <div class="">
                    <p class="font-bold text-[24px] text-green-600">Melon</p>
                    <p class="text-[14px]">Mart & GROCERY</p>
                </div>
            </div>
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