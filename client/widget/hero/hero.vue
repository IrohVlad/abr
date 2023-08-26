<script>
import heroSlide from '../../feature/hero-slide/hero-slide'
import { useSlides } from '~/state/states';
import { ContentLoader } from "vue-content-loader"
export default {
    name: 'hero',
    components: {
        heroSlide,
        ContentLoader
    },
    // data(){
    //     return{
    //         slideIndex: 0,
    //         scroll: false
    //     }
    // }, 
    async setup(){
        const slides = useSlides();
        const {find} = useStrapi();
        const slideIndex = ref(0);
        const scroll = ref(false);

        function onscroll(){
            if(window.scrollY == 0){
                    scroll.value = false;
            } else{
                    scroll.value = true;
            }
        }
        onMounted(()=>{
            document.addEventListener('scroll', onscroll)
            setInterval(()=>{
                if(!slides.value.loading){
                    if(slideIndex.value == slides.value.data.length - 1){
                        slideIndex.value = 0;
                    } else {
                        slideIndex.value++
                    }
                }
            }, 10000)
        })

        const {data: sli, error} = await useAsyncData('slides', ()=> find('slides?populate=*'))
        if(sli.value){
            slides.value.data = sli.value.data;
            slides.value.loading = false;
        } else if (error) {
            slides.value.errors = error;
            slides.value.loading = false;
            console.log(error)
        }
      return {slideIndex, slides, scroll, onscroll}
    },
    
}
</script>
<template>
    <section class="hero-section">
        <div :class='scroll ? "background scrolled" : "background"'>
            <div class="slide-status">
                <div class="line"></div>
            </div>
            
        </div>
        <heroSlide
            v-if="!slides.loading && slides.data.length && !slides.errors"
            :text="slides.data[slideIndex].attributes.text" 
            :subtext="slides.data[slideIndex].attributes.description" 
            :img="'https://all-trader.ru'+slides.data[slideIndex].attributes.Photo.data.attributes.url "
        />
        <div v-else-if="slides.errors" class="reload">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M21.91,4.09a1,1,0,0,0-1.07.16L19.48,5.46A9.81,9.81,0,0,0,12,2a10,10,0,1,0,9.42,13.33,1,1,0,0,0-1.89-.66A8,8,0,1,1,12,4a7.86,7.86,0,0,1,6,2.78L16.34,8.25a1,1,0,0,0-.27,1.11A1,1,0,0,0,17,10h4.5a1,1,0,0,0,1-1V5A1,1,0,0,0,21.91,4.09Z" fill="white"/></svg>
        </div>
        <div v-else class="hero _container skeleton">
            <div class='texts'>
                <div class="hero-title"></div>
                <div class="hero-subtitle"></div>
            </div>
            <div class="hero-img">

            </div>
        </div>

    </section>
</template>

<style lang="scss">
@keyframes back-in{
    0%{
        width: 30px;
    }
    100%{
        width: 40%;
    }
}
    .skeleton{
        .hero-title{
            height: 30px;
            width: 250px;
            border-radius: 10px;
            background-color: gray;
        }
        .hero-subtitle{
            height: 20px;
            border-radius: 5px;
            width: 200px;
            background-color: gray;
        }
        .hero-img{
            background-color: gray;
            height: 350px;
            border-radius: 10px;
            width: 350px;
        }
    }
    .hero-section{
        margin-top: 130px;
        position: relative;
        height: calc(100vh - 130px);
        .background{
            position: absolute;
            overflow: hidden;
            top: 0;
            right: 0;
            height: 100%;
            animation: back-in 0.8s ease-in-out;
            animation-delay: 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            background-color:rgb(17, 17, 17);
            transition-property: border-radius, top;
            transition-duration: 1s, 1s;
            &.scrolled{
                border-bottom-left-radius: 200px;
                // top: -50px;
            }
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .slide-status{
                width: 5px;
                height: 50%;
                margin: 0 15px;
                background-color: white;
                border-radius: 5px;
                .line{
                    transition-property: height;
                    transition-duration: 0.5s;
                    transition-timing-function: ease;
                    width: 100%;
                    height: 30%;
                    background-color: rgb(255, 187, 0);
                    border-radius: 5px;
                }
            }
        }
        
    }
    @media(max-width: 650px){
        .hero-section{
       height: fit-content;
        .hero{
            flex-direction: column;
            align-items:start;
            justify-content: flex-start;


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
        .background{
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            animation: back-in 0.8s ease-in-out;
            animation-delay: 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            background-color:inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .slide-status{
                width: 5px;
                height: 50%;
                margin: 0 15px;
                background-color: white;
                border-radius: 5px;
                .line{
                    transition-property: height;
                    transition-duration: 0.5s;
                    transition-timing-function: ease;
                    width: 100%;
                    height: 30%;
                    background-color: rgb(255, 187, 0);
                    border-radius: 5px;
                }
            }
        }
        
    }
    }
    @media(max-height: 600px){
        .hero-section{
       height: fit-content;
        .hero{
            flex-direction: column;
            align-items:start;
            justify-content: flex-start;


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
        .background{
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            animation: back-in 0.8s ease-in-out;
            animation-delay: 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            background-color:inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .slide-status{
                width: 5px;
                height: 50%;
                margin: 0 15px;
                background-color: white;
                border-radius: 5px;
                .line{
                    transition-property: height;
                    transition-duration: 0.5s;
                    transition-timing-function: ease;
                    width: 100%;
                    height: 30%;
                    background-color: rgb(255, 187, 0);
                    border-radius: 5px;
                }
            }
        }
        
    }
    }
</style>