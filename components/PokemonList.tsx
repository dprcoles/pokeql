import React from 'react'
import PokemonCard from './PokemonCard'

interface PokemonListProps {
  data: Array<PokemonListData>
}

type PokemonListData = {
  id: number
  name: string
}

const PokemonList: React.FC<PokemonListProps> = ({ data }) => (
  <div className="grid grid-flow-row lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
    {data.map(pokemon => (
      <div key={pokemon.id}>
        <PokemonCard data={pokemon} />
      </div>
    ))}
  </div>
)

export default PokemonList
