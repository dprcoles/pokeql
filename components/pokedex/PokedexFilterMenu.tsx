import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

interface PokedexFilterMenuProps {
  handleSearch: (search: string) => void
  initialSearch: string
}

const PokedexFilterMenu: React.FC<PokedexFilterMenuProps> = ({ handleSearch, initialSearch }) => {
  const [search, setSearch] = useState(initialSearch)

  const updateSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLTextAreaElement

    setSearch(value)

    value === '' && handleSearch(value)
  }

  return (
    <div className="[ POKEDEX__FilterMenu ] m-4 p-4 bg-gray-50 rounded-md">
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="flex bg-white border-gray-100 rounded-md">
          <input
            className="p-4 border-2 focus:border-page-alt-color rounded-sm w-full"
            type="search"
            value={search}
            placeholder="Search for a Pokémon..."
            onInput={e => updateSearch(e)}
            onSubmit={() => handleSearch(search)}
          />
          <div className="flex text-page-alt-color justify-items-center border-2 border-transparent bg-pink-100 hover:bg-page-alt-color hover:text-white rounded-sm">
            <button className="p-2" title="Click to search" onClick={() => handleSearch(search)}>
              <MdSearch size="2em" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokedexFilterMenu
