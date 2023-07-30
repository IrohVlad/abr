<template>
    <div class="advantage" >
        <div class="icon">
            {{ icon }}
        </div>
        <div class="title">
            {{ title }}
        </div>
        <div class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'advantage',
    props: [
        'icon',
        'title',
        'text'
    ]
}
</script>

<style lang="scss">
    .advantage{
                cursor: pointer;
                border-radius: 10px;
                animation: cards-anim 10s ease-in-out;
                animation-iteration-count: infinite;
                animation-fill-mode: forwards;
                box-sizing:border-box;
                // mawidth: 300px;
                padding: 20px;
                flex: 0 1 250px; 
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height: 250px;
                height: fit-content;
                background-color: rgb(17, 17, 17);
                .icon{


                    height: 100px;
                    svg{
                        width: 100%;
                        height: 100%;
                    }
                }
                .title{
                    color: rgb(241, 231, 211);
                    font-size: 22px;
                    font-weight: 500;
                    text-align: center;
                    margin-top: 30px;
                }
                .text{
                    transition-property: max-height, opacity;
                    transition-duration: .7s, .7s;
                    transition-delay: 0, 3s;
                    margin-top: 14px;
                    color: white;
                    font-size: 14px;
                    line-height: 20px;
                    // display: none;
                    overflow: hidden;
                    opacity: 0;
                    max-height: 0px;
                }
                &:hover{
                    .text{
                        // display: block;
                        opacity: 1;
                        max-height: 1000px;
                    }
                }
            }
</style>