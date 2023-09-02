<template>
  <div class="_wrapper">
    <NuxtLayout>
      <SeoKit />
      <vheader/>
      <NuxtPage/>
      <vfooter/>
    </NuxtLayout>
  </div>
</template>

<script>
import header from './widget/header/header'
import vfooter from '~/widget/footer/vfooter.vue'
import {useCards, useTypes, useParams, useGeneral} from '~/state/states.js'
import strapiFetch from './api'
export default {
    components: {
        vheader: header,
        vfooter
    },
    async setup () {
        const cards = useCards();
        const types = useTypes();
        const params = useParams();
        const general = useGeneral();
        // const {find} = useStrapi();

        // const {data: products} = await useAsyncData('products', ()=> find('products?fields[0]=title&fields[1]=details&fields[2]=price&populate[0]=photo'))
        // cards.value.data = products.value.data;
        // cards.value.loading = false;
        // const {data: gen, error} = await useAsyncData('general', ()=> find('general?populate[0]=photo'))
        // console.log(gen)
        // if(gen.value){
        //     general.value.data = gen.value.data;
        //     general.value.loading = false;
        // } else if (error) {
        //   general.value.errors = error;
        //   general.value.loading = false;
        //   console.log( error)
        // }
        // strapiFetch('products?fields[0]=title&fields[1]=details&fields[2]=price&populate[0]=photo', find, cards)
        // strapiFetch('general?populate[0]=photo', find, general)

      // try{
      //   let response = await find('general?populate[0]=photo');
      //   general.value = response.data.attributes;
      // } catch {
      //   console.error('data fetch error2')
      // }
    //   watch(types, async (newTypes) => {
    //     console.log(newTypes)
    //     const type = newTypes.find(item => item.active == true)
    //     try{
    //       console.log('срабат')
    //                     if(type){
    //                         let response = await find(`products`,
    //                     {
    //                         fields: [
    //                             'title',
    //                             'details',
    //                             'price'
    //                         ],
    //                         populate: [
    //                             'photo'
    //                         ],
    //                         filters: {
    //                             $and: [
    //                                 {
    //                                     type: type.id
    //                                 }
    //                             ]
    //                         }
    //                     });
    //                     let response2 = await find(`params`,
    //                     {
    //                         fields: [
    //                             'title',
    //                         ],
    //                         populate: [
    //                             'param_values'
    //                         ],
    //                         filters: {
    //                             $and: [
    //                                 {
    //                                     type: type.id 
    //                                 }
    //                             ]
    //                         }
    //                     });
    //                     cards.value = response.data;
    //                     params.value = response2.data
    //                     console.log(params.value)
    //                     cards.value.loading = false;
    //                     } else {
    //                         let response = await find(`products`,
    //                     {
    //                         fields: [
    //                             'title',
    //                             'details',
    //                             'price'
    //                         ],
    //                         populate: [
    //                             'photo'
    //                         ]
    //                     });
                        
    //                     cards.value = response.data;
    //                     params.value = []
    //                     console.log(params.value)
    //                     cards.value.loading = false;
    //                     }
                        
    //                 } catch {
    //                     cards.value.loading = false;
    //                     console.error('data fetch error3')
    //                 }
    //   }, {deep: true})
    //   watch(params, async (newParams)=>{
    //     const type = types.value.find(item => item.active == true)
    //     const paramsArray = [];
    //     newParams.forEach((item)=>{
    //         item.attributes.param_values.data.forEach((ite)=>{
    //             if(ite.active){
    //                 paramsArray.push({param_values: ite.id})
    //             }
    //         })
    //     })
    //     try{
    //                     let response = await find(`products`,
    //                     {
    //                         fields: [
    //                             'title',
    //                             'details',
    //                             'price'
    //                         ],
    //                         populate: [
    //                             'photo'
    //                         ],
    //                         filters: {
    //                             $and: [
    //                                 {
    //                                     type: type.id,
                                        
    //                                 },
    //                                 ...paramsArray
    //                             ]
    //                         }
    //                     });
                        
    //                     cards.value = response.data;
    //                     cards.value.loading = false;
    //                 } catch {
    //                     cards.value.loading = false;
    //                     console.error('data fetch error4')
    //                 }

    //   }, {deep: true})
    }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900');
  *{
    font-family: Inter;
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  ._no-select{
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  ._wrapper{
    min-height: 100vh;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgb(241, 231, 211);
  }
  ._container{
    max-width: 1200px;
    padding: 3px 15px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  @media(max-width: 600px) {
    ._container{
      padding: 5px 12px;
    }
  }
</style>