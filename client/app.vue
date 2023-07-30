<template>
  <div class="_wrapper">
    <NuxtLayout>
      <vheader/>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
import header from './widget/header/header'
export default {
    components: {
        vheader: header
    },
    async setup(){
      const {find} = useStrapi();
      let response = await find('slides?populate=*');
      console.log(response)
    }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900');
  *{
    font-family: Inter;
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  ._no-select{
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  ._wrapper{
    min-height: 100vh;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgb(241, 231, 211);
  }
  ._container{
    max-width: 1200px;
    padding: 3px 7px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  @media(max-width: 600px) {
    ._container{
      padding: 5px 15px;
    }
  }
</style>