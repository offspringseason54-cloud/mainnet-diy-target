<template>
  <div class="">
    <p v-if="wallet.name === 'MetaMask'">
      Please confirm the connection in your MetaMask extension.
    </p>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Phantom Wallet'"
    >
      <PhantomConnect @close-modal="" />
    </div>
    <p v-else>Follow the prompts to connect {{ wallet.name }}.</p>
  </div>
</template>

<script setup>
import PhantomConnect from "@/components/wallets/Phantom.vue";
defineProps({
  wallet: Object,
});
</script>
