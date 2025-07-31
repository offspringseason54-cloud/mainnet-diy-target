<template>
  <div>
    <!-- New Section with Borders -->
    <div class="border-y border-[#585858]">
      <div
        class="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#585858] text-white"
      >
        <!-- Left box -->
        <div
          class="w-full lg:w-1/2 p-6 sm:p-8 lg:p-[125px] text-base sm:text-lg"
          style="line-height: 120%"
        >
          <h2 class="mb-6 sm:mb-8 text-2xl sm:text-[30px] font-bold" style="line-height: 120%">
            <span class="text-[#6c6c70]">Independent</span> <br />
            firmware audits
          </h2>
          <div class="text-[#6c6c70]">
            <span class="font-bold"
              >The Tangem firmware underwent two independent audits — </span
            ><span class="text-white">one in 2018 by Kudelski Security </span>
            and another in 2023 by Riscure—both confirming it has no backdoors
            or vulnerabilities, is not updatable, and contains no hidden
            algorithms.
          </div>
          <div class="flex flex-wrap items-center gap-6 sm:gap-10 mt-8 sm:mt-10">
            <img src="https://tangem.com/svg/icons/audit/kudelski.svg" alt="" class="h-8 sm:h-10" />
            <img src="https://tangem.com/svg/icons/audit/riscure.svg" alt="" class="h-8 sm:h-10" />
          </div>
        </div>
        <!-- Right box -->
        <div
          class="w-full lg:w-1/2 p-6 sm:p-8 lg:p-[125px] text-base sm:text-lg"
          style="line-height: 120%"
        >
          <h2 class="mb-6 sm:mb-8 text-2xl sm:text-[30px] font-bold" style="line-height: 120%">
            <span class="text-[#6c6c70]">Open source.</span> <br />
            Verified by the crypto community
          </h2>
          <div class="text-[#6c6c70]">
            <span class="text-white">Our app has no backdoors and can be recreated if needed—check its code on GitHub. </span>
            Tangem doesn’t collect personal data or run servers to process transactions on the blockchain.
          </div>
          <div class="flex flex-wrap items-center gap-6 sm:gap-10 mt-8 sm:mt-10">
            <img src="https://tangem.com/svg/icons/open-source/github.svg" alt="" class="h-8 sm:h-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>