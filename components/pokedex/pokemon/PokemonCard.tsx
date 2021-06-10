import React from 'react'
import { PokemonCardData, PokemonNavigationData } from '@/types/PokemonData'
import { getPaddedPokemonId, getFullSizePokemonImage, resolvePokemonName } from '@/utils/helpers'
import PokemonType from './PokemonType'
import PokemonDetail from './PokemonDetail'
import PokemonStats from './PokemonStats'
import PokemonNavigation from './PokemonNavigation'

interface PokemonCardProps {
  data: PokemonCardData
  next: PokemonNavigationData
  prev: PokemonNavigationData
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data, next, prev }) => {
  const { id, name, abilities, types, stats } = data

  const primaryType = types[0].type.name.toUpperCase()

  const pokemonId = getPaddedPokemonId(id)
  const pokemonName = resolvePokemonName(name)
  const pokemonImage = getFullSizePokemonImage(id)

  return (
    <div className="[ POKEMON__CARD ]">
      <div className="container mx-auto pb-8">
        <PokemonNavigation next={next} prev={prev} />
        <div className={`[ POKEMON__${pokemonName.toUpperCase()} ]`}>
          <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2">
            <div className="p-4">
              <img
                className="mx-auto max-h-full max-w-full h-auto w-auto"
                src={pokemonImage}
                alt={pokemonName}
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
      <div className={`[ Border__${primaryType} ]`}>
        <PokemonDetail abilities={abilities} />
      </div>
    </div>
  )
}

export default PokemonCard
