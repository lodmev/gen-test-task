<template>
  <table>
    <caption>
      Созданные сущности:
    </caption>
    <thead>
      <tr>
        <th scope="col">Тип</th>
        <th scope="col">ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entity in entitiesStore.entitiesList" :key="entity.id">
        <td>{{ entityType(entity.kind) }}</td>
        <td>{{ entity.id }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useEntitiesStore, type Entity } from '@/stores/entities'

const entitiesStore = useEntitiesStore()

const entityType = (kind: Entity['kind']) => {
  switch (kind) {
    case 'leads':
      return 'Сделка'
    case 'companies':
      return 'Компания'
    case 'contacts':
      return 'Контакт'
  }
}
</script>

<style scoped>
table {
  border: 2px solid rgb(140 140 140);
  width: 60%;
  min-width: 18rem;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  text-align: center;
}

caption {
  font-size: 1.5 rem;
  font-weight: 600;
  padding: 1rem;
}
</style>
