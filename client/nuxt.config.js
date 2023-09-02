// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'All-Trade',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'абразивы, абразивные материалы, шлефовальные материалы, алл трейд' },
        { name: 'description', content: 'ООО "Алл-Трейд" занимается продажей и поставкой абразивных и строительных материалов. На сайте находится информация о компании, продукции и контакты' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  extends: [
    "nuxt-seo-kit"
  ],
  modules: ['@nuxtjs/strapi'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://all-trader.store',
      siteName: 'All-Trade',
      siteDescription: 'ООО "Алл-Трейд" занимается продажей и поставкой абразивных и строительных материалов. На сайте находится информация о компании, продукции и контакты',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  strapi: {
    url: process.env.STRAPI_URL || 'https://all-trader.ru',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  }
})
