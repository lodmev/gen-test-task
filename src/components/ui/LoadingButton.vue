<template>
  <button :class="{ active: isActive }" :disabled="!isActive || isLoading">
    <loading-spinner v-if="isLoading" size="15px"> </loading-spinner><slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import LoadingSpinner from './LoadingSpinner.vue'

const { isLoading, isActive } = defineProps<{ isLoading?: boolean; isActive?: boolean }>()
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5%;
  min-width: 8rem;
}
.active {
  background: #00bfff;
  color: white;
  font-weight: 600;
}
</style>
