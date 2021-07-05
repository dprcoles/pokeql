import { FiltersObject } from './FilterTypes'

export type PokedexFilterStore = {
  search: string
  pageNumber: number
  filters: FiltersObject
  updateSearch: (search: string) => void
  updatePageNumber: (pageNumber: number) => void
  updateFilters: (filters: FiltersObject) => void
}
