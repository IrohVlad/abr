<template>
    <NuxtLink @click="clearParams" :class="active ? 'type type-active' : 'type'" :to="'/products/type-'+id+'/page-1'">{{ title }}</NuxtLink>
</template>

<script>
import { useSortParams } from '~/state/states.js';
export default {
    name: 'productType',
    props: [
        'title',
        'active',
        'id'
    ],
    setup(props){
        const context = useRoute()
        const sortParams = useSortParams();
        function clearParams(){
            if(context.params.type != props.id){
                sortParams.value = [];
            }
        }

        // function setActive (){
        //     types.value.data.forEach(element => {
        //         if(element.id == context.query.type && !element.active){
        //             element.active = true
        //         } else {
        //             element.active = false
        //         }
        //     });
        // }
        return {sortParams, context, clearParams}
    }
}
</script>

<style scoped lang="scss">
                    .type{
                        display: block;
                        cursor: pointer;
                        padding: 7px 0px;
                        color: white;
                        transition-property: color;
                        transition-duration: 0.3s;
                        &:not(:last-child){
                            border-bottom: 1px solid white;
                        }
                        &:hover{
                            color: rgb(255, 187, 0);
                        }
                    }
                    .type-active{
                        color: rgb(255, 187, 0);
                    }
</style>