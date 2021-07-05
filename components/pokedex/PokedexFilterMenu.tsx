import React, { useState } from 'react'
import { PokedexFilterStore } from '@/types/Stores'
import { HeightFilter, TypesFilter, WeightFilter } from './filters'
import AbilityFilter from './filters/AbilityFilter'
import { DEFAULT_FILTERS_OBJECT } from '@/utils/constants'

interface PokedexFilterMenuProps {
  store: PokedexFilterStore
  loading: boolean
}

const PokedexFilterMenu: React.FC<PokedexFilterMenuProps> = ({ store, loading }) => {
  const { filters } = store
  const [stagedFilters, setStagedFilters] = useState(filters)

  const handleSetStagedFilters = (type: string, value: unknown) => {
    const updatedFilters = { ...stagedFilters, [type]: value }

    setStagedFilters(updatedFilters)
  }

  const handleReset = () => {
    store.updateFilters(DEFAULT_FILTERS_OBJECT)
    setStagedFilters(DEFAULT_FILTERS_OBJECT)
  }

  return (
    <div className="[ POKEDEX__FilterMenu ] m-4 p-4 bg-gray-50 rounded-md">
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="px-2">
          <p>Types</p>
          <TypesFilter initialTypes={stagedFilters.types} updateTypes={handleSetStagedFilters} />
        </div>
        <div className="px-2">
          <p>Height</p>
          <HeightFilter heights={stagedFilters.heights} updateHeights={handleSetStagedFilters} />
        </div>
        <div className="px-2">
          <p>Weight</p>
          <WeightFilter weights={stagedFilters.weights} updateWeights={handleSetStagedFilters} />
        </div>
        <div className="px-2">
          <p>Ability</p>
          <AbilityFilter ability={stagedFilters.ability} updateAbility={handleSetStagedFilters} />
        </div>
        <div className="ml-4 px-2 border-l-2 justify-center flex flex-col space-y-1">
          <button
            className="px-8 py-1 rounded-md font-bold border-2 bg-white hover:bg-gray-500 hover:text-white hover:border-gray-700"
            disabled={
              loading || JSON.stringify(stagedFilters) === JSON.stringify(DEFAULT_FILTERS_OBJECT)
            }
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button
            className="px-8 py-2 rounded-md font-bold border-2 text-white border-white bg-page-alt-color hover:bg-pink-500 hover:border-pink-700"
            disabled={loading || JSON.stringify(stagedFilters) === JSON.stringify(filters)}
            onClick={() => store.updateFilters(stagedFilters)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default PokedexFilterMenu
