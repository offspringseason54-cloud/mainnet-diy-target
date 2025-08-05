<template>
  <section class="py-20 px-4">
    <!-- Header Section -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#ccceef] mb-2">
        Discover Lightchain
      </h2>
      <h2 class="text-3xl md:text-4xl font-bold text_gradient mb-2">
        Next-Gen AI Protocol
      </h2>

      <!-- Subtitle -->
      <p class="text-base md:text-lg text-[#7376aa]">
        Explore how Lightchain reshapes AI with smarter workloads, open
        innovation, and fairness through federated, privacy-first learning.
      </p>
    </div>

    <!-- Blog Cards -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="bg-[#0f1021] cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
      >
        <img
          :src="card.image"
          :alt="card.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-5 space-y-2">
          <!-- Title -->
          <h3 class="text-lg text-[#ccceef] font-semibold leading-snug">
            {{ card.title }}
          </h3>

          <!-- Excerpt -->
          <p class="text-sm text-[#7376aa]">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Smarter AI Workloads",

    description:
      "Lightchain turns every consensus process into useful AI work—training models, optimizing tasks, and solving real problems instead of wasting energy.",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fbuilder-section%2Fbuilder-event-01.png&w=1080&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "Open Innovation",

    description:
      "Anyone can propose upgrades to the AI Virtual Machine. Accepted contributions are rewarded with tokens and implemented through decentralized governance.",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fbuilder-section%2Fbuilder-event-02.png&w=1080&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "Bias-Free Intelligence",

    description:
      "By training AI across diverse, local datasets—without sharing raw data—Lightchain ensures more accurate, inclusive, and privacy-friendly models.",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fbuilder-section%2Fbuilder-event-03.png&w=1080&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
];
</script>

<style scoped></style>
