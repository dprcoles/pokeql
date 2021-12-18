import React, { useState } from "react"
import { MdSearch } from "react-icons/md"

interface SearchFilterProps {
  initialSearch: string
  updateSearch: (search: string) => void
}

const SearchFilter: React.FC<SearchFilterProps> = ({ initialSearch, updateSearch }) => {
  const [search, setSearch] = useState(initialSearch)

  const handleSetSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLTextAreaElement

    setSearch(value)

    value === "" && updateSearch(value)
  }

  return (
    <div className="[ POKEMON__Search ] flex bg-white border-gray-100 rounded-md">
      <input
        className="p-4 border-2 focus:border-page-alt-color focus:outline-none w-full md:w-96 rounded-md"
        type="search"
        value={search}
        placeholder="Search for a Pokémon..."
        onInput={e => handleSetSearch(e)}
        onSubmit={() => updateSearch(search)}
      />
      <div className="flex text-page-alt-color rounded-md justify-items-center -ml-12 border-2 border-transparent bg-pink-100 hover:bg-page-alt-color hover:text-white">
        <button className="p-2" title="Click to search" onClick={() => updateSearch(search)}>
          <MdSearch size="2em" />
        </button>
      </div>
    </div>
  )
}

export default SearchFilter
