<template>
    <NuxtLink :to="''+id">
        <div class="product">
        <div class="product__img">
            <img :src="img ? 'http://localhost:1337'+img.attributes.url : ''" alt="">
        </div>
        <div class="line">
            <div class="product__title">{{ title }}</div>
            <div class="product__price">{{price}}$</div>
        </div>
        <div class="product__details">{{ details }}</div>
        </div>
    </NuxtLink>
</template>

<script>
// import { NuxtLink } from '~/.nuxt/components';
export default {
    name: 'product',
    props: [
        'title',
        'details',
        'img',
        'price',
        'id'
    ]
}
</script>

<style lang="scss">
    .product{
            cursor: pointer;
            background-color: white;
            padding: 15px;
            box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.213);
            border-radius: 5px;
            transition-property: box-shadow, transform;
            color: black;
            transition-duration: .3s, .3s;
            &:hover{
                box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.213);
                transform: scale(1.05);
            }
            .product__img{
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: center;
                margin-bottom: 10px;
                img{
                    will-change: transform;
                    object-fit: cover;
                    object-position: center;
                    height: 100%;
                    width: 100%;
                }
            }
            .line{
                display: flex;
                justify-content: space-between;
                align-items:center;
                margin-bottom: 20px;
                .product__title{
                    font-size: 20px;
                }
                .product__price{
                    color: white;
                    background-color: black;
                    padding: 3px 7px;
                    border-radius: 10px;
                }
            }
            .product__details{
                background-color: rgb(241, 231, 211);
                padding: 10px;
                border-radius: 10px;
            }
        }
</style>
    