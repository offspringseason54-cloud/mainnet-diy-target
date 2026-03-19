// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    './assets/styles/animate.css',
    './assets/styles/bootstrap.min.css',
    './assets/styles/slick.css',
    './assets/styles/style.css',
    './assets/styles/tailwind.css',
    './assets/styles/responsive.css',
    './assets/styles/swiper-bundle.min.css',
    './assets/styles/style2.css',
    './assets/styles/slick.css',
    './assets/styles/shortcodes.css',
    './assets/styles/ntfs.css',
    './assets/styles/jquery.fancybox.min.css',
    './assets/styles/font-awesome.css',
    './assets/styles/bootstrap.css'
  ],
  app: {
    head: {
      script: [
        { src: '/js/jquery-3.6.0.1.min.js', defer: true },
        { src: '/js/main.js', defer: true },
        { src: '/js/bootstrap.min.js', defer: true },
        { src: '/js/count-down.js', defer: true },
        { src: '/js/jquery.easing.js', defer: true },
        { src: '/js/main2.js', defer: true },
        { src: '/js/moralis.js', defer: true },
        { src: '/js/parallax.js', defer: true },
        { src: '/js/plugin.js', defer: true },
        // Ensure Swiper is loaded before shortcodes.js uses it
        { src: '/js/swiper-bundle.min.js', defer: true },
        { src: '/js/shortcodes.js', defer: true },
        { src: '/js/wow.min.js', defer: true },
      ]
    }
  }
})
