import React from "react"
import Link from "next/link"
import { getPaddedPokemonId, getPokemonImage, resolvePokemonName } from "@/utils/helpers"
import { PokedexCardData } from "@/types/PokemonData"
import { PokemonType } from "./pokemon"

interface PokedexCardProps {
  data: PokedexCardData
}

const PokedexCard: React.FC<PokedexCardProps> = ({ data }) => {
  const { id, name } = data
  const pokemonId = getPaddedPokemonId(id)
  const pokemonName = resolvePokemonName(name)
  const pokemonImage = getPokemonImage(id)

  return (
    <Link href="/[slug]" as={`/${id}`}>
      <a>
        <div className="p-4 shadow-sm hover:bg-gray-50">
          <img className="mx-auto" src={pokemonImage} alt={pokemonName} />
          <p className="font-semibold text-lg">#{pokemonId}</p>
          <p className="font-extrabold text-2xl capitalize">{pokemonName}</p>
          <div className={`flex grid-cols-${data.types.length} w-full space-x-1 pt-1`}>
            {data.types.map(({ type }) => (
              <div key={type.id}>
                <PokemonType type={type} size="small" />
              </div>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PokedexCard
