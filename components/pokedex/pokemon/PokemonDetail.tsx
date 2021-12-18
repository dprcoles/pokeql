import React from "react"
import { PokemonAbilitiesData } from "@/types/PokemonData"

interface PokemonDetailProps {
  abilities: Array<PokemonAbilitiesData>
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ abilities }) => {
  return (
    <div className="[ POKEMON__DETAIL ][ container mx-auto pt-16 p-4 ]">
      <div className="[ POKEMON__ABILITIES ]">
        <p className="font-extrabold text-5xl">Abilities</p>
        <div className="p-2">
          {abilities.map(({ ability }) => (
            <div key={ability.id} className={`[ ABILITY__${ability.name.toUpperCase()} ]`}>
              <p>
                <span className="capitalize font-bold">{ability.name}</span> -{" "}
                {ability.effect[0]?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
