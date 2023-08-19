<template>
    <div class="sort-param">
        <div @click="openClose"  :class="state ? 'param__title active-title' : 'param__title'">
            {{ title }}
        </div>
        <ul :class=" state ? 'param__values show__values' : 'param__values'">
            <sortParamItem v-for="value in values.data" :active="value.active" :param_id="id" :title="value.attributes.value" :id="value.id"/>
        </ul>
    </div>
</template>

<script>
import sortParamItem from '~/entity/sortParamItem/sortParamItem.vue';
import { useParams } from '~/state/states';
export default {
    name: 'sortParam',
    components: {
        sortParamItem
    },
    props: [
        'id',
        'title',
        'values'
    ],
    setup (props) {
        const params = useParams();
        const state = ref(false);
        function openClose () {
            state.value = !state.value
        }
        return {state, openClose}
    }
}
</script>

<style lang="scss">
    .sort-param{
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                        .param__title{
                            width: fit-content;
                            cursor: pointer;
                            transition-property: color;
                            transition-duration: 0.3s;
                            &:hover{
                                color: rgb(255, 187, 0);
                            }
                            &::before{
                                content: '▼';
                            }
                        }
                        .active-title{
                            color: rgb(255, 187, 0);
                            &::before{
                                content: '▲';
                            }
                        }
                        .param__values{
                            transition-property: opacity, max-height;
                            transition-duration: 0.3s, 0.3s;
                            opacity: 0;
                            overflow: hidden;
                            max-height: 0;
                        }
                        .show__values{
                                opacity: 1;
                                max-height: 500px;
                            }
                    }
</style>