<template>
    <transition name="slide-fade" mode="out-in">
        <div :key="text" class="hero _container">
            <div class='texts'>
            <div class="hero-title">{{ text }}</div>
            <div class="hero-subtitle">{{subtext}}</div>
            </div>
            <div class="hero-img">
                <img :src="img" alt="">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'hero-slide',
    props:{
        text: String,
        subtext: String,
        img: String
    },
    data(){
        return{
        }
    },
    watch:{

    }
}
</script>

<style lang="scss">


.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-from{
    transform: translateY(10px);
    opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
@keyframes show{
    0%{
        opacity: 0;
        transform: translateY(10px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}
        .hero{
            animation: show .4s ease 0 1 forwards;
            height: 100%;
            display: flex;
            align-items:center;
            justify-content: space-between;
            gap: 30px;
            .texts{
                width: 50%;
                .hero-title{
                    font-size: 50px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .hero-subtitle{
                    font-size: 13px;
                    color: gray;

                }
            }
            .hero-img{
                position: relative;
                z-index: 5;
                img{
                    max-height: 100%;
                    max-width: 100%;
                }
            }
        }
        @media(max-width: 650px){



            .texts{
                margin-top: 25px;
                width: calc(100% - 30px);
                .hero-title{
                    font-size: 45px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .hero-subtitle{
                    font-size: 13px;
                    color: gray;

                }
            }
            .hero-img{
                position: relative;
                z-index: 5;
                padding: 0 20px;
                img{
                    max-height: 100%;
                    max-width: 100%;
                }
            }
        }
</style>