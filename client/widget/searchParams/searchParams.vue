<template>
    <section class="params-section _container">
        <div class="params">
            <div class="param">
                <input type="radio">
                <div class="label">
                    Цена
                </div>
            </div>
            <div class="param">
                <input type="radio">
                <div class="label">
                    Цена
                </div>
            </div>
            <div class="param">
                <input type="radio">
                <div class="label">
                    Цена
                </div>
            </div>
            <div class="param">
                <input type="radio">
                <div class="label">
                    Цена
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'searchParams',
    setup () {

    }
}
</script>

<style scoped lang="scss">
    .params{
        background-color: rgb(17, 17, 17);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px;
        border-radius: 10px;
        .param{
            display: flex;
            align-items:center;
            color: white;
            input{
                margin-right: 10px;
            }
        }
    }
</style>