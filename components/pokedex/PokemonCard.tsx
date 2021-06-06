import React from 'react'
import { PokemonCardData } from '@/types/PokemonData'
import { getPaddedPokemonId, getPokemonImage, resolvePokemonName } from '@/utils/helpers'

interface PokemonCardProps {
  data: PokemonCardData
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  const pokemonId = getPaddedPokemonId(data.id)
  const pokemonName = resolvePokemonName(data.name)
  const pokemonImage = getPokemonImage(data.id)
  return (
    <div className="container mx-auto pt-4">
      <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2">
        <div className="p-4">
          <img className="mx-auto" src={pokemonImage} alt={pokemonName} />
        </div>
        <div className="p-4">
          <p className="font-semibold text-2xl">#{pokemonId}</p>
          <p className="font-extrabold text-7xl capitalize">{pokemonName}</p>
          <div className="grid grid-flow-row grid-cols-2">
            {data.pokemon_v2_pokemontypes.map(type => (
              <div key={type.pokemon_v2_type.id} className="capitalize text-lg font-bold">
                <p>{type.pokemon_v2_type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-16 p-4">
        <p className="font-extrabold text-5xl">Abilities</p>
        {data.pokemon_v2_pokemonabilities.map(ability => (
          <div key={ability.pokemon_v2_ability.id}>
            <p className="text-lg">
              <span className="capitalize font-bold">{ability.pokemon_v2_ability.name}</span> -{' '}
              {ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].short_effect}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard
