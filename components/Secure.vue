<template>
  <section class="border-b border-[#585858]">
    <div class="container mx-auto lg:px-20 px-5">
      <div class="w-full flex flex-col lg:flex-row justify-between items-center my-10 lg:my-20 gap-8">
        <div class="w-full lg:w-4/12 mb-6 lg:mb-0">
          <h4
            class="text-[#6c6c70] text-base sm:text-lg lg:w-8/12"
            style="line-height: 120%"
          >
            <span class="text-white"
              >A Tangem Wallet set can contain up to three cards</span
            >
            or a ring and two cards—each providing equal access like three
            identical keys.
          </h4>
        </div>
        <div class="w-full lg:w-8/12 flex justify-center">
          <img
            src="https://tangem.com/_astro/desktop.HhB-KJCi_1PSA6S.webp"
            alt=""
            class="w-full max-w-md lg:max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="w-full">
    <div class="container mx-auto px-5 lg:px-20 my-16 lg:my-[180px]">
      <!-- Title -->
      <h2 class="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
        <span class="text_gradient text-transparent">Smart private</span>
        <span class="text-white"> key backup.</span>
      </h2>

      <h4
        class="text-[#6c6c70] text-base sm:text-lg lg:text-lg lg:w-3/12 my-10 lg:my-20"
        style="line-height: 120%"
      >
        Cutting-edge technology developed by Tangem engineers.
      </h4>

      <!-- Feature List -->
      <ol class="text-white flex flex-col md:flex-row gap-8 text-base lg:text-lg list-none">
        <li class="flex md:block items-start md:items-stretch">
          <div
            class="border border-[#585858] rounded-lg w-10 h-10 bg-neutral-900 flex items-center justify-center mb-3 md:mb-5 shrink-0"
          >
            01
          </div>
          <div class="md:w-9/12 ml-4 md:ml-0">
            <span class="text-[#6c6c70]">The chip </span>
            <span class="text-white font-medium"
              >generates a random, non-extractable private key.</span
            >
          </div>
        </li>
        <li class="flex md:block items-start md:items-stretch">
          <div
            class="border border-[#585858] rounded-lg w-10 h-10 bg-neutral-900 flex items-center justify-center mb-3 md:mb-5 shrink-0"
          >
            02
          </div>
          <div class="md:w-9/12 ml-4 md:ml-0">
            <span class="text-white font-medium"
              >Tangem devices establish a secure connection</span
            >
            <span class="text-[#6c6c70]">
              to transfer your encrypted private key.</span
            >
          </div>
        </li>
        <li class="flex md:block items-start md:items-stretch">
          <div
            class="border border-[#585858] rounded-lg w-10 h-10 bg-neutral-900 flex items-center justify-center mb-3 md:mb-5 shrink-0"
          >
            03
          </div>
          <div class="md:w-9/12 ml-4 md:ml-0">
            <span class="text-[#6c6c70]"
              >The key is stored on the chip, and
            </span>
            <span class="text-white font-medium">no other copies</span>
            <span class="text-[#6c6c70]"> exist across space and time.</span>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>