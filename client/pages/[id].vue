<template>
    <main>
        <section class="about-product-section _container">
            <div v-if="!data.loading && !data.errors" class="about-product">
                <div class="title">
                    {{ data.data.attributes.title }}
                </div>
                <div class="icon">
                    <img :src="'https://all-trader.ru'+data.data.attributes.photo.data.attributes.url" alt="">
                </div>
                <div class="line">
                    <div class="price">{{ data.data.attributes.price + '₽' }}</div>
                    <div v-html="$mdRenderer.render(data.data.attributes.details)" class="details"></div>
                </div>
                <div v-html="$mdRenderer.render(data.data.attributes.description)" class="desscription"></div>
            </div>
            <div v-else-if="data.errors" class="hero _container">
            <div @click="reloadProd" class="reload-hero">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M21.91,4.09a1,1,0,0,0-1.07.16L19.48,5.46A9.81,9.81,0,0,0,12,2a10,10,0,1,0,9.42,13.33,1,1,0,0,0-1.89-.66A8,8,0,1,1,12,4a7.86,7.86,0,0,1,6,2.78L16.34,8.25a1,1,0,0,0-.27,1.11A1,1,0,0,0,17,10h4.5a1,1,0,0,0,1-1V5A1,1,0,0,0,21.91,4.09Z" fill="rgb(17, 17, 17)"/></svg>
            </div>
        </div>
        </section>
    </main>
</template>

<script>
export default {
    async setup(){
        const {findOne} = useStrapi();
        const params = useRoute()
        const data = ref({data: {}, errors: null, loading: true})

        const {data: prod, error, refresh} = await useAsyncData('product',()=> findOne(`products`,
            params.params.id,
                        {
                            fields: [
                                'title',
                                'details',
                                'price',
                                'description'
                            ],
                            populate: [
                                'photo'
                            ]
                        }))
        if(prod.value){
            data.value.data = prod.value.data;
            data.value.loading = false
        } else if (error){
            console.log(error)
            data.value.errors = error;
            data.value.loading = false
        }

        async function reloadProd(){
            data.value.errors = null;
            data.value.loading = true;
            await refresh()
            if(prod.value){
                data.value.data = prod.value.data;
                data.value.loading = false
            } else if (error){
                data.value.errors = error;
                data.value.loading = false
            }
        }
        return {data, reloadProd}
    }
}
</script>

<style lang="scss">
main{
    // margin-top: 150px;
    .about-product-section{
        .about-product{
            .title{
                font-size: 35px;
                margin-bottom: 10px;
                font-weight: 500;
            }
            .icon{
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 10px;
                img{
                    max-height: 80vh;
                }
                background-color: white;
            }
            .line{
                margin-top: 20px;
                display: flex;
                align-items:center;
                gap: 15px;
                .price{
                    background-color: rgb(17, 17, 17);
                    color: white;
                    padding: 10px;
                    font-size: 30px;
                    border-radius: 10px;
                }
                .details{
                    border-radius: 10px;
                    width: 100%;
                    padding: 10px;
                    font-size: 20px;
                    background-color: rgb(207, 204, 197);
                }
            }
            .desscription{
                margin-top: 20px;
                p{
                    font-size: 20px;
                }
                li{
                    margin-left: 30px;
                    list-style: decimal;
                }
                p:has(img){
                    height: 400px;
                    margin-top: 20px;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    align-items:center;
                    border-radius: 10px;
                    img{
                        height: 100%;

                    }
                }
            }
        }
    }
}
</style>