import React from 'react'
import Link from 'next/link'
import { getPaddedPokemonId, getPokemonImage, resolvePokemonName } from '@/utils/helpers'

interface PokemonCardProps {
  data: PokemonData
}

type PokemonData = {
  id: number
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  const pokemonId = getPaddedPokemonId(data.id)
  const pokemonName = resolvePokemonName(data.name)
  const pokemonImage = getPokemonImage(data.id)

  return (
    <Link href="/pokedex/[slug]" as={`/pokedex/${data.id}`}>
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

export default PokemonCard
