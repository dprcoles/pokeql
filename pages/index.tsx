import React from 'react'
import { useQuery } from '@apollo/client'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'
import Wrapper from '@/components/Wrapper'
import { PokedexList, PokedexFilterMenu } from '@/components/pokedex'
import { GET_POKEMON_LIST } from 'utils/queries'
import { MAX_POKEMON_ID, PAGE_SIZE } from '@/utils/constants'
import Pager from '@/components/Pager'
import usePokedexStore from '@/stores/filterStore'

const Pokedex: React.FC = () => {
  const store = usePokedexStore(state => state)

  const handleSearch = (search: string) => {
    store.updateSearch(search)
  }

  const { data, loading, error } = useQuery(GET_POKEMON_LIST, {
    variables: {
      maxPokemonId: MAX_POKEMON_ID,
      offset: (store.pageNumber - 1) * PAGE_SIZE,
      search: `%${store.search}%`,
    },
  })

  if (loading) return <Loading />
  if (error || !data) return <ErrorMessage />

  return (
    <Wrapper>
      <div className="md:p-16">
        <PokedexFilterMenu handleSearch={handleSearch} initialSearch={store.search} />
        <PokedexList data={data.pokemon} />
        <Pager
          totalItems={data.total.agg.count}
          currentPage={store.pageNumber}
          changePage={store.updatePageNumber}
        />
      </div>
    </Wrapper>
  )
}

export default Pokedex
