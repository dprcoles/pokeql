import React from 'react'
import { PokemonDetailData } from '@/types/PokemonData'
import { getPaddedPokemonId, getPokemonImage, resolvePokemonName } from '@/utils/helpers'

interface PokemonDetaiProps {
  data: PokemonDetailData
}

const PokemonDetail: React.FC<PokemonDetaiProps> = ({ data }) => {
  const pokemonId = getPaddedPokemonId(data.id)
  const pokemonName = resolvePokemonName(data.name)
  const pokemonImage = getPokemonImage(data.id)
  return (
    <div className="container mx-auto pt-4">
      <div className="grid grid-flow-col sm:grid-cols-1 md:grid-cols-2">
        <div>
          <img className="mx-auto" src={pokemonImage} alt={pokemonName} />
        </div>
        <div>
          <p className="font-semibold text-2xl">#{pokemonId}</p>
          <p className="font-extrabold text-7xl capitalize">{pokemonName}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
