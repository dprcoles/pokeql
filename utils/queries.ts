import { gql } from '@apollo/client'

export const GET_POKEMON_LIST = gql`
  query GetPokemonList($offset: Int = 0) {
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
`

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($id: Int) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
    }
  }
`
