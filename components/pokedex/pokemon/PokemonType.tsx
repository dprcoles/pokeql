import React from "react"
import { PokemonTypeData } from "@/types/PokemonData"

interface PokemonTypeProps {
  type: PokemonTypeData
  size: string
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type, size }) => {
  const { name } = type
  return (
    <div className={`[ POKEMON__TYPE ][ Type__${name.toUpperCase()} ][ rounded-md mx-auto ]`}>
      <p
        className={`capitalize ${
          size === "small" ? "text-sm" : "text-2xl"
        } font-bold text-center py-1 px-4 `}
      >
        {name}
      </p>
    </div>
  )
}

export default PokemonType
