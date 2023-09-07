<script>
import product from '~/feature/product/product.vue'
import sortParams from '~/feature/sortParams/sortParams.vue'
import productTypes from '~/feature/productTypes/productTypes.vue'
import {useCards, useParams, useSortParams} from '~/state/states.js'
export default {
    name: 'products',
    components: {
        product,
        sortParams,
        productTypes
    },
    async setup() {
        const cards = useCards();
        const params = useParams();
        const paramsArray = useSortParams();
        const {find} = useStrapi();
        const context = useRoute()
        const type = computed(() => context.params.type)
        const par = computed(() => paramsArray.value.length)
        // const compContext = computed()

        const {data: pro, error, refresh} = await useAsyncData('products', ()=> find('products',
        {
                                fields: [
                                    'title',
                                    'details',
                                    'price'
                                ],
                                pagination: {
                                    page: context.params.page,
                                    pageSize: 10
                                },
                                populate: [
                                    'photo'
                                ],
                                filters: type.value ? {
                                    $and: paramsArray.value.length ? [
                                        {
                                         type: type.value
                                        },
                                        ...paramsArray.value
                                    ] : [
                                        {
                                            type: type.value
                                        }
                                    ]
                                } : undefined
                                }))

        if(pro.value){
            cards.value.data = pro.value.data;
            cards.value.loading = false;
        } else if (error) {
            cards.value.errors = error;
            cards.value.loading = false;
          console.log( error)
        }

        async function reloadPro (){
            cards.value.loading = true;
            cards.value.errors = null;
            await refresh()
            if(pro.value){
                cards.value.data = pro.value.data;
                cards.value.loading = false;
            } else if (error) {
                cards.value.errors = error;
                cards.value.loading = false;
                console.log( error)
            }

        }
        // watch(context, ()=>{
        //     console.log('watch worked' + context.params.type)
        //     reloadPro()
        // }, {deep: true})

        watch(par, ()=>{
            console.log('watch worked' + type.value)
            // if(par != 0){
            //     reloadPro()
            // }
            reloadPro()
        })
      return {cards, params, reloadPro, context}
    }
}
</script>
<template>
    <section class="products-section _container">
        <h2 class="section__title">Наши товары</h2>
        <div class="products-grid">
            <div class="products-sidebar">
                <div class="sidebar">
                    <productTypes/>
                    <sortParams v-if="context.params.type" />
                </div>
            </div>
            <div class="products">
                <product v-if="!cards.loading && !cards.errors"  v-for="card in cards.data" :key="card.id" :img="card.attributes.photo.data" :title="card.attributes.title" :details="card.attributes.details" :price="card.attributes.price" :id="card.id" />
                <div v-else-if="!cards.loading && cards.errors" class="reload-products" @click="reloadPro">
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
    @media(max-width: 530px){
        .products-grid{
            display: grid;
            grid-template-columns: 1fr;
            // grid-template-rows: 1fr 1fr;
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
    }
    
</style>