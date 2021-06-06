import React from 'react'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { PokemonDetailData } from '@/types/PokemonData'
import { GET_POKEMON_DETAIL } from '@/utils/queries'
import { PokemonDetail } from '@/components/pokedex'

interface PokemonProps {
  data: PokemonDetailData
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

const Pokemon: React.FC<PokemonProps> = ({ data }) => {
  return (
    <div>
      <PokemonDetail data={data} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { slug } = context.params as IParams
  const parsedSlug = parseInt(slug)

  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: GET_POKEMON_DETAIL,
    variables: { id: parsedSlug },
  })

  return {
    props: {
      data: data.pokemon_v2_pokemon[0],
    },
  }
}

export default Pokemon
