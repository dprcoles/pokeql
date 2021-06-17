import React from 'react'
import { PokemonEvolutionData } from '@/types/PokemonData'
import { getPaddedPokemonId, getPokemonImage, resolvePokemonName } from '@/utils/helpers'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { POKEDEX_ROUTE } from '@/utils/constants'

interface PokemonEvolutionProps {
  chain: Array<PokemonEvolutionData>
}

const PokemonEvolution: React.FC<PokemonEvolutionProps> = ({ chain }) => {
  const colCount = chain.length + (chain.length - 1)

  const items: Array<JSX.Element> = []

  chain.map(({ id, name }, index) => {
    if (index !== 0)
      items.push(
        <div className="flex justify-self-center items-center">
          <FaLongArrowAltRight size="5em" />
        </div>
      )
    items.push(
      <div key={id} className="rounded-md hover:bg-gray-600 p-2">
        <Link href={`${POKEDEX_ROUTE}/[slug]`} as={`${POKEDEX_ROUTE}/${id}`}>
          <a>
            <div>
              <img
                className="mx-auto max-h-full max-w-full h-auto w-auto"
                src={getPokemonImage(id)}
                alt={resolvePokemonName(name)}
              />
            </div>
            <div className="capitalize text-lg">
              {resolvePokemonName(name)}{' '}
              <span className="text-gray-300">#{getPaddedPokemonId(id)}</span>
            </div>
          </a>
        </Link>
      </div>
    )
  })

  return (
    <div className="bg-gray-700 rounded-md p-4 text-white">
      <p className="font-bold text-2xl py-1">Evolution Chain</p>
      <div className={`grid grid-flow-row md:grid-flow-col md:grid-cols-${colCount} text-center`}>
        {items}
      </div>
    </div>
  )
}

export default PokemonEvolution
