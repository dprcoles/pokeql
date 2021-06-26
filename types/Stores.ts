import { OptionsType } from 'react-select'
import { AutoCompleteOption } from './FilterTypes'

export type PokedexFilterStore = {
  search: string
  pageNumber: number
  types: OptionsType<AutoCompleteOption>
  updateSearch: (search: string) => void
  updatePageNumber: (pageNumber: number) => void
  updateTypes: (types: OptionsType<AutoCompleteOption>) => void
}
