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
  query GetPokemonDetail($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          id
          name
          pokemon_v2_abilityeffecttexts(where: { language_id: { _eq: 9 } }) {
            short_effect
          }
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`
