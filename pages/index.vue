<template>
  <div
    class="bg-[#111214] min-h-screen flex flex-col"
    style="letter-spacing: 0.04em; line-height: 35px"
  >
    <!-- Login Box -->
    <div class="text-white flex-grow text-white">
      <Header />
      <Hero />
      <Discounts />
      <Secure />
      <Trust />
      <Touchscreen />
      <Manage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Keystone: Best Open Source Cold Wallet & Hardware Wallet",
  meta: [
    {
      name: "description",
      content:
        "The only hardware wallet that supports MetaMask mobile. Secure your Bitcoin and other crypto assets offline with Keystone's open-source cold wallet.",
    },
  ],
});
</script>

<style scoped></style>
