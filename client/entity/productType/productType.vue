<template>
    <li @click="setActive" :class="active ? 'type type-active' : 'type'">{{ title }}</li>
</template>

<script>
import {useTypes, useParams} from '~/state/states.js';
export default {
    name: 'productType',
    props: [
        'title',
        'active',
        'id'
    ],
    setup(props){
        const types = useTypes();
        function setActive (){
            types.value.forEach(element => {
                if(element.id == props.id && !element.active){
                    element.active = true
                } else {
                    element.active = false
                }
            });
        }
        return {setActive}
    }
}
</script>

<style scoped lang="scss">
                    .type{
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