<template>
    <main>
        <section class="about-product-section _container">
            <div class="about-product">
                <div class="title">
                    {{ data.title }}
                </div>
                <div class="icon">
                    <img :src="'https://all-trader.ru'+data.photo.data.attributes.url" alt="">
                </div>
                <div class="line">
                    <div class="price">{{ data.price + '₽' }}</div>
                    <div v-html="$mdRenderer.render(data.details)" class="details"></div>
                </div>
                <div v-html="$mdRenderer.render(data.description)" class="desscription"></div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async setup(){
        const {findOne} = useStrapi();
        const params = useRoute()
        const data = ref({})

        try{
            let response = await findOne(`products`,
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
                        });
                        console.log(response)
                        data.value = response.data.attributes
        } catch {

        }
        return {data}
    }
}
</script>

<style lang="scss">
main{
    margin-top: 150px;
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