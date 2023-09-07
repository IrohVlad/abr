<template>
    <main>
        <hero/>
        <advantages/>
    </main>
</template>

<script>
import hero from '~/widget/hero/hero.vue'
import advantages from '~/widget/advantages/advantages.vue'
// import searchParams from '~/widget/searchParams/searchParams.vue'
export default {
    components: {
        hero,
        advantages
        // searchParams
    }, 
    
}
</script>

