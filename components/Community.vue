<template>
  <section class="pt-20 px-4">
    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl md:text-5xl text_gradient mb-4">Secure the Future</h2>
      <!-- Title -->
      <h2 class="text-3xl md:text-5xl font-bold text-[#ccceef] mb-2">
        Get involved with the Lightchain Community
      </h2>

      <div class="text-center mt-12">
        <a
          href="/updates"
          class="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition"
        >
          Join our Community
        </a>
      </div>

      <!-- Subtitle -->
    </div>

    <!-- Blog Cards -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="bg-[#0f1021] h-[270px] cursor-pointer flex flex-col border border-[#0f1021] rounded-[10px] justify-center items-center overflow-hidden shadow-lg hover:shadow-xl transition"
      >
        <img :src="card.image" :alt="card.title" class="h-[60px] w-[60px]" />
        <!-- Title -->
        <h3 class="text text-[#ccceef] mt-4 font-semibold leading-snug">
          {{ card.title }}
        </h3>

        <a
          href="/updates"
          style="border: 2px solid hsla(0,0%,100%,.1)"
          class="inline-block mt-10 px-4 py-2 text-[#7376aa] rounded-xl text-sm md:text-base hover:opacity-90 transition"
        >
          {{ card.btnText }}
        </a>
      </div>
    </div>

    <!-- CTA Button -->
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Developer Grant",
    btnText: "Visit Now",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fgenerator-icon%2Fdeveloper-grant.png&w=128&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "LCAI Documentation",
    btnText: "See Docs",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fgenerator-icon%2Ftext_line.png&w=128&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "Join the Official Discord",
    btnText: "Join now",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fgenerator-icon%2Fdiscord.png&w=128&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "Whitepaper",
    btnText: "Download PDF",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fgenerator-icon%2Fwhitepaper.png&w=128&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "Explorer (Testnet)",
    btnText: "Visit Now",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fgenerator-icon%2Fexplorer.png&w=128&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
];
</script>

<style scoped></style>
