<template>
  <section class="py-20 px-4">
    <!-- Header Section -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <!-- Tag -->
      <div class="bg-[#0f1021] px-4 py-1 rounded w-fit mx-auto mb-4">
        <div class="inline-block text_gradient font-semibold text-sm tracking-wide uppercase">
          Lightchain Protocol AI
        </div>
      </div>

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#ccceef] mb-2">
        Transforming Blockchain & AIVM
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
          <!-- Date & Author -->
          <div class="text-xs text-[#7376aa] uppercase tracking-wide">
            {{ card.date }} · {{ card.author }}
          </div>

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

    <!-- CTA Button -->
    <div class="text-center mt-12">
      <a
        href="/"
        class="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition"
      >
        View all Updates
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Mainnet Launch Announcement',
    date: 'July 31, 2025',
    author: 'Lightchain.AI Community',
    description:
      'Lightchain.AI announces that it has postponed the official Mainnet Launch until Q4 2025 to allow developers to address performance improvements and implement critical features.',
    image: 'https://images.ctfassets.net/86mqvksj9roh/tJtQTk66saxJFMdEwZwkl/26e901cac3445e3c583a85fdc98763d5/1_lXeczAS-O2Tt85RwuPNaEA.webp',
  },
  {
    title: 'Lightchain AI Moves to Discord — Official Community Announcement',
    date: 'July 4, 2025',
    author: 'Small BrandAdmin',
    description:
      'Telegram served us well during early stages, but as the community expands, we’re moving to Discord for a more secure and scalable collaboration environment.',
    image: 'https://images.ctfassets.net/86mqvksj9roh/4X8gar1c5yPHM71zn5D7le/4ea3847cf2a0bb2bc86748ee9f869d21/100.jpg',
  },
  {
    title:
      'Lightchain AI Completes Stage 15 — Launches Bonus Round to Accelerate Mainnet and Developer Expansion',
    date: 'July 4, 2025',
    author: 'Small BrandAdmin',
    description:
      'Stage 15 of the LCAI token presale has successfully concluded. We’re now launching a bonus round to support mainnet development and expand the developer ecosystem.',
    image: 'https://images.ctfassets.net/86mqvksj9roh/2XP0vAJIIu32WmmIEURsXA/8720e4478267dd9fede4b2e2ec588c46/1_9ADMPnLR0-6GEZNnkD3czg.webp',
  },
];
</script>

<style scoped>

</style>
