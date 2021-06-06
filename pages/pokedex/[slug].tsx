import React from 'react'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

interface PokemonProps {
  data: PokemonData
}

type PokemonData = {
  id: number
  name: string
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

const Pokemon: React.FC<PokemonProps> = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>This is the page for {data.name}</p>
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
    query: gql`
      query GetPokemonById($id: Int) {
        pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
          id
          name
        }
      }
    `,
    variables: { id: parsedSlug },
  })

  return {
    props: {
      data: data.pokemon_v2_pokemon[0],
    },
  }
}

export default Pokemon
