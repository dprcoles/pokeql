import React from 'react'
import { GetStaticProps } from 'next'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import Wrapper from '@/components/Wrapper'
import PokemonList from '@/components/PokemonList'

interface HomeProps {
  data: Array<PokemonListData>
}

type PokemonListData = {
  id: number
  name: string
}

const Home: React.FC<HomeProps> = ({ data }) => {
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
    query: gql`
      query GetPokemon($offset: Int = 0) {
        pokemon_v2_pokemon(
          order_by: { id: asc }
          where: { id: { _lte: 898 } }
          limit: 20
          offset: $offset
        ) {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              id
              name
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      data: data.pokemon_v2_pokemon,
    },
  }
}

export default Home
