<template>
    <div v-if="!params.loading && !params.errors" class="params">
        <sortParam v-for="param in params.data" :id="param.id" :title="param.attributes.title" :values="param.attributes.param_values" />
    </div>
</template>

<script>
import sortParam from '~/entity/sortParam/sortParam.vue'
import {useParams, useCards, useTypes} from '~/state/states.js'
export default {
    name: 'sortParams',
    components: {
        sortParam
    },
    async setup(){
        const params = useParams();
        const cards = useCards()
        const types = useTypes();
        const {find} = useStrapi();
        const context = useRoute()

        // watch(context, async (newContext) => {
        //     const typeId = newContext.query.type;
        //     const 
        // }, {deep: true})

    //     watch([types, params], async (newTypes, oldTypes) => {
    //     console.log(newTypes)
    //     const type = newTypes[0].data.find(item => item.active == true)
    //     const oldType = oldTypes[0].data.find(item => item.active == true)
    //     const paramsArray = [];
    //     newTypes[1].data.forEach((item)=>{
    //         item.attributes.param_values.data.forEach((ite)=>{
    //             if(ite.active){
    //                 paramsArray.push({param_values: ite.id})
    //             }
    //         })
    //     })
    //     cards.value.loading = true
    //                         if(!type || type.id !== oldType.id){
    //                             console.log('work')
    //                             params.value.loading = true
    //                             const {data: pro, error: proErr} = await useAsyncData('products', ()=> find('products',
    //                             {
    //                             fields: [
    //                                 'title',
    //                                 'details',
    //                                 'price'
    //                             ],
    //                             populate: [
    //                                 'photo'
    //                             ],
    //                             filters: {
    //                                 $and: [
    //                                     {
    //                                         type: type.id
    //                                     }
    //                                 ]
    //                             }
    //                             }))
    //                             const {data: par, error: parErr} = await useAsyncData('params', ()=> find('params',
    //                         {
    //                             fields: [
    //                                 'title',
    //                             ],
    //                             populate: [
    //                                 'param_values'
    //                             ],
    //                             filters: {
    //                                 $and: [
    //                                     {
    //                                         type: type.id 
    //                                     }
    //                                 ]
    //                             }
    //                         }))
    //                         if(pro.value && par.value){
    //                             cards.value.data = pro.value.data;
    //                             params.value.data = par.value.data;
    //                             params.value.loading = false;
    //                             cards.value.loading = false;
    //                         } else if (parErr || proErr) {
    //                             cards.value.errors = proErr;
    //                             params.value.errors = parErr;
    //                             cards.value.loading = false;
    //                             params.value.loading = false;
    //                             cards.log( parErr, proErr)
    //                         }
    //                         }else if(!type || type.id == oldType.id){
    //                             const {data: pro, error: proErr} = await useAsyncData('products', ()=> find('products',
    //                             {
    //                             fields: [
    //                                 'title',
    //                                 'details',
    //                                 'price'
    //                             ],
    //                             populate: [
    //                                 'photo'
    //                             ],
    //                             filters: {
    //                                 $and: [
    //                                     {
    //                                         type: type.id 
    //                                     },
    //                                     ...paramsArray
    //                                 ]
    //                             }
    //                         }))
                            
    //                         if(pro.value){
    //                             cards.value.data = pro.value.data;
    //                             cards.value.loading = false;
    //                         } else if(proErr){
    //                             cards.value.errors = proErr;
    //                             cards.value.loading = false;
    //                         }
    //                         }
    //   }, {deep: true})
        return {params}
    }

}
</script>

<style lang="scss">

</style>