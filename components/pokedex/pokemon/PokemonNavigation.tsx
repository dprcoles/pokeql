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
            <a className="hover:bg-pink-50 p-4 rounded-md flex text-5xl">
              <MdKeyboardArrowLeft size="1.25em" className="text-gray-300" />
              <p className="font-bold w-full text-left text-gray-300">
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
              className="hover:bg-pink-50 p-4 rounded-md flex text-5xl text-center"
              title="Return to Pokedex"
            >
              <CgPokemon size="1.25em" className="mx-auto text-gray-500" />
            </a>
          </Link>
        </div>
        <div className="[ POKEMON__NEXT ][ float-right w-full ]">
          <Link href="/[slug]" as={`/${next.id}`}>
            <a className="hover:bg-pink-50 p-4 rounded-md flex text-5xl">
              <p className="font-bold w-full text-right text-gray-300">
                <span className="hidden md:inline capitalize ">
                  {nextName}
                  {'  '}
                </span>
                #{nextId}
              </p>
              <MdKeyboardArrowRight size="1.25em" className="text-gray-300" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonNavigation
