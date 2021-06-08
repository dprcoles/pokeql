import React from 'react'
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import Wrapper from '@/components/Wrapper'
import { PokedexList } from '@/components/pokedex'
import { PokedexCardData } from '@/types/PokemonData'
import { GET_POKEMON_LIST } from 'utils/queries'
import { MAX_POKEMON_ID } from '@/utils/constants'

interface PokedexProps {
  data: Array<PokedexCardData>
}

const Pokedex: React.FC<PokedexProps> = ({ data }) => {
  return (
    <Wrapper>
      <div className="p-16">
        <PokedexList data={data} />
      </div>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: GET_POKEMON_LIST,
    variables: { maxPokemonId: MAX_POKEMON_ID },
  })

  return {
    props: {
      data: data.pokemon,
    },
  }
}

export default Pokedex
