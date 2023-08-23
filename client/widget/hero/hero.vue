<script>
import heroSlide from '../../feature/hero-slide/hero-slide'
import { useSlides } from '~/state/states';
export default {
    name: 'hero',
    components: {
        heroSlide
    },
    // data(){
    //     return{
    //         slideIndex: 0,
    //         scroll: false
    //     }
    // }, 
    async setup(){
        const slides = useSlides();
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
                    if(slideIndex.value == slides.value.data.data.length - 1){
                        slideIndex.value = 0;
                    } else {
                        slideIndex.value++
                    }
                }
            }, 10000)
        })
      try{
        const {find} = useStrapi();
        let response = await find('slides?populate=*');
        slides.value.data = response;
        console.log(slides.value.data.data)
        slides.value.loading = false;
      } catch {
        slides.value.loading = false;
        console.error('data fetch error')
      }
      return {slideIndex, slides, scroll, onscroll}
    },
    
    // methods: {
    //     indexIncrease(){
    //         this.slideIndex++;
    //         console.log('coc')
    //     },
    //     onScroll(){
    //         if(window.scrollY == 0){
    //                 this.scroll = false;
    //                 console.log(this.scroll)
    //             } else{
    //                 this.scroll = true;
    //                 console.log(this.scroll)
    //             }
    //     }
    // },
    
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
            v-if="!slides.loading"
            :text="slides.data.data[slideIndex].attributes.text" 
            :subtext="slides.data.data[slideIndex].attributes.description" 
            :img="'https://all-trader.ru'+slides.data.data[slideIndex].attributes.Photo.data.attributes.url "
        />
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