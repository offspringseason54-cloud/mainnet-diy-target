<template>
    <header class="bg-black text-white py-6 px-5 lg:px-20 text-lg">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold">
          <a href="/">
            <img src="data:image/png;base64,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" alt="Logo" class="h-8">
          </a>
        </div>
  
        <!-- Navigation Links (Desktop) -->
        <nav class="hidden lg:flex items-center space-x-10">
          <a href="#" class="flex items-center space-x-2 hover:text-[#3d71ff]">
            
            <span>Products</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"></path></svg>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-[#3d71ff]">
            
            <span>Coin and Features</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"></path></svg>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-[#3d71ff]">
            
            <span>Learn</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"></path></svg>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-[#3d71ff]">
            
            <span>Partnerships</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.99975 8.78145L11.2997 5.48145L12.2424 6.42411L7.99975 10.6668L3.75708 6.42411L4.69975 5.48145L7.99975 8.78145Z"></path></svg>
          </a>
        </nav>
  
        <!-- Connect Button -->
        <div class="hidden lg:block">
            <a
            href="/connect"
            class="text-base text-white py-3 px-4 rounded font-semibold transition"
            style="border: 2px solid; border-image: linear-gradient(90deg, #ffc93d 25%, #11a0de 50%, #b439d2 75%, #6b38fb 100%) 1;"
          >
            Connect Now
          </a>
        </div>
  
        <!-- Hamburger Menu (Mobile) -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 17.5V19H6V17.5H18ZM20 11.25V12.75H4V11.25H20ZM18 5V6.5H6V5H18Z"></path></svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden shadow mt-4">
        <nav class="space-y-4">
          <a href="#" class="block hover:text-[#3d71ff]">Products</a>
          <a href="#" class="block hover:text-[#3d71ff]">Coin and Features</a>
          <a href="#" class="block hover:text-[#3d71ff]">Learn</a>
          <a href="#" class="block hover:text-[#3d71ff]">Partnerships</a>
          <div>
            <a
            href="/connect"
            class="text-base text-white py-3 px-4 rounded font-semibold transition"
            style="border: 2px solid; border-image: linear-gradient(90deg, #ffc93d 25%, #11a0de 50%, #b439d2 75%, #6b38fb 100%) 1;"
          >
            Connect
          </a>
          </div>
        </nav>
      </div>
    </header>
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
  </style>