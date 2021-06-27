import { HeightFilter, WeightFilter } from '@/types/FilterTypes'
import { TypeColorData } from '@/types/PokemonData'
import { HEIGHT_OPTIONS, HEIGHT_RANGES, WEIGHT_OPTIONS, WEIGHT_RANGES } from './constants'

export function getPokemonImage(id: number): string {
  const paddedId = getPaddedPokemonId(id)
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
}

export function resolvePokemonName(name: string): string {
  return name.replace('-hero', '').replace('-single-strike', '')
}

export function getPaddedPokemonId(id: number): string {
  return String(id).padStart(3, '0')
}

export function getFullSizePokemonImage(id: number): string {
  const paddedId = getPaddedPokemonId(id)
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`
}

export function getTypeColors(type: string): TypeColorData {
  switch (type) {
    case 'normal':
      return {
        fill: '#A8A878',
        border: '#6D6D4E',
      }
    case 'fighting':
      return {
        fill: '#C03028',
        border: '#7D1F1A',
      }
    case 'flying':
      return {
        fill: '#A890F0',
        border: '#6D5E9C',
      }
    case 'poison':
      return {
        fill: '#A040A0',
        border: '#682A68',
      }
    case 'ground':
      return {
        fill: '#E0C068',
        border: '#927D44',
      }
    case 'rock':
      return {
        fill: '#B8A038',
        border: '#786824',
      }
    case 'bug':
      return {
        fill: '#A8B820',
        border: '#6D7815',
      }
    case 'ghost':
      return {
        fill: '#705898',
        border: '#493963',
      }
    case 'steel':
      return {
        fill: '#B8B8D0',
        border: '#787887',
      }
    case 'fire':
      return {
        fill: '#F08030',
        border: '#9C531F',
      }
    case 'water':
      return {
        fill: '#6890F0',
        border: '#445E9C',
      }
    case 'grass':
      return {
        fill: '#78C850',
        border: '#4E8234',
      }
    case 'electric':
      return {
        fill: '#F8D030',
        border: '#A1871F',
      }
    case 'psychic':
      return {
        fill: '#F85888',
        border: '#A13959',
      }
    case 'ice':
      return {
        fill: '#98D8D8',
        border: '#638D8D',
      }
    case 'dragon':
      return {
        fill: '#7038F8',
        border: '#4924A1',
      }
    case 'dark':
      return {
        fill: '#705848',
        border: '#49392F',
      }
    case 'fairy':
      return {
        fill: '#EE99AC',
        border: '#9B6470',
      }
    default:
      return {
        fill: '',
        border: '',
      }
  }
}

export function getHeightFilter(heights: Array<string>): HeightFilter {
  const filter = {
    _gte: HEIGHT_RANGES.short.min,
    _lte: HEIGHT_RANGES.tall.max,
  }

  if (heights.length === 0) return filter

  if (heights.includes(HEIGHT_OPTIONS.short)) {
    filter._gte = HEIGHT_RANGES.short.min
    filter._lte = HEIGHT_RANGES.short.max
  }

  if (heights.includes(HEIGHT_OPTIONS.medium)) {
    filter._lte = HEIGHT_RANGES.medium.max
    if (!heights.includes(HEIGHT_OPTIONS.short)) filter._gte = HEIGHT_RANGES.medium.min
  }

  if (heights.includes(HEIGHT_OPTIONS.tall)) {
    filter._lte = HEIGHT_RANGES.tall.max
    if (!heights.includes(HEIGHT_OPTIONS.short) && !heights.includes(HEIGHT_OPTIONS.medium))
      filter._gte = HEIGHT_RANGES.tall.min
  }

  return filter
}

export function getWeightFilter(weights: Array<string>): WeightFilter {
  const filter = {
    _gte: WEIGHT_RANGES.light.min,
    _lte: WEIGHT_RANGES.heavy.max,
  }

  if (weights.length === 0) return filter

  if (weights.includes(WEIGHT_OPTIONS.light)) {
    filter._gte = WEIGHT_RANGES.light.min
    filter._lte = WEIGHT_RANGES.light.max
  }

  if (weights.includes(WEIGHT_OPTIONS.medium)) {
    filter._lte = WEIGHT_RANGES.medium.max
    if (!weights.includes(WEIGHT_OPTIONS.light)) filter._gte = WEIGHT_RANGES.medium.min
  }

  if (weights.includes(WEIGHT_OPTIONS.heavy)) {
    filter._lte = WEIGHT_RANGES.heavy.max
    if (!weights.includes(WEIGHT_OPTIONS.light) && !weights.includes(WEIGHT_OPTIONS.medium))
      filter._gte = WEIGHT_RANGES.heavy.min
  }

  return filter
}
