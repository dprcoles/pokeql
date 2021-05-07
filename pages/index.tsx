import { GetStaticProps } from 'next'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import Wrapper from '../components/Wrapper'

interface HomeProps {
  data: Array<PokemonType>
}

type PokemonType = {
  id: number
  name: string
}

export default function Home({ data }: HomeProps) {
  return (
    <Wrapper>
      {data.map((pokemon: PokemonType) => {
        return (
          <div key={pokemon.id}>
            <h3>
              #{pokemon.id} - {pokemon.name}
            </h3>
          </div>
        )
      })}
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
      query GetPokemon {
        pokemon_v2_pokemon(order_by: { id: asc }) {
          id
          name
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
