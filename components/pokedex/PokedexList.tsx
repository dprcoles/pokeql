import React from "react"
import PokedexCard from "./PokedexCard"
import { PokedexCardData } from "@/types/PokemonData"

interface PokemonListProps {
  data: Array<PokedexCardData>
}

const PokemonList: React.FC<PokemonListProps> = ({ data }) => (
  <div className="[ POKEDEX ]">
    <div className="grid grid-flow-row lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
      {data.map(pokemon => (
        <div key={pokemon.id}>
          <PokedexCard data={pokemon} />
        </div>
      ))}
    </div>
  </div>
)

export default PokemonList
