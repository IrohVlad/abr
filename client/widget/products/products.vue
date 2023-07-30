<script>
import product from '~/feature/product/product.vue'
import {useCards} from '~/state/states.js'
export default {
    name: 'products',
    components: {
        product
    },
    setup() {
        const cards = useCards();
        return {cards}
    }
}
</script>
<template>
    <section class="products-section _container">
        <div class="section__title">Наши товары</div>
        <div class="products">
            <product v-for="card in cards" :title="card.title" :details="card.details" :price="card.price" :img="card.img" :id="card.id" :key="card.id" />
        </div>
    </section>
</template>


<style lang="scss">
    .section__title{
        color: black;
        font-size: 40px;
        margin-bottom: 30px;
    }
    .products{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        
    }
    
</style>