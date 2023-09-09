<template>
    <section class="paginator-section _container">
        <div v-if="pages.current && pages.data.pagination" class="paginator">
            <div class="prev"><NuxtLink v-if="+pages.current - 1 > 0" :to="'page-'+(+pages.current - 1)">&lt;</NuxtLink></div>
            <div class="pages">
                <div class="first"><NuxtLink :to="'page-1'">1</NuxtLink></div>
                <div class="between">
                    
                    <div class="between-item">
                        <NuxtLink v-if="+pages.current - 2 >= 1" :to="'page-'+(+pages.current - 2)">{{pages.current - 2}}</NuxtLink>

                    </div>
                    <div class="between-item">
                        <NuxtLink v-if="+pages.current - 1 >= 1" :to="'page-'+(+pages.current - 1)">{{pages.current - 1}}</NuxtLink>
                        <!-- {{ pages.current - 1 >= 1 ? pages.current - 1 : '' }} -->
                    </div>
                    <div class="between-item between-active">
                        {{ pages.current }}
                    </div>
                    <div class="between-item">
                        <NuxtLink v-if="+pages.current + 1 <= +pages.data.pagination.pageCount" :to="'page-'+(+pages.current+1)">{{+pages.current+1}}</NuxtLink>
                        <!-- {{ +pages.current + 1 <= +pages.data.pagination.pageCount  ? +pages.current + 1 : '' }} -->
                    </div>
                    <div class="between-item">
                        <NuxtLink v-if="+pages.current + 2 <= +pages.data.pagination.pageCount" :to="'page-'+(+pages.current+2)">{{+pages.current+2}}</NuxtLink>
                        <!-- {{ +pages.current + 2 <= +pages.data.pagination.pageCount ? +pages.current + 2 : '' }} -->
                    </div>
                </div>
                <div class="last"><NuxtLink :to="'page-'+pages.data.pagination.pageCount">{{ pages.data.pagination.pageCount }}</NuxtLink></div>
            </div>
            <div class="next"><NuxtLink v-if="+pages.current + 1 <= pages.data.pagination.pageCount" :to="'page-'+(+pages.current + 1)">&gt;</NuxtLink></div>
        </div>
    </section>
</template>

<script>
import { usePages } from '~/state/states';
export default {
    setup () {
        const pages = usePages()
        return {pages}
    }
}
</script>

<style lang="scss">
    .paginator{
        display: flex;
        justify-content: space-between;
        gap: 15px;
        .prev, .next{
            padding: 7px 12px;
            background-color: black;
            color: white;
            border-radius: 15px;
            a{
                    color: white;
                }
        }
        .pages{
            flex: 1 0 auto;
            display: flex;
            justify-content: space-between;
            .first, .last{
                padding: 7px 12px;
                background-color: black;
                color: white;
                border-radius: 15px;
                a{
                    color: white;
                }
            }
            .between{
                display: flex;
                justify-content: space-between;
                gap: 10px;
                .between-item{
                min-width: 31px;
                padding: 7px 12px;
                box-sizing: border-box;
                background-color: black;
                color: white;
                border-radius: 15px;
                }
                a{
                    color: white;
                }
                .between-active{
                background-color: rgb(255, 187, 0);
                color: rgb(17, 17, 17);
                }
            }
            
        }
    }
</style>
