<template>
  <div class="">
    <!-- Hero Section -->
    <div class="mx-auto max-w-screen-2xl lg:px-20 px-5">
      <div
      class="w-full my-20 lg:my-[200px] lg:flex justify-center text-[30px] lg:text-[56px] leading-none font-bold text-[#f0f0f0]"
    >
      <div class="lg:w-10/12 xl:w-8/12">
        <p class="space-y-2 leading-[110%] lg:leading-[120%] text_gradient">
          <span class="block">
            Tangem redefines the crypto wallet experience with top-level
            security, simplicity, and convenience.
          </span>
          <span class="block">
            Enjoy total independence when managing your digital assets on the go.
          </span>
          <span class="block">
            We break down barriers for newcomers and enhance self-custody for
            experts.
          </span>
        </p>
      </div>
    </div>
    </div>

    <!-- New Section with Borders -->
    <div class="border-y border-[#585858]">
      <div class="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#585858] text-white">
        <!-- Left box -->
        <div class="w-full lg:w-1/2 p-8 lg:p-[125px] text-[#6c6c70] text-base lg:text-lg" style="line-height: 120%;">
          <span class="text-white font-bold">During activation</span>, the Tangem chip generates a random private key
          offline, ensuring it cannot be compromised.
        </div>
        <!-- Right box -->
        <div class="w-full lg:w-1/2 p-8 lg:p-[125px] text-[#6c6c70] text-base lg:text-lg" style="line-height: 240%;">
          <span class="text-white">Set</span> up a hardware wallet in <br>
          <span class="text-white text-[32px] lg:text-[56px] font-bold">3 minutes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.text_gradient {
  background: linear-gradient(90deg,#525255,#f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
