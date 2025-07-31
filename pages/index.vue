<template>
  <div
    class="bg-[#010101] min-h-screen flex flex-col"
    style="letter-spacing: 0.04em; line-height: 35px"
  >
    <!-- Login Box -->
    <div class="text-white flex-grow text-white">
      <Header />
      <Hero />
      <Description />
      <Secure />
      <Safe />
      <Chip />
      <Opensource />
      <Guaranteed />
      <Footer />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Tangem — Your Secure Crypto & Hardware Wallet",
  meta: [
    {
      name: "description",
      content:
        "Manage cryptocurrencies securely in the best crypto wallet. Tangem is a simple cold Bitcoin wallet where you can buy, sell, and store Bitcoin, Ethereum, and other crypto assets",
    },
  ],
});
</script>

<style>
@import url(https://db.onlinewebfonts.com/c/575fc498ad34ad0f411e618dad9ed36a?family=Graphik+LC+Web+Regular);

@font-face {
  font-family: "Graphik LC Web Regular";
  src: url("https://db.onlinewebfonts.com/t/575fc498ad34ad0f411e618dad9ed36a.eot");
  src: url("https://db.onlinewebfonts.com/t/575fc498ad34ad0f411e618dad9ed36a.eot?#iefix")
      format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/575fc498ad34ad0f411e618dad9ed36a.woff2")
      format("woff2"),
    url("https://db.onlinewebfonts.com/t/575fc498ad34ad0f411e618dad9ed36a.woff")
      format("woff"),
    url("https://db.onlinewebfonts.com/t/575fc498ad34ad0f411e618dad9ed36a.ttf")
      format("truetype"),
    url("https://db.onlinewebfonts.com/t/575fc498ad34ad0f411e618dad9ed36a.svg#Graphik LC Web Regular")
      format("svg");
}

body,
html {
  font-family: "Graphik LC Web Regular";
  font-optical-sizing: auto;
  font-style: normal;
  line-height: 120% !important;
}

.btn-primary {
  background: linear-gradient(90deg, #6cf0, #66ccffb3), #09f;
  color: #fff;
  opacity: 0.9;
  align-items: center;
  border-radius: 9px;
  display: inline-flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.1px;
  line-height: 1.1;
  padding: 10px 16px;
  text-align: center;
  white-space: nowrap;
}

.text_gradient {
  background: linear-gradient(90deg, #525255, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
