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
        const {find} = useStrapi();

        const {data: pro, error, refresh} = await useAsyncData('products', ()=> find('products?fields[0]=title&fields[1]=details&fields[2]=price&populate[0]=photo'))

        if(pro.value){
            cards.value.data = pro.value.data;
            cards.value.loading = false;
        } else if (error) {
            cards.value.errors = error;
            cards.value.loading = false;
          console.log( error)
        }
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
                <product v-if="!cards.loading && !cards.errors"  v-for="card in cards.data" :key="card.id" :img="card.attributes.photo.data" :title="card.attributes.title" :details="card.attributes.details" :price="card.attributes.price" :id="card.id" />
                <div v-else-if="!cards.loading && cards.errors" class="reload-products" @click="reloadAdv">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M21.91,4.09a1,1,0,0,0-1.07.16L19.48,5.46A9.81,9.81,0,0,0,12,2a10,10,0,1,0,9.42,13.33,1,1,0,0,0-1.89-.66A8,8,0,1,1,12,4a7.86,7.86,0,0,1,6,2.78L16.34,8.25a1,1,0,0,0-.27,1.11A1,1,0,0,0,17,10h4.5a1,1,0,0,0,1-1V5A1,1,0,0,0,21.91,4.09Z" fill="rgb(17, 17, 17)"/></svg>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">
.reload-products{
    height: 100px;
    width: 100px;
    margin: 30px auto;
}
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