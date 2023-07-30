<template>
    <div class="header__search">
        <div class="search-input">
            <input ref="input" :class="{transition: open}" v-model="search" type="text">
        </div>
        <div @click="showInput" class="search-button">
            <svg v-show="!open" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32px" class="stroke-000000"></path><path d="M338.29 338.29 448 448" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px" class="stroke-000000"></path></svg>
            <svg v-show="open" height="16" fill="currentColor" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><polygon fill-rule="evenodd" points="8 9.414 3.707 13.707 2.293 12.293 6.586 8 2.293 3.707 3.707 2.293 8 6.586 12.293 2.293 13.707 3.707 9.414 8 13.707 12.293 12.293 13.707 8 9.414"/></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-search',
    data: () =>{
        return {
            search: '',
            open: false,
        }
    },
    methods: {
        showInput () {
            this.open = !this.open;
            this.$refs.input.focus()
            // if (this.open){
            //     this.$refs.input.focus()
            // }
        }
    },

    // watch: {
    //     search () {
    //         console.log(this.search)
    //     }
    // }
}

</script>

<style lang="scss">
    .header__search{
        display: flex;
        align-items: center;
        .search-input{
            padding-left: 20px;
            background: inherit;
            input{
                height: 20px;
                padding: 3px;
                margin-right: 15px;
                border: 2px solid rgb(17, 17, 17);
                border-radius: 10px;
                width: 0px;
                transition-property: width;
                transition-duration: 0.5s;
                opacity: 0;
            }
            .transition{
                width: 200px;
                opacity: 1;
            } 
        }
        .search-button{
            cursor: pointer;
            height: 40px;
            width: 40px;
            background-color: rgb(17, 17, 17);
            border-radius: 7px;
            display: flex;
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
    }
    @media(max-width: 470px){
        .search-input{
            .transition{
                width: auto !important;
            }
        }
        
    }
</style>