import { OptionsType } from 'react-select'

export type FiltersObject = {
  types: OptionsType<AutoCompleteOption>
  heights: Array<string>
  weights: Array<string>
  ability: AutoCompleteOption | null
}

export type AutoCompleteOption = {
  value: number
  label: string
}

export type HeightFilter = {
  _gte: number
  _lte: number
}

export type WeightFilter = {
  _gte: number
  _lte: number
}
