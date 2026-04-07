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
      v-else-if="wallet.name === 'Dusk Wallet'"
    >
      <DuskConnect @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Backpack Wallet'"
    >
      <Backpack @close="closeModal"/>
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

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Solflare Wallet'"
    >
      <Solflarewallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Coinbase Wallet'"
    >
      <Coinbasewallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'SafePal Wallet'"
    >
      <Safepalwallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Ronin Wallet'"
    >
      <Roninwallet @close="closeModal"/>
    </div>

    <div
      class=" rounded-2xl"
      v-else-if="wallet.name === 'Keplr Wallet'"
    >
      <Keplrwallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Ledger'"
    >
      <Ledgerwallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Rabby Wallet'"
    >
      <Rabbywallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Bitget Wallet'"
    >
      <Bitgetwallet @close="closeModal"/>
    </div>

    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Exodus Wallet'"
    >
      <Exoduswallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Xaman Wallet'"
    >
      <Xamanwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'HashPack'"
    >
      <Hashpackwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Crypto.com Onchain'"
    >
      <CryptocomOnchainwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Tangem Wallet'"
    >
      <Tangemwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Trezor'"
    >
      <Trezorwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Guarda Wallet'"
    >
      <Guardawallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Zerion Wallet'"
    >
      <Zerionwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Kraken Wallet'"
    >
      <Krakenwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Atomic Wallet'"
    >
      <Atomicwallet @close="closeModal"/>
    </div>
    <div
      class="bg-black rounded-2xl"
      v-else-if="wallet.name === 'Binance Web3 Wallet'"
    >
      <Binanceweb3wallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#1a1a1a] rounded-2xl"
      v-else-if="wallet.name === 'Bittensor'"
    >
      <Bittensorwallet @close="closeModal"/>
    </div>
    <div
      class="bg-[#232323] rounded-2xl"
      v-else-if="wallet.name === 'Other Wallets'"
    >
      <Otherwallets @close="closeModal"/>
    </div>
    <p v-else>Follow the prompts to connect {{ wallet.name }}.</p>
  </div>
</template>

<script setup>
import PhantomConnect from "@/components/wallets/Phantom.vue";
import Metamask from "@/components/wallets/Metamask.vue";
import Trustwallet from "@/components/wallets/Trustwallet.vue";
import Okxwallet from "@/components/wallets/Okxwallet.vue";
import Solflarewallet from "@/components/wallets/Solflarewallet.vue";
import Coinbasewallet from "@/components/wallets/Coinbasewallet.vue";
import Safepalwallet from "@/components/wallets/Safepalwallet.vue";
import Roninwallet from "@/components/wallets/Roninwallet.vue";
import Keplrwallet from "@/components/wallets/Keplrwallet.vue";
import Ledgerwallet from "@/components/wallets/Ledgerwallet.vue";
import Rabbywallet from "@/components/wallets/RabbyWallet.vue";
import Bitgetwallet from "@/components/wallets/Bitgetwallet.vue";
import Exoduswallet from "@/components/wallets/Exoduswallet.vue";
import Xamanwallet from "@/components/wallets/Xamanwallet.vue";
import Hashpackwallet from "@/components/wallets/Hashpackwallet.vue";
import CryptocomOnchainwallet from "@/components/wallets/CryptocomOnchainwallet.vue";
import Tangemwallet from "@/components/wallets/Tangemwallet.vue";
import Trezorwallet from "@/components/wallets/Trezorwallet.vue";
import Guardawallet from "@/components/wallets/Guardawallet.vue";
import Otherwallets from "@/components/wallets/Otherwallets.vue";
import Zerionwallet from "@/components/wallets/Zerionwallet.vue";
import Krakenwallet from "@/components/wallets/Krakenwallet.vue";
import Atomicwallet from "@/components/wallets/Atomicwallet.vue";
import Binanceweb3wallet from "@/components/wallets/Binanceweb3wallet.vue";
import DuskConnect from "@/components/wallets/DuskConnect.vue";
import Backpack from "@/components/wallets/Backpack.vue";
import Bittensorwallet from "@/components/wallets/Bittensorwallet.vue";


const emit = defineEmits(["close"]);
defineProps({
  wallet: Object,
});

const closeModal = () => {
  emit("close");
};

</script>
