<template>
    <li @click="onClick" :class="active ? 'param__value value__active' : 'param__value'">{{ title }}</li>
</template>

<script>
import { useParams } from '~/state/states';
export default {
    name: 'sortParamItem',
    props: [
        'id',
        'param_id',
        'title',
        'active'
    ],
    setup(props){
        const params = useParams();
        function onClick() {
            params.value.forEach((value)=>{
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
        return {onClick}
    }
}
</script>

<style lang="scss">
    .param__value{
                                padding: 7px 0;
                                cursor: pointer;
                                transition-property: color;
                                transition-duration: 0.3s;
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