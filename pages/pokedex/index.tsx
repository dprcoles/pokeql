import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'
import Wrapper from '@/components/Wrapper'
import { PokedexList } from '@/components/pokedex'
import { GET_POKEMON_LIST } from 'utils/queries'
import { MAX_POKEMON_ID, PAGE_SIZE } from '@/utils/constants'
import Pager from '@/components/Pager'

const Pokedex: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const { data, loading, error } = useQuery(GET_POKEMON_LIST, {
    variables: { maxPokemonId: MAX_POKEMON_ID, offset: (pageNumber - 1) * PAGE_SIZE },
  })

  if (loading) return <Loading />
  if (error || !data) return <ErrorMessage />

  return (
    <Wrapper>
      <div className="p-16">
        <PokedexList data={data.pokemon} />
        <Pager
          totalItems={data.total.agg.count}
          currentPage={pageNumber}
          changePage={setPageNumber}
        />
      </div>
    </Wrapper>
  )
}

export default Pokedex
