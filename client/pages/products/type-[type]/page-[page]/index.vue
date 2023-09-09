<template>
    <main>
        <products/>
        <!-- <paginator/> -->
    </main>
</template>

<script>
import products from '~/widget/products/products.vue'
import paginator from '~/widget/paginator/paginator.vue'
export default {
    components: {
        products,
        paginator
    }
}
</script>

<style lang="scss">

</style>