<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content-top rounded-2xl" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopRightModal",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 255, 0.25); /* blue tint */
  backdrop-filter: blur(6px); /* add blur effect */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 2000;
  transition: all 0.3s ease;
}

.modal-content-top {
  color: #fff;
  margin: 1.5rem;
  width: 40rem;
  animation: slideIn 0.3s ease-out;
}

/* Smooth appear animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px) translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0);
  }
}

/* Responsive behavior for mobile */
@media (max-width: 768px) {
  .modal-overlay {
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    margin: 0;
    width: 90%;
  }
}
</style>
