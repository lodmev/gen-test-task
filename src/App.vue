<script setup lang="ts">
import ActionsDropdown from './components/ActionsDropdown.vue'
import CreateButton from './components/CreateButton.vue'
import CreatedEntities from './components/CreatedEntities.vue'
</script>

<template>
  <header><h1>Simple Amo Plugin</h1></header>
  <main class="container">
    <actions-dropdown></actions-dropdown>
    <create-button></create-button>
    <created-entities></created-entities>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
