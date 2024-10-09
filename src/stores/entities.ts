import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export type Entity = {
  kind: 'leads' | 'contacts' | 'companies'
  name: string
  id: number
}
type Response = {
  _links: {
    self: {
      href: string
    }
  }
  _embedded: {
    companies?: [
      {
        id: number
        is_deleted: boolean
        request_id: string
        _links: {
          self: {
            href: string
          }
        }
      }
    ]
    leads?: [
      {
        id: number
        request_id: string
      }
    ]
    contacts?: [
      {
        id: number
        request_id: string
      }
    ]
  }
}

export const useEntitiesStore = defineStore('entities', () => {
  const entitiesList = ref([] as Entity[])
  const isLoading = ref(false)
  async function createEntity(entity: Omit<Entity, 'id'>) {
    try {
      isLoading.value = true
      const response = await axios.post<Response>(
        `http://localhost:3000/amo-actions/${entity.kind}`,
        JSON.stringify([{ name: entity.name }]),
        { headers: { 'Content-Type': 'application/json' } }
      )
      const embedded = response.data._embedded
      if (embedded.companies) {
        entitiesList.value.push({
          kind: 'companies',
          name: entity.name,
          id: embedded.companies[0].id
        })
      } else if (embedded.leads) {
        entitiesList.value.push({
          kind: 'leads',
          name: entity.name,
          id: embedded.leads[0].id
        })
      } else if (embedded.contacts) {
        // console.log('contacts', embedded.contacts)
        entitiesList.value.push({
          kind: 'contacts',
          name: entity.name,
          id: embedded.contacts[0].id
        })
      }
    } catch (e) {
      console.error(e)
      throw e
    } finally {
      isLoading.value = false
    }
  }

  return { entitiesList, isLoading, createEntity }
})
