import React from 'react'
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import Wrapper from '@/components/Wrapper'
import { PokemonList } from '@/components/pokedex'
import { PokemonListData } from '@/types/PokemonData'
import { GET_POKEMON_LIST } from 'utils/queries'

interface PokedexProps {
  data: Array<PokemonListData>
}

const Pokedex: React.FC<PokedexProps> = ({ data }) => {
  return (
    <Wrapper>
      <div className="p-16">
        <PokemonList data={data} />
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
  })

  return {
    props: {
      data: data.pokemon_v2_pokemon,
    },
  }
}

export default Pokedex
