<template>
    <hero/>
    <advantages/>
    <!-- <searchParams/> -->
    <!-- <products/> -->
</template>

<script>
import hero from '~/widget/hero/hero.vue'
import advantages from '~/widget/advantages/advantages.vue'
import products from '~/widget/products/products.vue'
// import searchParams from '~/widget/searchParams/searchParams.vue'
export default {
    components: {
        hero,
        advantages,
        products,
        // searchParams
    }, 
    
}
</script>

