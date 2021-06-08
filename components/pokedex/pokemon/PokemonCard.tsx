import React from 'react'
import { PokemonCardData } from '@/types/PokemonData'
import { getPaddedPokemonId, getFullSizePokemonImage, resolvePokemonName } from '@/utils/helpers'
import PokemonType from './PokemonType'
import Link from 'next/link'
import PokemonDetail from './PokemonDetail'
import PokemonStats from './PokemonStats'

interface PokemonCardProps {
  data: PokemonCardData
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  const { id, name, abilities, types, stats } = data

  const primaryType = types[0].type.name.toUpperCase()

  const pokemonId = getPaddedPokemonId(id)
  const pokemonName = resolvePokemonName(name)
  const pokemonImage = getFullSizePokemonImage(id)

  return (
    <div className="[ POKEMON__CARD ]">
      <div className="container mx-auto py-8">
        <Link href="/pokedex">
          <a>
            <button className="hover:underline font-semibold text-lg">{'<'} Back to Pokedex</button>
          </a>
        </Link>
        <div className={`[ POKEMON__${pokemonName.toUpperCase()} ]`}>
          <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2">
            <div className="p-4">
              <img
                className="mx-auto max-h-full max-w-full h-auto w-auto"
                src={pokemonImage}
                alt={pokemonName}
                width="430"
                height="430"
              />
            </div>
            <div className="p-4">
              <p className="font-extrabold text-2xl text-gray-500">#{pokemonId}</p>
              <p className="font-extrabold text-7xl capitalize pb-3">{pokemonName}</p>
              <div className="inline-flex space-x-2 pt-1">
                {types.map(({ type }) => (
                  <PokemonType key={type.id} type={type} />
                ))}
              </div>
              <PokemonStats stats={stats} />
            </div>
          </div>
        </div>
      </div>
      <div className={`[ Border__${primaryType} ] bg-gray-100`}>
        <PokemonDetail abilities={abilities} />
      </div>
    </div>
  )
}

export default PokemonCard
