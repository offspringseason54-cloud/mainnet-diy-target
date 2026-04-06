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
  { name: "Dusk Wallet", img: "/images/dusk-icon.png" },
  { name: "Solflare Wallet", img: "/images/solflare.jpeg" },
  { name: "Coinbase Wallet", img: "/images/coinbase.png" },
  {
    name: "Xaman Wallet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6MMOrlpz_mLxYy22shtSw0QRZdEiY9a2dP_Uh6QI1LCfyuXQfQAVNf-wpfPqvgecsws&usqp=CAU",
  },
  {
    name: "HashPack",
    img: "https://cdn.prod.website-files.com/614c99cf4f23700c8aa3752a/6323b696c42eaa1be5f8152a_public.png",
  },
  {
    name: "Backpack Wallet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lXke6fEf0zSOeqts4C1u-FhoTnLOEH7gwK1t7NRa3A&s",
  },
  {
    name: "Crypto.com Onchain",
    img: "https://tse1.mm.bing.net/th/id/OIP.Pt7nwKPeejnQMGfk7XQAAwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Tangem Wallet",
    img: "https://logosandtypes.com/wp-content/uploads/2024/01/Tangem.png",
  },
  {
    name: "Trezor",
    img: "https://coingape.com/wp-content/uploads/2024/09/trezor.webp",
  },
  {
    name: "Guarda Wallet",
    img: "https://guarda.com/assets/images/logos/guarda-shield-logo.png",
  },
  {
    name: "SafePal Wallet",
    img: "https://downloadr2.apkmirror.com/wp-content/uploads/2023/06/18/647a392160164_io.safepal.wallet-384x384.png",
  },
  {
    name: "Ronin Wallet",
    img: "https://s3.coinmarketcap.com/static/img/as/2025-01-17T15:38:45.123Z_ronin_ron_logo.png",
  },
  {
    name: "Keplr Wallet",
    img: "https://cdn.aptoide.com/imgs/3/0/2/30270a84f74dba6e4a3449895a1aafba_icon.png",
  },
  {
    name: "Ledger",
    img: "data:image/png;base64,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",
  },
  { name: "Rabby Wallet", img: "/images/rabby.png" },
  { name: "Bitget Wallet", img: "/images/bitget.jpeg" },
  { name: "Exodus Wallet", img: "/images/exodus.png" },
  {
    name: "Zerion Wallet",
    img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5e8e7dd58f9bb4000118f0e6/0x0.png",
  },
  {
    name: "Kraken Wallet",
    img: "https://tse4.mm.bing.net/th/id/OIP.jLfXM4d3MifBw7cCHry1agHaHP?cb=ucfimg2&ucfimg=1&w=634&h=620&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Atomic Wallet",
    img: "https://yourcryptolibrary.com/wp-content/uploads/2022/03/atomic-wallet-logo.png",
  },
  {
    name: "Binance Web3 Wallet",
    img: "https://tse4.mm.bing.net/th/id/OIP.fm4fyC7oD7xn_-v6Gvl-BwHaHa?cb=ucfimg2&ucfimg=1&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
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
