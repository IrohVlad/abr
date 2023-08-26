<script>
import product from '~/feature/product/product.vue'
import sortParam from '~/feature/sortParam/sortParam.vue'
import productTypes from '~/feature/productTypes/productTypes.vue'
import {useCards, useParams} from '~/state/states.js'
export default {
    name: 'products',
    components: {
        product,
        sortParam,
        productTypes
    },
    async setup() {
        const cards = useCards();
        const params = useParams();
    
      return {cards, params}
    }
}
</script>
<template>
    <section class="products-section _container">
        <div class="section__title">Наши товары</div>
        <div class="products-grid">
            <div class="products-sidebar">
                <div class="sidebar">
                    <!-- <productTypes/>
                    <div class="params">
                        <sortParam v-for="param in params" :id="param.id" :title="param.attributes.title" :values="param.attributes.param_values" />
                    </div> -->
                </div>
            </div>
            <div class="products">
                <!-- <product  v-for="card in cards" :key="card.id" :img="card.attributes.photo.data" :title="card.attributes.title" :details="card.attributes.details" :price="card.attributes.price" :id="card.id" /> -->

            </div>
        </div>
    </section>
</template>


<style lang="scss">
    .section__title{
        color: black;
        font-size: 40px;
        margin-bottom: 30px;
    }
    .products-grid{
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 15px;
        .products-sidebar{
            .sidebar{
                width: 100%;
                height: fit-content;
                min-height: 500px;
                background-color: rgb(17, 17, 17);
                border-radius: 10px;
                padding: 15px;
                box-sizing: border-box;
                
                .params{
                    color: white;
                }
            }
        }
        .products{
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
    
</style>