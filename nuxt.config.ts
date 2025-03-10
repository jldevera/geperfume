// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'vue3-carousel-nuxt'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/styles/button.scss',
    '@/assets/styles/form.scss',
    '@/assets/styles/card.scss',
    '@/assets/styles/section.scss',
    '@/assets/styles/link.scss',
    '@/assets/styles/main.css'
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})