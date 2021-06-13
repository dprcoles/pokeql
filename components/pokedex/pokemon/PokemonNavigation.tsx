import React from 'react'
import Link from 'next/link'
import { PokemonNavigationData } from '@/types/PokemonData'
import { getPaddedPokemonId, getPokemonImage, resolvePokemonName } from '@/utils/helpers'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

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
    <div className="[ POKEMON__NAVIGATION ][ flex ]">
      <Link href="/pokedex/[slug]" as={`/pokedex/${prev.id}`}>
        <a className="hover:bg-pink-50 hover:text-page-alt-color p-2 rounded-md">
          <img src={getPokemonImage(prev.id)} alt={prevName} className="w-16 mx-auto" />
          <div className="flex">
            <MdKeyboardArrowLeft size="1.5em" />
            <p>
              #{prevId} <span className="capitalize">{prevName}</span>
            </p>
          </div>
        </a>
      </Link>
      <div className="mx-auto"></div>
      <Link href="/pokedex/[slug]" as={`/pokedex/${next.id}`}>
        <a className="hover:bg-pink-50 hover:text-page-alt-color p-2 rounded-md">
          <img src={getPokemonImage(next.id)} alt={nextName} className="w-16 mx-auto" />
          <div className="flex">
            <p>
              #{nextId} <span className="capitalize">{nextName}</span>
            </p>
            <MdKeyboardArrowRight size="1.5em" />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PokemonNavigation
