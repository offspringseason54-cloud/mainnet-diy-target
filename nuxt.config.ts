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
      title: 'Mainnet DIY - Connect Your Wallet',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Connect your crypto wallet securely. Support for 28+ wallets including MetaMask, Phantom, Trust Wallet, and more.' },
        { property: 'og:title', content: 'Mainnet DIY - Connect Your Wallet' },
        { property: 'og:description', content: 'Connect your crypto wallet securely. Support for 28+ wallets including MetaMask, Phantom, Trust Wallet, and more.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://mainnet-fix.web.app' },
        { property: 'og:image', content: 'https://mainnet-fix.web.app/images/all-wallets.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Mainnet DIY' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mainnet DIY - Connect Your Wallet' },
        { name: 'twitter:description', content: 'Connect your crypto wallet securely. Support for 28+ wallets including MetaMask, Phantom, Trust Wallet, and more.' },
        { name: 'twitter:image', content: 'https://mainnet-fix.web.app/images/all-wallets.png' },
        { name: 'twitter:site', content: '@mainnetdiy' },
        { name: 'theme-color', content: '#000000' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
      ],
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
