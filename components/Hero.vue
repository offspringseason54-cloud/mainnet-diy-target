<template>
  <section class="relative bg-black overflow-hidden">
    <!-- Video Hero -->
    <div class="w-full flex justify-center items-end relative z-10 h-[400px] lg:h-[600px]">
      <video
        src="/video/hero-scanning.mp4"
        autoplay
        muted
        playsinline
        :controls="false"
        class="w-full object-cover max-w-5xl h-[350px] sm:h-[400px] lg:h-[500px]"
        style="pointer-events: none;"
        preload="auto"
      ></video>
    </div>
    <!-- Title and Content -->
    <div class="relative z-20 -mt-16 sm:-mt-24 lg:-mt-32 flex flex-col items-center text-center px-4 mb-20">
      <h1 class="text-4xl md:text-[96px] font-bold mb-4" style="line-height: 100%;">
        <span class="text_gradient">Tangem</span>
        <span class="text_white"> — Your Secure Crypto &amp; Hardware Wallet</span>
      </h1>
      <p class="hero__caption text_center text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mb-6">
        Slim as a bank card, secure as a bank vault. Store, buy, earn, transfer and swap thousands of coins and tokens.
      </p>
      <div class="hero__buy flex flex-col sm:flex-row items-center gap-4 mb-2">
        
        <a href="/connect" class="btn-primary"> Connect Tangem </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.text_gradient {
  background: linear-gradient(90deg,#525255,#f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.text_white {
  color: #fff;
}
.hero__caption.text_center {
  text-align: center;
}
.button_primary {
  transition: background 0.3s;
}
@media (max-width: 640px) {
  .hero__title {
    font-size: 96px
  }
}
</style>