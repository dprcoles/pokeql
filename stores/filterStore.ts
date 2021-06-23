import create from 'zustand'
import { FilterStore } from '@/types/Stores'

const useFilterStore = create<FilterStore>(
  (set): FilterStore => ({
    search: '',
    updateSearch: (search: string) =>
      set(state => ({
        ...state,
        search,
      })),
  })
)

export default useFilterStore
