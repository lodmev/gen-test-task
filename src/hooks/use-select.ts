import { computed, ref } from 'vue'
import { type Option } from '@/components/ActionsDropdown.vue'

export function useSelect() {
  const selectedValue = ref('')
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
  const selectedChangeHandler = (value) => {
    selectedValue.value = value
  }
  return { selectedValue, dropdownOptions, isSelected, selectedChangeHandler }
}
