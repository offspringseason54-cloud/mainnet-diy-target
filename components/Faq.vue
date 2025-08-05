<template>
  <div class="py-16 px-4">
    <div class="max-w-4xl mx-auto text-white text-center space-y-6 flex flex-col items-center">
      <!-- Subtitle as Tag -->
      <div class="bg-[#0f1021] px-4 py-1 rounded w-fit">
        <div
          class="inline-block text_gradient font-semibold text-sm tracking-wide uppercase"
        >
          FAQ
        </div>
      </div>

      <!-- Main Title -->
      <h1 class="text-3xl md:text-4xl font-bold text-[#ccceef]">
        Frequently Asked Questions
      </h1>
    </div>

    <!-- Accordion -->
    <div class="max-w-3xl mx-auto mt-12 space-y-4">
      <div
        v-for="(item, index) in faqs"
        :key="index"
        class="bg-[#0f1021] rounded-lg overflow-hidden"
      >
        <button
          class="w-full flex justify-between items-center px-4 py-3 text-left font-regular text-[#ccceef] focus:outline-none"
          @click="activeIndex = activeIndex === index ? null : index"
        >
          {{ item.question }}
          <span class="">
            {{ activeIndex === index ? "−" : "+" }}
          </span>
        </button>

        <div
          v-show="activeIndex === index"
          class="px-6 pb-4 text-[#7376aa] transition-all duration-300"
        >
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref<number | null>(null);

const faqs = [
  {
    question: "What is Lightchain AI and its core mission?",
    answer:
      "Lightchain AI is a cutting-edge blockchain ecosystem powered by artificial intelligence. Our mission is to revolutionize decentralized applications and governance through innovations like PoI Consensus, the Artificial Intelligence Virtual Machine (AIVM), and a Transparent AI Framework. We aim to create a smarter, more secure, and equitable blockchain ecosystem for all.",
  },
  {
    question: "What makes Lightchain AI’s PoI Consensus unique?",
    answer:
      "The Proof-of-Intelligence (PoI) Consensus leverages AI to validate transactions, ensuring both efficiency and scalability. Unlike traditional consensus models, PoI focuses on intelligent, adaptive problem-solving, reducing energy consumption while enhancing network security and throughput.",
  },
  {
    question:
      "How does the Artificial Intelligence Virtual Machine (AIVM) work?",
    answer:
      "The AIVM is a transformative environment for deploying decentralized applications (dApps) powered by AI. It integrates intelligent computing capabilities directly into the blockchain, enabling developers to create advanced, data-driven applications with seamless execution and enhanced functionality.",
  },
  {
    question: "What are the details of the Lightchain AI presale?",
    answer:
      "The Lightchain AI presale offers early adopters the opportunity to purchase tokens before the public launch. Participants benefit from discounted prices and exclusive perks, such as governance voting rights and priority access to ecosystem features like the Memecoin Launchpad.",
  },
  {
    question: "How does Lightchain AI ensure transparency in its ecosystem?",
    answer:
      "Our Transparent AI Framework ensures every AI decision-making process is auditable and explainable. By embedding accountability into the system, we foster trust and reliability, empowering users and developers to confidently interact with Lightchain AI’s technology.",
  },
  {
    question: "What role does decentralized governance play in Lightchain AI?",
    answer:
      "Decentralized governance is at the heart of Lightchain AI. Token holders can actively participate in decision-making processes, proposing and voting on key initiatives. This ensures the ecosystem evolves in alignment with community values while leveraging AI to streamline governance operations.",
  },
];
</script>

<style scoped></style>
