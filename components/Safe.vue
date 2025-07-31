<template>
  <div class="mx-auto max-w-screen-2xl border-y border-[#585858]">
    <div class="w-full flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#585858]">
      <!-- Left: Image with Text Overlay -->
      <div class="relative w-full lg:w-1/2 min-h-[220px] sm:min-h-[320px]">
        <img
          src="https://tangem.com/img/home/protection/stone1.jpg"
          alt=""
          class="w-full h-[220px] sm:h-[320px] lg:h-full object-cover mb-0 rounded"
        />
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <div class="bg-black/60 rounded px-3 py-2 sm:px-6 sm:py-4 text-center">
            <p class="text-white text-xl sm:text-3xl lg:text-[50px] mb-1 sm:mb-2 font-bold">Zero out of 4,000,000</p>
            <p class="text-[#6c6c70] text-sm sm:text-base lg:text-[21px]">cards hacked since creation</p>
          </div>
        </div>
      </div>
      <!-- Right: Text Content -->
      <div class="flex flex-col justify-center w-full lg:w-1/2 px-4 sm:px-8 lg:px-20 py-6 sm:py-10 lg:py-8">
        <h4
          class="text-[#6c6c70] text-base sm:text-lg lg:text-xl font-bold mb-6 sm:mb-10"
          style="line-height: 120%"
        >
          Cutting-edge technology developed by Tangem engineers.
        </h4>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-semibold">
          <div class="w-full sm:w-1/2">
            <img class="mb-2 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12" src="https://tangem.com/svg/icons/protection/faceid.svg" alt="">
            <p class="text-white text-sm sm:text-base">Biometric <span class="text-[#6c6c70]">security</span></p>
          </div>
          <div class="w-full sm:w-1/2">
            <img class="mb-2 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12" src="https://tangem.com/svg/icons/protection/password.svg" alt="">
            <p class="text-white text-sm sm:text-base">Access <span class="text-[#6c6c70]">code protection</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>