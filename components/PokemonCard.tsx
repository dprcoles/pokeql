import React from 'react'
import Link from 'next/link'

interface PokemonCardProps {
  data: PokemonData
}

type PokemonData = {
  id: number
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  const pokemonId = String(data.id).padStart(3, '0')
  const pokemonName = data.name
  const pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`

  return (
    <Link href="/pokedex/[slug]" as={`/pokedex/${data.id}`}>
      <a>
        <div className="p-4 shadow-sm hover:bg-gray-50">
          <img className="mx-auto" src={pokemonImage} alt={pokemonName} />
          <p className="font-semibold text-lg">#{pokemonId}</p>
          <p className="font-bold text-2xl capitalize">{pokemonName}</p>
        </div>
      </a>
    </Link>
  )
}

export default PokemonCard
