import create from 'zustand'
import { PokedexFilterStore } from '@/types/Stores'
import { AutoCompleteOption } from '@/types/FilterTypes'
import { OptionsType } from 'react-select'

const usePokedexFilterStore = create<PokedexFilterStore>(
  (set): PokedexFilterStore => ({
    search: '',
    pageNumber: 1,
    types: [],
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
    updateTypes: (types: OptionsType<AutoCompleteOption>) =>
      set(state => ({
        ...state,
        types,
        pageNumber: 1,
      })),
  })
)

export default usePokedexFilterStore
