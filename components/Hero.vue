<template>
  <section class="relative bg-black overflow-hidden pt-[400px]">
    <!-- Left Image -->
    <img
      src="https://lightchain.ai/images/banner/light-left-svg.svg"
      alt="Light Left"
      class="absolute left-0 top-0 h-full max-h-[700px] w-auto z-10 pointer-events-none"
      style="object-fit: contain;"
    />
    <!-- Right Image -->
    <img
      src="https://lightchain.ai/images/banner/light-right-svg.svg"
      alt="Light Right"
      class="absolute right-0 top-0 h-full max-h-[700px] w-auto z-10 pointer-events-none"
      style="object-fit: contain;"
    />

    <!-- Title and Content -->
    <div class="relative z-20 -mt-16 sm:-mt-24 lg:-mt-32 flex flex-col items-center text-center px-4 mb-20">
      <h1 class="text-4xl md:text-[96px] font-bold mb-4" style="line-height: 100%;">
        <span class="text_gradient">Lightchain Protocol</span>
        <span class="text_white"> — Bridging AI with</span>
      </h1>
      <p class="hero__caption text_center text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mb-6">
        Revolutionizing intelligence through decentralized innovation.
      </p>
      <div class="hero__buy flex flex-col sm:flex-row items-center gap-4 mb-2">
        <a href="/connect" class="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition"> Claim presale token </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #ff12fb -30%, #e3c1f3 30%, #7064e9 90%);
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