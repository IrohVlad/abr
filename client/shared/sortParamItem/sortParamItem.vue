<template>
    <NuxtLink :to="context.query['param[]'] ? check.length ? {query: {type: context.query.type, 'param[]': [...check]}} : {query: {type: context.query.type, 'param[]': [...context.query['param[]'], id]}} :{query: {type: context.query.type, 'param[]': [id]}}" @click="onClick" :class="active ? 'param__value value__active' : 'param__value'">{{ title }}</NuxtLink>
</template>

<script>
import { useParams } from '~/state/states';
export default {
    name: 'sortParamItem',
    props: [
        'id',
        'ids',
        'param_id',
        'title',
        'active'
    ],
    setup(props){
        const context = useRoute();
        console.log(context.query)
        const params = useParams();
        const check = ref([]);
        // console.log(props.ids)
        watch(context, (newVal)=>{
            if(context.query['param[]']){
            context.query['param[]'].forEach((value, index)=>{
            if(props.ids.includes(+value)){
                // check.value.id = value;
                // check.value.index = index
                let arr = context.query['param[]'].map((v, ind)=>{
                    if(ind == index){
                        return props.id
                    } 
                    return v
                })
                check.value = arr
                console.log(arr)
            }
            })
        }else {
            check.value = []
        }
        },{deep: true})

        function onClick() {
            params.value.data.forEach((value)=>{
                if(value.id == props.param_id){
                    value.attributes.param_values.data.forEach((innerValue)=>{
                        if(innerValue.id == props.id && !innerValue.active){
                            innerValue.active = true
                        } else {
                            innerValue.active = false
                        }
                    })
                }
            })
        }
        return {onClick, context, check}
    }
}
</script>

<style lang="scss">
    .param__value{
        display: block;
                                padding: 7px 0;
                                cursor: pointer;
                                transition-property: color;
                                transition-duration: 0.3s;
                                color: white;
                                &:hover{
                                    color: rgb(255, 187, 0);
                                }
                                &:not(:last-child){
                                    border-bottom: 1px solid white;
                                }
                            }
    .value__active{
        color: rgb(255, 187, 0);
    }
</style>