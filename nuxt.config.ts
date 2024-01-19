export default defineNuxtConfig({
  site: {
    url: 'https://anna-in-travel.ru',
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@artmizu/yandex-metrika-nuxt'
  ],
})
