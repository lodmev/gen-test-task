<template>
  <span class="loader" :style="{ width: size, height: size }"></span>
</template>

<script setup lang="ts">
const { size } = defineProps<{ size: string }>()
</script>

<style scoped>
.loader {
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
