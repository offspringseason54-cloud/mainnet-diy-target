<template>
  <div>
    <!-- New Section with Borders -->
    <div class="border-y border-[#585858]">
      <div
        class="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#585858] text-white"
      >
        <!-- Left box -->
        <div
          class="w-full lg:w-1/2 flex"
          style="line-height: 120%"
        >
          <img
            class="w-full object-cover"
            :class="[
              'h-[220px] sm:h-[300px] lg:h-[400px]',
              'max-h-[400px]'
            ]"
            src="https://tangem.com/_astro/user.cMnNiLhu_ZoSmmv.webp"
            alt=""
          />
        </div>
        <!-- Right box -->
        <div
          class="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:px-[75px] text-base sm:text-lg"
          style="line-height: 120%"
        >
          <h2 class="mb-6 sm:mb-8 md:text-[56px] text-[30px] font-bold" style="line-height: 120%">
            <span class="text-[#6c6c70] text_gradient">Guaranteed </span> <br />
            for 25+ years
          </h2>
          <div class="text-[#6c6c70]">
            <span class="text-white">Your Tangem hardware wallet can last for at least 25 years with proper care. </span>
            Its monolithic design ensures the chip remains functional, even in extreme conditions.
          </div>
          <div class="flex flex-wrap items-center gap-6 sm:gap-10 mt-8 sm:mt-10">
            <a href="/connect" class="btn-primary"> Connect Tangem </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>