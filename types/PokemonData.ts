export type PokedexCardData = {
  id: number
  name: string
}

export type PokemonCardData = {
  id: number
  name: string
  height: number
  weight: number
  pokemon_v2_pokemonabilities: Array<PokemonAbilitiesData>
  pokemon_v2_pokemontypes: Array<PokemonTypesData>
}

export type PokemonAbilitiesData = {
  pokemon_v2_ability: PokemonAbilityData
}

export type PokemonAbilityData = {
  id: number
  name: string
  pokemon_v2_abilityeffecttexts: Array<PokemonAbilityTextData>
}

export type PokemonAbilityTextData = {
  short_effect: string
}

export type PokemonTypesData = {
  pokemon_v2_type: PokemonTypeData
}

export type PokemonTypeData = {
  id: number
  name: string
}
