<template>
    <main>
        <section v-if="!general.loading && !general.errors" class="contacts-section">
            <div class="contacts _container">
                <div class="photo">
                    <img :src="'https://all-trader.ru'+ general.data.attributes.photo.data.attributes.url" alt="">
                </div>
                <p class="texts">
                    {{ general.data.attributes.description || '' }}
                </p>
            </div>
        </section>
    </main>
</template>

<script>
import { useGeneral } from '~/state/states';
export default {
    async setup () {
        const general = useGeneral();
        return {general}
    }
}
</script>

<style lang="scss">
    .contacts{
        min-height: calc(100vh - 130px);
        .photo{
            width: 300px;
            padding: 10px;

            img{
                width: 100%;
                float: left;
                margin:10px;
                margin-left: 0;
                border-radius: 15px;
            }
        }
        .texts{
            font-size: 15px;
            line-height: 25px;
        }
    }
</style>