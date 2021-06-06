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
