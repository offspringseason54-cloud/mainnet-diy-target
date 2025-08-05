<template>
  <div
    class="bg-[#070710] min-h-screen flex flex-col"
    style="letter-spacing: 0.04em; line-height: 35px"
  >
    <!-- Login Box -->
    <div class="text-white flex-grow text-white">
      <Header />
      <Hero />
      <Blockchain />
      <Innovation />
      <img
        class="w-full"
        src="https://lightchain.ai/_next/static/media/separator-bottom.8ed74e32.svg"
        alt=""
      />
      <Community />
      <img
        class="w-full"
        src="https://lightchain.ai/_next/static/media/separator-bottom.8ed74e32.svg"
        alt=""
      />
      <Transforming />
      <img
        class="w-full"
        src="https://lightchain.ai/_next/static/media/separator-bottom.8ed74e32.svg"
        alt=""
      />
      <Faq />
      <img
        class="w-full"
        src="https://lightchain.ai/_next/static/media/separator-bottom.8ed74e32.svg"
        alt=""
      />
      <JoinDiscord />
      <img
        class="w-full"
        src="https://lightchain.ai/_next/static/media/separator-bottom.8ed74e32.svg"
        alt=""
      />
      <Discover />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Innovation from '~/components/Innovation.vue';

useHead({
  title: "Lightchain Protocol AI - Lightchain.ai",
  meta: [
    {
      name: "description",
      content:
        "Lightchain Protocol AI merges blockchain with AI via its innovative Proof of Intelligence (PoI) and AI Virtual Machine (AIVM), fostering decentralized, scalable, and privacy-focused solutions for AI tasks and governance.",
    },
  ],
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

body,
html {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.btn-primary {
  background: linear-gradient(90deg, #6cf0, #66ccffb3), #09f;
  color: #fff;
  opacity: 0.9;
  align-items: center;
  border-radius: 9px;
  display: inline-flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.1px;
  line-height: 1.1;
  padding: 10px 16px;
  text-align: center;
  white-space: nowrap;
}

.text_gradient {
  background: linear-gradient(90deg, #ff12fb -30%, #e3c1f3 30%, #7064e9 90%);
  text-transform: capitalize;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
