import React from 'react'
import Link from 'next/link'
import { getPaddedPokemonId, getPokemonImage, resolvePokemonName } from '@/utils/helpers'
import { PokedexCardData } from '@/types/PokemonData'
import { POKEDEX_ROUTE } from '@/utils/constants'

interface PokedexCardProps {
  data: PokedexCardData
}

const PokedexCard: React.FC<PokedexCardProps> = ({ data }) => {
  const { id, name } = data
  const pokemonId = getPaddedPokemonId(id)
  const pokemonName = resolvePokemonName(name)
  const pokemonImage = getPokemonImage(id)

  return (
    <Link href={`${POKEDEX_ROUTE}/[slug]`} as={`${POKEDEX_ROUTE}/${id}`}>
      <a>
        <div className="p-4 shadow-sm hover:bg-gray-50">
          <img className="mx-auto" src={pokemonImage} alt={pokemonName} />
          <p className="font-semibold text-lg">#{pokemonId}</p>
          <p className="font-extrabold text-2xl capitalize">{pokemonName}</p>
        </div>
      </a>
    </Link>
  )
}

export default PokedexCard
