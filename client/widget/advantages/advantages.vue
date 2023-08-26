<template>
    <section class="advantages-section">
        <div class="advantages _container">
            
            <!-- <advantage v-if="!data.loading" :title="data.data.title1" :icon="'https://all-trader.ru'+data.data.icon1.data.attributes.url"
                :text="data.data.description1"/>
            <advantage v-if="!data.loading" :title="data.data.title2" :icon="'https://all-trader.ru'+data.data.icon2.data.attributes.url"
                :text="data.data.description2"/>
            <advantage v-if="!data.loading" :title="data.data.title3" :icon="'https://all-trader.ru'+data.data.icon3.data.attributes.url"
                :text="data.data.description3"/> -->
        </div>
    </section>
</template>

<script>
import advantage from '~/feature/advantage/advantage.vue';
export default {
    name: 'advantages',
    components: {
        advantage
    },
    async setup () {
        const data = ref({data: {}, loading: true})
    //     try{
    //     const {find} = useStrapi();
    //     let response = await find('advantage?populate[0]=icon1&populate[1]=icon2&populate[2]=icon3');
    //     data.value.data = response.data.attributes;
    //     data.value.loading = false;
    //   } catch {
    //     data.value.loading = false;
    //     console.error('data fetch error')
    //   }
      return {data}
    }
}
</script>

<style lang="scss">
    @keyframes cards-anim{
        0%{
            border-radius: 10px;
        }
        10%{
            border-radius: 30px;
        }
        20%{
            border-radius: 30px;
        }
        30%{
            border-radius: 10px;
        }
        100%{
            border-radius: 10px;
        }
    }
    .advantages-section{
        margin-top: 50px;
        margin-bottom: 70px;
        .advantages{
            display: flex;
            gap: 10px;
            justify-content: space-between;
            
        }
    }
    @media(max-width: 600px){
                .advantages{
                    flex-direction: column;
                }
            }
</style>