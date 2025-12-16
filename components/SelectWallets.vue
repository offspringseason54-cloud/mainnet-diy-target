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
  { name: "HashPack", img: "https://play-lh.googleusercontent.com/iFpAMOykLLlqE6yqZEG9mzhhmIVWIp5zTixNSneboNWn-uDqeEh8ZjUtc0wniLAPQ6I" },
  { name: "Crypto.com Onchain", img: "https://tse1.mm.bing.net/th/id/OIP.Pt7nwKPeejnQMGfk7XQAAwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Tangem Wallet", img: "https://logosandtypes.com/wp-content/uploads/2024/01/Tangem.png" },
  { name: "Trezor", img: "https://coingape.com/wp-content/uploads/2024/09/trezor.webp" },
  { name: "Guarda Wallet", img: "https://guarda.com/assets/images/logos/guarda-shield-logo.png" },
  { name: "SafePal Wallet", img: "https://downloadr2.apkmirror.com/wp-content/uploads/2023/06/18/647a392160164_io.safepal.wallet-384x384.png" },
  { name: "Ronin Wallet", img: "https://s3.coinmarketcap.com/static/img/as/2025-01-17T15:38:45.123Z_ronin_ron_logo.png" },
  { name: "Keplr Wallet", img: "https://garden-finance.imgix.net/wallets/keplr.svg" },
  { name: "Ledger", img: "https://product.statnano.com/resource/amar_university_world/files/images/21/1/thumbnail_5b54981a0a34b55075fc12ac09aef220.png" },
  { name: "Rabby Wallet", img: "/images/rabby.png" },
  { name: "Bitget Wallet", img: "/images/bitget.jpeg" },
  { name: "Exodus Wallet", img: "/images/exodus.png" },
  { name: "Zerion Wallet", img: "https://play-lh.googleusercontent.com/lxl3CQLYmbY7kHtMn3ehz06ebEIIxYOETf8hlWPNW6L3ZPxuhSrnIq-4k5T89gd4gA" },
  { name: "Kraken Wallet", img: "https://tse4.mm.bing.net/th/id/OIP.jLfXM4d3MifBw7cCHry1agHaHP?cb=ucfimg2&ucfimg=1&w=634&h=620&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Atomic Wallet", img: "https://yourcryptolibrary.com/wp-content/uploads/2022/03/atomic-wallet-logo.png" },
  { name: "Binance Web3 Wallet", img: "https://tse4.mm.bing.net/th/id/OIP.fm4fyC7oD7xn_-v6Gvl-BwHaHa?cb=ucfimg2&ucfimg=1&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3" },
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
