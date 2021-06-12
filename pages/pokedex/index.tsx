import React from 'react'
import { useQuery } from '@apollo/client'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'
import Wrapper from '@/components/Wrapper'
import { PokedexList } from '@/components/pokedex'
import { GET_POKEMON_LIST } from 'utils/queries'
import { MAX_POKEMON_ID } from '@/utils/constants'

const Pokedex: React.FC = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_LIST, {
    variables: { maxPokemonId: MAX_POKEMON_ID },
  })

  if (loading) return <Loading />
  if (error || !data) return <ErrorMessage />

  return (
    <Wrapper>
      <div className="p-16">
        <PokedexList data={data.pokemon} />
      </div>
    </Wrapper>
  )
}

export default Pokedex
