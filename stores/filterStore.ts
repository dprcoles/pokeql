import create from 'zustand'
import { PokedexStore } from '@/types/Stores'

const usePokedexStore = create<PokedexStore>(
  (set): PokedexStore => ({
    search: '',
    updateSearch: (search: string) =>
      set(state => ({
        ...state,
        search,
        pageNumber: 1,
      })),
    pageNumber: 1,
    updatePageNumber: (pageNumber: number) =>
      set(state => ({
        ...state,
        pageNumber,
      })),
  })
)

export default usePokedexStore
