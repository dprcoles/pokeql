export type PokedexCardData = {
  id: number
  name: string
}

export type PokemonCardData = {
  id: number
  name: string
  height: number
  weight: number
  abilities: Array<PokemonAbilitiesData>
  types: Array<PokemonTypesData>
  stats: Array<PokemonStatData>
}

export type PokemonAbilitiesData = {
  ability: PokemonAbilityData
}

export type PokemonAbilityData = {
  id: number
  name: string
  effect: Array<PokemonAbilityTextData>
}

export type PokemonAbilityTextData = {
  description: string
}

export type PokemonTypesData = {
  type: PokemonTypeData
}

export type PokemonTypeData = {
  id: number
  name: string
}

export type PokemonStatData = {
  stat_id: number
  base_stat: number
  effort: number
}

export type PokemonPageData = {
  pokemon: PokemonCardData
  next: PokemonNavigationData
  prev: PokemonNavigationData
}

export type PokemonNavigationData = {
  id: number
  name: string
}

export type TypeColorData = {
  fill: string
  border: string
}
