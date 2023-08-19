<template>
  <div class="_wrapper">
    <NuxtLayout>
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
        
        try{
        const {find} = useStrapi();
        let response = await find('products?fields[0]=title&fields[1]=details&fields[2]=price&populate[0]=photo');
        cards.value = response.data;
        console.log(cards.value)
        cards.value.loading = false;
      } catch {
        cards.value.loading = false;
        console.error('data fetch error')
      }
      try{
        const {find} = useStrapi();
        let response = await find('general?populate[0]=photo');
        general.value = response.data.attributes;
      } catch {
        console.error('data fetch error')
      }
      watch(types, async (newTypes) => {
        console.log(newTypes)
        const type = newTypes.find(item => item.active == true)
        try{
          console.log('срабат')
                        const {find} = useStrapi();
                        if(type){
                            let response = await find(`products`,
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
                                        type: type.id
                                    }
                                ]
                            }
                        });
                        let response2 = await find(`params`,
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
                                        type: type.id 
                                    }
                                ]
                            }
                        });
                        cards.value = response.data;
                        params.value = response2.data
                        console.log(params.value)
                        cards.value.loading = false;
                        } else {
                            let response = await find(`products`,
                        {
                            fields: [
                                'title',
                                'details',
                                'price'
                            ],
                            populate: [
                                'photo'
                            ]
                        });
                        
                        cards.value = response.data;
                        params.value = []
                        console.log(params.value)
                        cards.value.loading = false;
                        }
                        
                    } catch {
                        cards.value.loading = false;
                        console.error('data fetch error')
                    }
      }, {deep: true})
      watch(params, async (newParams)=>{
        const type = types.value.find(item => item.active == true)
        const paramsArray = [];
        newParams.forEach((item)=>{
            item.attributes.param_values.data.forEach((ite)=>{
                if(ite.active){
                    paramsArray.push({param_values: ite.id})
                }
            })
        })
        try{
                        const {find} = useStrapi();
                        let response = await find(`products`,
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
                                        type: type.id,
                                        
                                    },
                                    ...paramsArray
                                ]
                            }
                        });
                        
                        cards.value = response.data;
                        cards.value.loading = false;
                    } catch {
                        cards.value.loading = false;
                        console.error('data fetch error')
                    }

      }, {deep: true})
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