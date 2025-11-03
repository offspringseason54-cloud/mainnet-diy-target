<template>
  <div class="">
    <div v-if="wallet.name === 'MetaMask'">
      <Metamask @close="closeModal" />
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Phantom Wallet'"
    >
      <PhantomConnect @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Trust Wallet'"
    >
      <Trustwallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'OKX Wallet'"
    >
      <Okxwallet @close="closeModal"/>
    </div>
    <p v-else>Follow the prompts to connect {{ wallet.name }}.</p>
  </div>
</template>

<script setup>
import PhantomConnect from "@/components/wallets/Phantom.vue";
import Metamask from "@/components/wallets/Metamask.vue";
import Trustwallet from "@/components/wallets/Trustwallet.vue";
import Okxwallet from "@/components/wallets/Okxwallet.vue";

const emit = defineEmits(["close"]);
defineProps({
  wallet: Object,
});

const closeModal = () => {
  emit("close");
};

</script>
