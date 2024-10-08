<template>
  <label>
    Выберите сущность
    <select @change="handleChange">
      <option value="" selected disabled>Не выбрано</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.name }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
export type Option = { name: string; value: string }
type Options = {
  options: Option[]
}
const { options } = defineProps<Options>()
const emit = defineEmits<{ (e: 'update', value: string): void }>()
const handleChange = (event) => {
  emit('update', event.target.value)
}
</script>

<style>
select {
  padding: 0.5rem;
  min-width: 15rem;
}
</style>
