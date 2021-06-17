import React from 'react'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import { POKEDEX_ROUTE } from '@/utils/constants'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <div className="container mx-auto">
        <img src="/logo_full.png" alt="PokeQL Logo" className="mx-auto p-4" />
        <p className="text-center text-2xl p-4">
          A Pokedex for all Pokemon and Pokemon video games, powered by{' '}
          <a
            className="underline hover:text-page-alt-color"
            href="https://pokeapi.co/"
            target="_blank"
            rel="noreferrer"
          >
            <b>PokéApi&apos;s</b>
          </a>{' '}
          GraphQL API
        </p>
        <div className="flex flex-col grid-cols-1 md:grid-cols-2 md:flex-row">
          <Link href={POKEDEX_ROUTE}>
            <a className="border-2 text-center border-transparent m-2 md:ml-auto p-4 text-4xl font-bold bg-gray-100 rounded-md hover:border-page-alt-color hover:bg-pink-50 hover:text-page-alt-color">
              View Pokedex
            </a>
          </Link>
          <a className="m-2 md:mr-auto p-4 text-4xl font-bold rounded-md border-2 bg-gray-100 border-transparent text-gray-400 text-center">
            View Games
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Home
