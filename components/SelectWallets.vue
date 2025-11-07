<template>
  <div class="md:flex gap-10 bg-[#212529]">
    <!-- LEFT SIDE: Wallet list -->
    <div class="wallet-list md:w-1/2">
      <div>
        <span class="bg-black font-bold text-white rounded-full px-3 py-2"
          >reown</span
        >
        <span class="ml-2 font-bold text-white">Manual Kit</span>
      </div>
      <h5 class="font-bold mb-3 mt-4">Recommended:</h5>
      <div class="max-h-[30vh] md:max-h-[40vh] overflow-y-auto">
        <ul class="grid grid-cols-1 gap-3 mt-3">
          <li
            v-for="wallet in wallets"
            :key="wallet.name"
            @click="handleWalletClick(wallet)"
            class="cursor-pointer flex items-center p-3 rounded-lg cursor-pointer bg-[#353a4074] hover:bg-[#2d3238] w-full"
            :class="{
              'border-primary': selectedWallet?.name === wallet.name,
            }"
          >
            <div class="w-16 h-16 mr-3 flex items-center justify-center">
              <img
                :src="wallet.img"
                :alt="wallet.name"
                class="max-w-full max-h-full rounded-xl"
              />
            </div>
            <div class="font-bold text-white text-xl">{{ wallet.name }}</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- RIGHT SIDE: Info Box -->
    <div
      class="wallet-info mt-10 md:mt-0 md:w-1/2 flex items-center justify-center text-center rounded-2xl bg-[#353a4074] p-8"
    >
      <p class="text-lg font-medium">
        {{ infoText }}
      </p>
    </div>

    <!-- MODAL -->
    <TopRightModal :isVisible="showModal" @close="openCloseModal">
      <WalletOperations :wallet="selectedWallet" @close="openCloseModal" />
    </TopRightModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopRightModal from "@/components/TopRightModal.vue";
import WalletOperations from "@/components/WalletOperations.vue";

const wallets = [
  {
    name: "Phantom Wallet",
    img: "/images/phantom.png",
  },
  { name: "MetaMask", img: "/images/metamask.webp" },
  { name: "Trust Wallet", img: "/images/trust_wallet.png" },
  { name: "OKX Wallet", img: "/images/olx.png" },
  { name: "Solflare Wallet", img: "/images/solflare.jpeg" },
  { name: "Coinbase Wallet", img: "/images/coinbase.png" },
  { name: "Xaman Wallet", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6MMOrlpz_mLxYy22shtSw0QRZdEiY9a2dP_Uh6QI1LCfyuXQfQAVNf-wpfPqvgecsws&usqp=CAU" },
  { name: "HashPack", img: "https://logo.clearbit.com/hashpack.app" },
  { name: "Crypto.com Onchain", img: "https://logo.clearbit.com/crypto.com" },
  { name: "Tangem Wallet", img: "https://logo.clearbit.com/tangem.com" },
  { name: "Trezor", img: "https://logo.clearbit.com/trezor.io" },
  { name: "Guarda Wallet", img: "https://logo.clearbit.com/guarda.com" },
  { name: "SafePal Wallet", img: "https://logo.clearbit.com/safepal.com" },
  { name: "Ronin Wallet", img: "https://logo.clearbit.com/roninchain.com" },
  { name: "Keplr Wallet", img: "https://logo.clearbit.com/keplr.app" },
  { name: "Ledger", img: "https://logo.clearbit.com/ledger.com" },
  { name: "Rabby Wallet", img: "/images/rabby.png" },
  { name: "Bitget Wallet", img: "/images/bitget.jpeg" },
  { name: "Exodus Wallet", img: "/images/exodus.png" },
  { name: "Other Wallets", img: "/images/all-wallets.png" },
];

const showModal = ref(false);
const infoText = ref("Connect your wallet to get started.");
const selectedWallet = ref(null);

function handleWalletClick(wallet) {
  selectedWallet.value = wallet;
  infoText.value = "Confirm wallet connection...";
  showModal.value = true;
}

function openCloseModal() {
  showModal.value = false;
  infoText.value = "Something went wrong. Please try another method.";
}
</script>

<style lang="scss" scoped></style>
