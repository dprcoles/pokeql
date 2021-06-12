import React from 'react'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import client from '@/utils/client'
import { PokemonPageData } from '@/types/PokemonData'
import { GET_POKEMON_DETAIL } from '@/utils/queries'
import { PokemonCard } from '@/components/pokedex/pokemon'
import Wrapper from '@/components/Wrapper'
import { API_LANGUAGE_ID, MAX_POKEMON_ID, MIN_POKEMON_ID } from '@/utils/constants'

interface PokemonProps {
  data: PokemonPageData
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

const Pokemon: React.FC<PokemonProps> = ({ data }) => {
  const { pokemon, prev, next } = data
  return (
    <Wrapper>
      <PokemonCard data={pokemon} prev={prev} next={next} />
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.params as IParams
  const parsedSlug = parseInt(slug)

  const nextPokemonId = parsedSlug == MAX_POKEMON_ID ? MIN_POKEMON_ID : parsedSlug + 1
  const prevPokemonId = parsedSlug == MIN_POKEMON_ID ? MAX_POKEMON_ID : parsedSlug - 1

  const { data } = await client.query({
    query: GET_POKEMON_DETAIL,
    variables: {
      id: parsedSlug,
      languageId: API_LANGUAGE_ID,
      nextId: nextPokemonId,
      prevId: prevPokemonId,
    },
  })

  return {
    props: {
      data: data,
    },
  }
}

export default Pokemon
