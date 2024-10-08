<script setup lang="ts">
import ActionsDropdown, { Option } from './components/ActionsDropdown.vue'
import CreateButton from './components/ui/LoadingButton.vue'
import CreatedEntities from './components/CreatedEntities.vue'
import { computed, ref } from 'vue'
import { useSelect } from './hooks/use-select'

const { selectedValue, dropdownOptions, isSelected, selectedChangeHandler } = useSelect()
</script>

<template>
  <header><h1>Simple Amo Plugin</h1></header>
  <main class="container">
    <div class="actions">
      <actions-dropdown
        :options="dropdownOptions"
        @update="selectedChangeHandler"
      ></actions-dropdown>
      <create-button :isActive="isSelected">Создать</create-button>
    </div>
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
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
