<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <div
      class="bg-[#162735] w-full text-xs md:text-sm font-lighter flex items-center justify-center py-3 md:py-2 px-5"
    >
      <div class="flex items-center text-[#ccceef] justify-center items-center md:space-x-3">
        <div class="text-left">
          <span>We're no longer active on Telegram. Join our official Discord for real-time updates and community chat: </span>
          <span class="font-bold">discord.gg/lightchain</span>
          <span>🚧</span>
        </div>

      </div>
    </div>
    <header class="bg-black text-white py-3 px-5 lg:px-10 text-lg header">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold">
          <a href="/">
            <img class="w-[175px] h-[35px]" src="/logo..svg" alt="">
          </a>
        </div>

        <!-- Navigation Links (Desktop) -->
        <nav
          class="hidden lg:flex items-center space-x-6 text-[#ccceef] font-lighter"
        >
          <a href="#" class="flex items-center hover:text-[#f0f0f0]">
            <span>About</span>
          </a>
          <a href="#" class="flex items-center hover:text-[#f0f0f0]">
            <span>Blockchain</span>
          </a>
          <a href="#" class="flex items-center hover:text-[#f0f0f0] space-x-1">
            <span>Lightchain</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"
              ></path>
            </svg>
          </a>
          <a href="#" class="flex items-center hover:text-[#f0f0f0] space-x-1">
            <span>Community</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"
              ></path>
            </svg>
          </a>
          <a href="#" class="flex items-center hover:text-[#f0f0f0] space-x-1">
            <span>Socials</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"
              ></path>
            </svg>
          </a>
          <a href="#" class="flex items-center hover:text-[#f0f0f0] space-x-1">
            <span>Contact</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"
              ></path>
            </svg>
          </a>
        </nav>

        <!-- Connect Button -->
        <div class="hidden lg:block">
          <a href="/connect" class="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition"> Connect Wallet </a>
        </div>

        <!-- Hamburger Menu (Mobile) -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 17.5V19H6V17.5H18ZM20 11.25V12.75H4V11.25H20ZM18 5V6.5H6V5H18Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="lg:hidden shadow mt-5 mb-7 font-lighter text-[15px]"
      >
        <nav class="space-y-4">
          <a href="#" class="block hover:text-[#3d71ff]">About</a>
          <a href="#" class="block hover:text-[#3d71ff]">Blockchain</a>
          <a href="#" class="block hover:text-[#3d71ff]">Lightchain</a>
          <a href="#" class="block hover:text-[#3d71ff]">Community</a>
          <a href="#" class="block hover:text-[#3d71ff]">Socials</a>
          <a href="#" class="block hover:text-[#3d71ff]">Contact</a>
          <div>
            <a href="/connect" class="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition"> Claim presale token </a>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
header a {
  transition: color 0.3s ease;
}

.header {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.6);
}
</style>
