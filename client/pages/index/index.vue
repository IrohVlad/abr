<template>
    <hero/>
    <advantages/>
    <products/>
</template>

<script>
import hero from '~/widget/hero/hero.vue'
import advantages from '~/widget/advantages/advantages.vue'
import products from '~/widget/products/products.vue'
export default {
    components: {
        hero,
        advantages,
        products
    },
    data(){
        return{
            scrolled: false
        }
    },
    methods: {
        onScroll () {
            
        }
    }
}
</script>

