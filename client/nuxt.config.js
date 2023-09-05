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
        { name: 'description', content: 'ООО "Алл-Трейд" занимается продажей и поставкой абразивных и строительных материалов. На сайте находится информация о компании, продукции и контакты' },
        { name: "msapplication-TileColor", content: "#da532c"},
        { name: "theme-color", content: "#ffffff"}
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href:"/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
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
      language: 'ru', // prefer more explicit language codes like `en-AU` over `en`
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
