<template>
                    <ul class="types">
                        <productType v-for="vtype in types" :key="vtype.id" :id="vtype.id" :title="vtype.attributes.title" :active="vtype.active" class="type"/>
                    </ul>
</template>

<script>
import {useTypes} from '~/state/states.js';
import productType from '~/entity/productType/productType.vue'
export default {
    name: 'productTypes',
    components: {
        productType
    },
    async setup () {
        const types = useTypes();

        function setActive(){

        }

        try{
        const {find} = useStrapi();
        let response = await find('types?fields[0]=title');
        types.value = response.data;
        types.value.loading = false;
      } catch {
        types.value.loading = false;
        console.error('data fetch error')
      }
      return {types}
    }
}
</script>

<style lang="scss">
                .types{
                    margin-bottom: 20px;
                    
                }
</style>