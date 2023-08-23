<template>
    <header>
        <div class="header _container">
            <ul class="header__upper-line">
               <li class="line-item">
                <a v-if="!general.loading" target="_blank" :href="'mailto:'+general.data.attributes.email">
                    <div class="icon">
                    <img src="./mail.svg" alt="mail"/>
                    </div>
                    {{ general.data.attributes.email }}
                </a>
                <content-loader 
                    v-else
                    viewBox="0 0 100 23"
                    width="100"
                    height="23"
                    :speed="2"
                    primaryColor="#363636"
                    secondaryColor="#cfcece"
                >
                    <rect x="0" y="5" rx="6" ry="6" width="100" height="18" />
                </content-loader>
               </li> 
               <li class="line-item">
                <a v-if="!general.loading" :href="'mailto:'+general.data.attributes.number">
                    <div class="icon">
                    <img src="./phone.svg" alt="phone"/>
                    </div>
                    +{{ general.data.attributes.number }}
                </a>
                <content-loader 
                    v-else
                    viewBox="0 0 100 23"
                    width="100"
                    height="23"
                    :speed="2"
                    primaryColor="#363636"
                    secondaryColor="#cfcece"
                >
                    <rect x="0" y="5" rx="6" ry="6" width="100" height="18" />
                </content-loader>
               </li> 
            </ul>
            <div class="header__bottom-line">
                <div class="header-logo _no-select">
                    <!-- <img src="" alt="logo"/> -->
                    AllTrade
                </div>
                <nav>
                    <ul class="nav">
                        <NuxtLink to="/" class="nav-item _no-select">Главная</NuxtLink>
                    <NuxtLink to="/contacts" class="nav-item _no-select">О нас</NuxtLink>
                    </ul>
                </nav>
                <div class="right">
                    <header-search/>
                    <div @click="openModal" class="nav-button">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,8H9A1,1,0,0,1,9,6H19a1,1,0,0,1,0,2Z" fill="currentColor"/><path d="M19,13H9a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" fill="currentColor"/><path d="M19,18H9a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z" fill="currentColor"/><circle cx="5" cy="7" fill="currentColor" r="1"/><circle cx="5" cy="12" fill="currentColor" r="1"/><circle cx="5" cy="17" fill="currentColor" r="1"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modal" ref="modal" @click="closeModal" class="header-modal">
            <div class="modal-area">
                <nav>
                <ul class="nav">
                    <NuxtLink to="/" class="nav-item _no-select">Главная</NuxtLink>
                    <NuxtLink to="/contacts" class="nav-item _no-select">О нас</NuxtLink>
                </ul>
            </nav>
            </div>
        </div>
    </header>
</template>

<script>
import headerSearch from '../../feature/headerSearch/headerSearch.vue'
import { useGeneral } from '~/state/states';
import { ContentLoader } from "vue-content-loader"
 export default {
    name: 'header',
    components: {
        headerSearch,
        ContentLoader
    },
    data() {
        return {
            modal: false
        }
    },
    setup () {
        const general = useGeneral();
        return {general}
    },
    methods: {
        openModal(){
            this.modal = true;
        },
        closeModal(e){
            if(e.target == this.$refs.modal){
                this.modal = false;
            }
            
        }
    }
 }

</script>

<style lang="scss">

header{
    @keyframes header-animate {
        0%{
            transform: translateY(100px);
        }
        100%{
            transform: translateY(0px);
        }
    }
    @keyframes header-animate2 {
        0%{
            transform: translateY(-300px);
        }
        100%{
            transform: translateY(30px);
        }
    }
    @keyframes modal {
        0%{
            background-color: none;
        }
        100%{
            background-color: rgba(17, 17, 17, 0.404);
        }
    }
    @keyframes modal {
        0%{
            background-color: none;
        }
        100%{
            background-color: rgba(17, 17, 17, 0.404);
        }
    }
    @keyframes modal-area {
        0%{
            transform: translateX(300px);
        }
        100%{
            transform: translateX(0px);
        }
    }
    background-color: rgb(17, 17, 17);
    position: fixed;
    width: 100%;
    z-index: 100;
    .header-modal{
        animation: modal 0.4s ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        color: white;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        height: 100vh;
        width: 100vw;

        .modal-area{
            animation: modal-area 0.4s ease-in-out;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            margin-left: auto;
            display: flex;
            align-items:center;
            justify-content: center;
            background-color: rgb(12, 12, 12);
            width: 300px;
            height: 100%;
            .nav{
                display: flex;
                flex-direction: column;
                .nav-item{
                    cursor: pointer;
                    transition-property: color;
                    transition-duration: 0.2s;
                    font-weight: 500;
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                    &:hover{
                        color: rgb(255, 187, 0);
                    }
                    &:active{
                        color: rgb(255, 123, 0);
                    }
                }
            }
        }
    }
    .header{
        height: 130px;
        padding: 20px 7px; 
        .header__upper-line{
            transform: translateY(-300px);
            animation: header-animate 0.8s ease-in-out;
            animation-delay: 1.8s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            display: flex;
            align-items: center;
            color: white;
            .line-item{
                &:not(:last-child){
                margin-right: 20px;
                }
                font-size: 14px;
                font-weight: 300;
                a{
                display: flex;
                align-items: center;
                color: white;
                .icon{
                    height: 20px;
                    width: 20px;
                    margin-right: 7px;
                    
                    img{
                        height:100%;
                        width: 100%;
                        color: green;
                    }
                }
                }
            }
        }
        .header__bottom-line{
            transform: translateY(-300px);
            animation: header-animate2 0.8s ease-in-out;
            animation-delay: 1s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            position: relative;
            z-index: 2;
            background-color: white;
            box-shadow: 1px 7px 15px rgba(17, 17, 17, 0.305);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 15px;
            border-radius: 10px;
            .header-logo{
                font-size: 20px;
                margin-right: 7px;
            }
            nav{
                width: auto;
                overflow-x: auto;
            }
            .nav{
                display: flex;
                align-items: center;
                .nav-item{
                    cursor: pointer;
                    color: rgb(19, 19, 19);
                    transition-property: color;
                    transition-duration: 0.2s;
                    font-weight: 500;
                    &:not(:last-child){
                        margin-right: 20px;
                    }
                    &:hover{
                        color: rgb(255, 187, 0);
                    }
                    &:active{
                        color: rgb(255, 123, 0);
                    }
                }
            }
            .right{
                display: flex;
                align-items: center;
                .nav-button{
                    display: none;
                }
                &>:not(:last-child){
                    margin-right: 15px;
                }
            }
        }
    }
}
@media(max-width: 650px){
    .header{
        min-height: 100px;
        padding: 20px 7px; 
        .header__upper-line{
            display: flex;
            align-items: center;
            color: white;
            .line-item{
                &:not(:last-child){
                margin-right: 20px;
                }
                font-size: 14px;
                font-weight: 300;
                display: flex;
                align-items: center;
                .icon{
                    height: 20px;
                    width: 20px;
                    margin-right: 7px;
                    img{
                        height:100%;
                        width: 100%;
                        color: green;
                    }
                }
            }
        }
        .header__bottom-line{
            transform: translate(0px, 30px);
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 15px;
            border-radius: 10px;
            .header-logo{
                font-size: 20px;
                margin-right: 7px;
            }
            nav{
                display: none;
            }
            .nav{
                display: flex;
                align-items: center;
                .nav-item{
                    cursor: pointer;
                    color: rgb(19, 19, 19);
                    transition-property: color;
                    transition-duration: 0.2s;
                    font-weight: 500;
                    &:not(:last-child){
                        margin-right: 20px;
                    }
                    &:hover{
                        color: rgb(255, 187, 0);
                    }
                    &:active{
                        color: rgb(255, 123, 0);
                    }
                }
            }
            .right{
                display: flex;
                align-items: center;
                .nav-button{
                    cursor: pointer;
                    height: 40px;
                    width: 40px;
                    background-color: rgb(17, 17, 17);
                    border-radius: 7px;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    transition-property: background-color, color;
                    transition-duration: 0.2s, 0.2s;
                    color: white;
                    &:hover{
                        background-color: rgb(255, 187, 0);
                        color: rgb(17, 17, 17);
                    }
                    &:active{
                        background-color: rgb(255, 123, 0);
                    }
                    svg{
                        height: 30px;
                        width: 30px;
                        color: inherit;
                    }
                }
                &>:not(:last-child){
                    margin-right: 15px;
                }
            }
        }
    }
}
</style>