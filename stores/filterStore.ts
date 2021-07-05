import create from 'zustand'
import { PokedexFilterStore } from '@/types/Stores'
import { FiltersObject } from '@/types/FilterTypes'
import { DEFAULT_FILTERS_OBJECT } from '@/utils/constants'

const usePokedexFilterStore = create<PokedexFilterStore>(
  (set): PokedexFilterStore => ({
    search: '',
    pageNumber: 1,
    filters: DEFAULT_FILTERS_OBJECT,
    updateSearch: (search: string) =>
      set(state => ({
        ...state,
        search,
        pageNumber: 1,
      })),
    updatePageNumber: (pageNumber: number) =>
      set(state => ({
        ...state,
        pageNumber,
      })),
    updateFilters: (filters: FiltersObject) =>
      set(state => ({
        ...state,
        filters,
        pageNumber: 1,
      })),
  })
)

export default usePokedexFilterStore
