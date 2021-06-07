import React from 'react'
import { PokemonTypeData } from '@/types/PokemonData'

interface PokemonTypeProps {
  type: PokemonTypeData
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  const { name } = type
  return (
    <div className={`[ POKEMON__TYPE ][ Type__${name.toUpperCase()} ][ rounded-md mx-auto ]`}>
      <p className="capitalize text-2xl font-bold text-center px-4 py-1">{name}</p>
    </div>
  )
}

export default PokemonType
