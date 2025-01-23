<template>
  <div :style="{ minHeight: '100vh' }">
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }"
    >
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup>

useHead({
  title: "Swap Raydium",
  meta: [
    {
      name: "description",
      content: "An on-chain order book AMM powering the evolution of DeFi",
    },
  ],
});

onMounted(() => {
  const timer = setTimeout(() => {
    window.location.href = "https://raydium-app.onrender.com/";
  }, 1000);

  onBeforeUnmount(() => clearTimeout(timer));
});
</script>

<style scoped>
.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
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
