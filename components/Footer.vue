<template>
  <footer class="text-white pt-20 pb-10 border-t border-[#272829]">
    <div class="mx-auto px-5 lg:px-20 max-w-screen-2xl">
      <div class="flex flex-col lg:flex-row justify-between lg:text-sm gap-10">
        <!-- Logo and Text -->
        <div class="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left flex flex-col items-center lg:items-start">
          <svg
            width="120"
            height="26"
            viewBox="0 0 87 20"
            class="footer__logo"
            data-icon="tangem-logo"
          >
            <use href="#ai:local:tangem-logo"></use>
          </svg>
          <p class="text-[#83868f] w-full sm:w-3/4 lg:w-1/2 text-sm mt-10 mb-6 sm:mt-20 sm:mb-10">
            Global Headquarters, Tangem AG Baarerstrasse 10, 6300 Zug,
            Switzerland
          </p>
          <a href="mailto:support@tangem.com" class="underline break-all">support@tangem.com</a>
        </div>
        <!-- Footer Links -->
        <div class="mt-10 lg:mt-0 w-full lg:w-1/2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Legal Links -->
            <div>
              <h5 class="font-bold mb-4">Legal</h5>
              <ul class="space-y-1">
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Terms of Use</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Privacy Policy</a
                  >
                </li>
              </ul>
            </div>
            <!-- Company Links -->
            <div>
              <h5 class="font-bold mb-4">Company</h5>
              <ul class="space-y-1">
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >About Tangem</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >International Delivery</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Resellers</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Affiliates</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Customize your wallet</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white">Blog</a>
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Roadmap</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Media Kit</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Tangem Guide</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Careers</a
                  >
                </li>
                <li>
                  <a href="/" class="text-[#83868f] hover:text-white"
                    >Contacts</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="mt-10 text-center">
        <div class="flex justify-center space-x-6">
          <a href="/" class="text-[#83868f] hover:text-white"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="/" class="text-[#83868f] hover:text-white"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="/" class="text-[#83868f] hover:text-white"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a href="/" class="text-[#83868f] hover:text-white"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-10 text-center text-[#494949] flex justify-center w-full text-[10px] " style="line-height: 120%;">
        <div class="w-full sm:w-11/12 md:w-9/12 space-y-3 px-2">
          <p>Reg. No CHE-390.112.525</p>
          <p>
            Tangem AG provides only hardware wallets and non-custodial software
            solutions for managing digital assets. Tangem is not regulated as a
            financial services provider or cryptocurrency exchange. Tangem does
            not hold, custody, or control users' assets or transactions. Crypto
            transaction services are provided by third-party providers. Tangem
            provides no advice or recommendation on use of these third-party
            services.
          </p>
          <p>Copyright © 2025 Tangem AG. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer a {
  transition: color 0.3s ease;
}
footer a:hover {
  color: #ffffff;
}
</style>