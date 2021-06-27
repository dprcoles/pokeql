export const MIN_POKEMON_ID = 1
export const MAX_POKEMON_ID = 898
export const API_LANGUAGE_ID = 9
export const PAGE_SIZE = 20
export const DEFAULT_TYPES_COMPARISON = { _lte: 18 }

export const HEIGHT_OPTIONS = {
  short: 'short',
  medium: 'medium',
  tall: 'tall',
}

export const WEIGHT_OPTIONS = {
  light: 'light',
  medium: 'medium',
  heavy: 'heavy',
}

export const HEIGHT_RANGES = {
  short: {
    min: 0,
    max: 12,
  },
  medium: {
    min: 13,
    max: 22,
  },
  tall: {
    min: 23,
    max: 10000,
  },
}

export const WEIGHT_RANGES = {
  light: {
    min: 0,
    max: 449,
  },
  medium: {
    min: 450,
    max: 2299,
  },
  heavy: {
    min: 2300,
    max: 1000000,
  },
}
