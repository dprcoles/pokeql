import React from 'react'
import Link from 'next/link'
import { PokemonNavigationData } from '@/types/PokemonData'
import { getPaddedPokemonId, resolvePokemonName } from '@/utils/helpers'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { CgPokemon } from 'react-icons/cg'

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
      <div className="[ POKEMON__NAVIGATION ][ flex ]">
        <div className="[ POKEMON__PREV ][ float-left w-full ]">
          <Link href="/[slug]" as={`/${prev.id}`}>
            <a
              className="hover:bg-pink-50 p-4 rounded-md flex text-4xl text-gray-300 hover:text-page-alt-color"
              title={`Check out Pokémon #${prevId}`}
            >
              <MdKeyboardArrowLeft size="1.25em" />
              <p className="font-bold w-full text-left">
                #{prevId}
                <span className="hidden md:inline capitalize ">
                  {'  '}
                  {prevName}
                </span>
              </p>
            </a>
          </Link>
        </div>
        <div className="w-full">
          <Link href="/">
            <a
              className="hover:bg-pink-50 p-4 rounded-md flex text-4xl text-center text-gray-500 hover:text-page-alt-color"
              title="Return to Pokedex"
            >
              <CgPokemon size="1.25em" className="mx-auto" />
            </a>
          </Link>
        </div>
        <div className="[ POKEMON__NEXT ][ float-right w-full ]">
          <Link href="/[slug]" as={`/${next.id}`}>
            <a
              className="hover:bg-pink-50 p-4 rounded-md flex text-4xl text-gray-300 hover:text-page-alt-color"
              title={`Check out Pokémon #${nextId}`}
            >
              <p className="font-bold w-full text-right">
                <span className="hidden md:inline capitalize ">
                  {nextName}
                  {'  '}
                </span>
                #{nextId}
              </p>
              <MdKeyboardArrowRight size="1.25em" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonNavigation
