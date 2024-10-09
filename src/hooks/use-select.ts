import { computed, ref } from 'vue'
import { type Option } from '@/components/ActionsDropdown.vue'
import type { Entity } from '@/stores/entities'

export function useSelect() {
  const selectedValue = ref<Entity['kind']>()
  const dropdownOptions: Option[] = [
    {
      name: 'Сделка',
      value: 'leads'
    },
    {
      name: 'Контакт',
      value: 'contacts'
    },
    {
      name: 'Компания',
      value: 'companies'
    }
  ]
  const isSelected = computed(() => {
    return !!selectedValue.value
  })
  const selectedChangeHandler = (value: string) => {
    if (value === 'leads' || value === 'contacts' || value === 'companies') {
      selectedValue.value = value
    }
  }
  return { selectedValue, dropdownOptions, isSelected, selectedChangeHandler }
}
