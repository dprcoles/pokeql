import { OptionsType } from 'react-select'
import { AutoCompleteOption } from './FilterTypes'

export type PokedexFilterStore = {
  search: string
  pageNumber: number
  types: OptionsType<AutoCompleteOption>
  heights: Array<string>
  weights: Array<string>
  updateSearch: (search: string) => void
  updatePageNumber: (pageNumber: number) => void
  updateTypes: (types: OptionsType<AutoCompleteOption>) => void
  updateHeights: (height: Array<string>) => void
  updateWeights: (height: Array<string>) => void
}
