<template>
    <section class="advantages-section">
        <div v-if="!data.loading && !data.errors" class="advantages _container">
            
            <advantage :title="data.data.attributes.title1" :icon="'https://all-trader.ru'+data.data.attributes.icon1.data.attributes.url"
                :text="data.data.attributes.description1"/>
            <advantage :title="data.data.attributes.title2" :icon="'https://all-trader.ru'+data.data.attributes.icon2.data.attributes.url"
                :text="data.data.attributes.description2"/>
            <advantage :title="data.data.attributes.title3" :icon="'https://all-trader.ru'+data.data.attributes.icon3.data.attributes.url"
                :text="data.data.attributes.description3"/>
        </div>
        <div v-else-if="data.errors" class="advantages _container">
            <div class="reload-hero" @click="reloadAdv">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M21.91,4.09a1,1,0,0,0-1.07.16L19.48,5.46A9.81,9.81,0,0,0,12,2a10,10,0,1,0,9.42,13.33,1,1,0,0,0-1.89-.66A8,8,0,1,1,12,4a7.86,7.86,0,0,1,6,2.78L16.34,8.25a1,1,0,0,0-.27,1.11A1,1,0,0,0,17,10h4.5a1,1,0,0,0,1-1V5A1,1,0,0,0,21.91,4.09Z" fill="rgb(17, 17, 17)"/></svg>
            </div>
        </div>
        <div v-else class="advantages _container">
            <div class="advantage adv-skeleton"></div>
            <div class="advantage adv-skeleton"></div>
            <div class="advantage adv-skeleton"></div>
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
        const data = ref({data: {}, loading: true, errors: null})
        const {find} = useStrapi();
    //     try{
    //     const {find} = useStrapi();
    //     let response = await find('advantage?populate[0]=icon1&populate[1]=icon2&populate[2]=icon3');
    //     data.value.data = response.data.attributes;
    //     data.value.loading = false;
    //   } catch {
    //     data.value.loading = false;
    //     console.error('data fetch error')
    //   }
        const {data: adv, error, refresh} = await useAsyncData('advantages', ()=> find('advantage?populate[0]=icon1&populate[1]=icon2&populate[2]=icon3'))
        if(adv.value){
            data.value.data = adv.value.data;
            data.value.loading = false;
            console.log(adv.value.data)
        } else if (error) {
            data.value.errors = error;
            data.value.loading = false;
            console.log(error)
        }

        async function reloadAdv (){
            data.value.loading = true;
            data.value.errors = null;
            await refresh()
            if(adv.value){
                data.value.data = adv.value.data;
                data.value.loading = false;
            } else if (error) {
                data.value.errors = error;
                data.value.loading = false;
                data.log( error)
            }

        }
      return {data, reloadAdv}
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
    .adv-skeleton{
        height: 200px;
        background-color: gray;
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