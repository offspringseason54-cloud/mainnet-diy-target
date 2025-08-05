<template>
  <section class="py-20 px-4">
    <!-- Header Section -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#ccceef] mb-2">
        Transforming
      </h2>
      <h2 class="text-3xl md:text-4xl font-bold text_gradient mb-2">
        Blockchain & AIVM
      </h2>

      <!-- Subtitle -->
      <p class="text-base md:text-lg text-[#7376aa]">
        Transforming Tomorrow with AI-Driven Blockchain
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

    <div class="flex justify-center items-center my-20">
      <div
        class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 max-w-7xl"
      >
        <!-- Image Section: bottom on mobile, left on desktop -->
        <div class="w-full lg:w-1/2">
          <img
            src="https://lightchain.ai/images/banner/AVIM.png"
            alt="Lightchain AI Illustration"
            class="w-full h-auto"
          />
        </div>
        <!-- Text Section: top on mobile, right on desktop -->
        <div class="w-full lg:w-1/2 text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-[#ccceef]">
            Proof of Intelligence (PoI)
          </h1>

          <p class="text-base md:text-lg text-[#7376aa]">
            Lightchain AI introduces Proof of Intelligence (PoI), a
            revolutionary consensus mechanism designed to reward nodes for
            performing valuable AI computations, such as model training,
            inference, and optimization tasks. Unlike traditional consensus
            mechanisms such as Proof of Work (PoW) or Proof of Stake (PoS), PoI
            incentivizes meaningful contributions to AI development while
            maintaining network security
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center my-20">
      <div
        class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 max-w-7xl"
      >
        <!-- Text Section: top on mobile, right on desktop -->
        <div class="w-full lg:w-1/2 text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-[#ccceef]">
            Artificial Intelligence Virtual Machine (AIVM)
          </h1>

          <p class="text-base md:text-lg text-[#7376aa]">
            The Artificial Intelligence Virtual Machine (AIVM) stands at the
            heart of Lightchain AI, designed as a groundbreaking computational
            layer to execute AI-specific tasks seamlessly on the blockchain.
            Unlike static systems, the AIVM is a living entity, capable of
            evolving through the collaborative efforts of a global developer
            community
          </p>
        </div>

        <!-- Image Section: bottom on mobile, left on desktop -->
        <div class="w-full lg:w-1/2">
          <img
            src="https://lightchain.ai/images/banner/PoI.png"
            alt="Lightchain AI Illustration"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "PoI Consensus",

    description:
      "Revolutionizing consensus with Proof-of-Intelligence, a logical leap in secure and efficient decision-making.",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fservice%2Fservice-01.png&w=1080&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "AI Virtual Machine",

    description:
      "Empowering developers with futuristic, AI-driven computation for smarter decentralized applications.",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fservice%2Fservice-04.png&w=1080&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
  {
    title: "Transparent AI Framework",

    description:
      "Redefining trust with an open, auditable, and accountable AI system for intelligent operations.",
    image:
      "https://lightchain.ai/_next/image?url=%2Fimages%2Fservice%2Fservices07.jpg&w=1080&q=75&dpl=dpl_2Dk9YP9st5jz9E8Y8xDghGRph7Qp",
  },
];
</script>

<style scoped></style>
