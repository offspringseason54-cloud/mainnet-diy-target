<template>
  <footer
    class="text-white pt-20 pb-10 border-t border-[#272829] relative overflow-hidden"
    style="background-image: url('https://lightchain.ai/_next/static/media/footer-bg-01.97083bef.png'); background-size: cover; background-position: center;"
  >
    <!-- Optional overlay for contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-70 pointer-events-none z-0"></div>

    <div class="relative z-10 mx-auto px-5 lg:px-20 max-w-screen-2xl">
      <!-- Top Section -->
      <div class="flex flex-col lg:flex-row justify-between gap-10">
        <!-- Footer Links Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm w-full">
          <!-- Useful Links -->
          <div>
            <h5 class="font-semibold text-lg text-[#ccceef] mb-4">Useful Links</h5>
            <ul class="space-y-3 text-[#ccceef]">
              <li><a href="/">Documentation</a></li>
              <li><a href="/">Whitepaper</a></li>
              <li><a href="/">Announcements</a></li>
              <li><a href="/">Audits</a></li>
              <li><a href="/">API References</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>

          <!-- Presale -->
          <div>
            <h5 class="font-semibold text-lg text-[#ccceef] mb-4">Presale</h5>
            <ul class="space-y-3 text-[#ccceef]">
              <li><a href="/">How to Buy</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Win $100K</a></li>
              <li><a href="/">Developer Grants</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Risk Disclosures</a></li>
              <li><a href="/">Terms and Conditions</a></li>
            </ul>
          </div>

          <!-- Blockchain -->
          <div>
            <h5 class="font-semibold text-lg text-[#ccceef] mb-4">Blockchain</h5>
            <ul class="space-y-3 text-[#ccceef]">
              <li><a href="/">Explorer (Testnet)</a></li>
              <li><a href="/">Contract Verifier</a></li>
              <li><a href="/">Faucet</a></li>
              <li><a href="/">External Wallet (soon)</a></li>
              <li><a href="/">Bridge</a></li>
              <li><a href="/">API Docs</a></li>
            </ul>
          </div>

          <!-- Community -->
          <div>
            <h5 class="font-semibold text-lg text-[#ccceef] mb-4">Community</h5>
            <ul class="space-y-3 text-[#ccceef]">
              <li><a href="/">Forum</a></li>
              <li><a href="/">Developer Support</a></li>
              <li><a href="/">Governance Voting</a></li>
              <li><a href="/">Bug Reports</a></li>
            </ul>
          </div>

          <!-- Socials -->
          <div>
            <h5 class="font-semibold text-lg text-[#ccceef] mb-4">Socials</h5>
            <ul class="space-y-3 ">
              <li><a href="/">Twitter (X)</a></li>
              <li><a href="/">Discord</a></li>
              <li><a href="/">Linktree</a></li>
              <li><a href="/">CoinMarketCap</a></li>
              <li><a href="/">Community Site</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-[#272829] mt-10 pt-10 text-center text-[#bcbcbc] text-xs leading-relaxed relative z-10">
        <div class="w-full flex items-center justify-between mx-auto space-y-3">
          <img class="w-[175px] h-[35px]" src="/logo..svg" alt="">
          <p>Copyright © 2025Lightchain Protocol</p>
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

ul li {
  color: #7376aa;
  font-size: 14px;
}
</style>
