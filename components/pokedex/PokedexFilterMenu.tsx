import React from 'react'
import { PokedexFilterStore } from '@/types/Stores'
import { SearchFilter, TypesFilter } from './filters'

interface PokedexFilterMenuProps {
  store: PokedexFilterStore
}

const PokedexFilterMenu: React.FC<PokedexFilterMenuProps> = ({ store }) => {
  return (
    <div className="[ POKEDEX__FilterMenu ] m-4 p-4 bg-gray-50 rounded-md">
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="px-2">
          <p>Search</p>
          <SearchFilter initialSearch={store.search} updateSearch={store.updateSearch} />
        </div>
        <div className="px-2">
          <p>Types</p>
          <TypesFilter initialTypes={store.types} updateTypes={store.updateTypes} />
        </div>
      </div>
    </div>
  )
}

export default PokedexFilterMenu
