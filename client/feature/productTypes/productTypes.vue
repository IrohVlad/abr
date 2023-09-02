<template>
                    <ul v-if="!types.loading && !types.errors" class="types">
                        <productType v-for="vtype in types.data" :key="vtype.id" :id="vtype.id" :title="vtype.attributes.title" :active="vtype.active" class="type"/>
                    </ul>
                    <div v-else-if="!types.loading && types.errors" class="reload-products" @click="reloadTyp">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M21.91,4.09a1,1,0,0,0-1.07.16L19.48,5.46A9.81,9.81,0,0,0,12,2a10,10,0,1,0,9.42,13.33,1,1,0,0,0-1.89-.66A8,8,0,1,1,12,4a7.86,7.86,0,0,1,6,2.78L16.34,8.25a1,1,0,0,0-.27,1.11A1,1,0,0,0,17,10h4.5a1,1,0,0,0,1-1V5A1,1,0,0,0,21.91,4.09Z" fill="white"/></svg>
                    </div>
</template>

<script>
import {useTypes, useParams, useCards} from '~/state/states.js';
import productType from '~/entity/productType/productType.vue'
export default {
    name: 'productTypes',
    components: {
        productType
    },
    async setup () {
        const types = useTypes();
        const {find} = useStrapi();
        const context = useRoute()
        const cards = useCards();
        const params = useParams();



        const queries = computed(()=>{
            return context.query
        })
        

        const {data: typ, error, refresh} = await useAsyncData('types', ()=> find('types?fields[0]=title'))

        if(typ.value){
            types.value.data = typ.value.data;
            types.value.loading = false;
        } else if (error) {
            types.value.errors = error;
            types.value.loading = false;
          console.log(error)
        }
        async function reloadTyp (){
            types.value.loading = true;
            types.value.errors = null;
            await refresh()
            if(typ.value){
                types.value.data = typ.value.data;
                types.value.loading = false;
            } else if (error) {
                types.value.errors = error;
                types.value.loading = false;
                console.log( error)
            }

        }

        watch(queries, async (newContext, oldContext)=>{
            if(!oldContext || oldContext.type != newContext.type){
                types.value.data.forEach(element => {
                if(element.id == newContext.type && !element.active){
                    element.active = true
                } else {
                    element.active = false
                }
                });
                const {data: pro, error: proErr} = await useAsyncData('products', ()=> find('products',
                                {
                                fields: [
                                    'title',
                                    'details',
                                    'price'
                                ],
                                populate: [
                                    'photo'
                                ],
                                filters: {
                                    $and: [
                                        {
                                            type: newContext.type
                                        }
                                    ]
                                }
                                }))
                                const {data: par, error: parErr} = await useAsyncData('params', ()=> find('params',
                            {
                                fields: [
                                    'title',
                                ],
                                populate: [
                                    'param_values'
                                ],
                                filters: {
                                    $and: [
                                        {
                                            type: newContext.type
                                        }
                                    ]
                                }
                            }))
                            if(pro.value && par.value){
                                cards.value.data = pro.value.data;
                                params.value.data = par.value.data;
                                params.value.loading = false;
                                cards.value.loading = false;
                            } else if (parErr || proErr) {
                                cards.value.errors = proErr;
                                params.value.errors = parErr;
                                cards.value.loading = false;
                                params.value.loading = false;
                                console.log( parErr, proErr)
                            }
            } else if(oldContext.type == newContext.type) { 
                
            }
            
        }, {deep: true, immediate: true})

      return {types, reloadTyp}
    }
}
</script>

<style lang="scss">
                .types{
                    margin-bottom: 20px;
                    
                }
</style>