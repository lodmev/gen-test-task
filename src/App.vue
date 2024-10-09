<template>
  <header><h1>Простой плагин для Amo CRM</h1></header>
  <main class="container">
    <div class="actions">
      <actions-dropdown
        :options="dropdownOptions"
        @update="selectedChangeHandler"
      ></actions-dropdown>
      <create-button
        @click="createHandler"
        :isActive="isSelected"
        :isLoading="entitiesStore.isLoading"
        >Создать</create-button
      >
    </div>
    <created-entities></created-entities>
  </main>
</template>

<script setup lang="ts">
import ActionsDropdown from '@/components/ActionsDropdown.vue'
import CreateButton from '@/components/shared/LoadingButton.vue'
import CreatedEntities from '@/components/CreatedEntities.vue'
import { useSelect } from '@/hooks/use-select'
import { useEntitiesStore } from './stores/entities'

const entitiesStore = useEntitiesStore()

const { selectedValue, dropdownOptions, isSelected, selectedChangeHandler } = useSelect()

const createHandler = () => {
  if (!selectedValue.value) {
    return
  }
  const entity = {
    name: ``,
    kind: selectedValue.value
  }
  entitiesStore.createEntity(entity)
}
</script>

<style scoped>
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
