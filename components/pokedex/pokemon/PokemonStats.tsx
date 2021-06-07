import React from 'react'
import { PokemonStatData } from '@/types/PokemonData'

interface PokemonStatsProps {
  stats: Array<PokemonStatData>
}

function getStatNameById(statId: number): string {
  switch (statId) {
    case 1:
      return 'HP'
    case 2:
      return 'Atk'
    case 3:
      return 'Def'
    case 4:
      return 'Sp.Atk'
    case 5:
      return 'Sp.Def'
    case 6:
      return 'Speed'
    default:
      return '?'
  }
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <div className="[ POKEMON__STATS ][ bg-gray-100 rounded-md mt-4 p-2 ]">
      <div>
        <p className="font-bold text-xl p-2">Base Stats</p>
        <div className="grid grid-flow-row grid-cols-6 py-2">
          {stats.map(stat => (
            <div
              key={stat.stat_id}
              className={`[ STAT__${getStatNameById(stat.stat_id)
                .toUpperCase()
                .replace('.', '_')} ][ rounded-md mx-4 px-4 py-1 ]`}
            >
              <div className="text-center">{getStatNameById(stat.stat_id)}</div>
              <div className="text-center font-bold py-1">{stat.base_stat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonStats
