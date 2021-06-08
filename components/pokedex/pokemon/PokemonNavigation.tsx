import React from 'react'
import Link from 'next/link'
import { PokemonNavigationData } from '@/types/PokemonData'
import { getPaddedPokemonId, resolvePokemonName } from '@/utils/helpers'

interface PokemonNavigationProps {
  next: PokemonNavigationData
  prev: PokemonNavigationData
}

const PokemonNavigation: React.FC<PokemonNavigationProps> = ({ next, prev }) => {
  const nextId = getPaddedPokemonId(next.id)
  const nextName = resolvePokemonName(next.name)

  const prevId = getPaddedPokemonId(prev.id)
  const prevName = resolvePokemonName(prev.name)

  return (
    <div>
      <Link href="/pokedex/[slug]" as={`/pokedex/${prev.id}`}>
        <a>
          <button className="float-left bg-gray-100 hover:bg-gray-200 border border-gray-200 p-2 rounded-md">
            {'< '}#{prevId} <span className="capitalize">{prevName}</span>
          </button>
        </a>
      </Link>
      <Link href="/pokedex/[slug]" as={`/pokedex/${next.id}`}>
        <a>
          <button className="float-right bg-gray-100 hover:bg-gray-200 border border-gray-200 p-2 rounded-md">
            #{nextId} <span className="capitalize">{nextName}</span>
            {' >'}
          </button>
        </a>
      </Link>
    </div>
  )
}

export default PokemonNavigation
