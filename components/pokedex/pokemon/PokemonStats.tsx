import React from 'react'
import { PokemonStatData } from '@/types/PokemonData'
import { getTypeColors } from '@/utils/helpers'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts'

interface PokemonStatsProps {
  stats: Array<PokemonStatData>
  name: string
  type: string
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
      return 'Sp. Atk'
    case 5:
      return 'Sp. Def'
    case 6:
      return 'Speed'
    default:
      return '?'
  }
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats, name, type }) => {
  const data: unknown[] | undefined = []

  stats.forEach(stat => {
    data.push({
      stat: getStatNameById(stat.stat_id),
      value: stat.base_stat,
    })
  })

  const { fill, border } = getTypeColors(type.toLowerCase())

  return (
    <div className="[ POKEMON__STATS ][ bg-gray-100 rounded-md mt-4 p-2 ]">
      <div>
        <p className="font-bold text-xl p-2">Base Stats</p>
        <div className="[ STATS__RADAR ][ py-2 ]">
          <RadarChart cx={200} cy={200} outerRadius={150} width={500} height={400} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stat" />
            <Tooltip />
            <Radar
              name={name.toUpperCase()}
              dataKey="value"
              stroke={border}
              fill={fill}
              fillOpacity={0.8}
            />
            <PolarRadiusAxis domain={[0, 255]} angle={30} />
          </RadarChart>
        </div>
      </div>
    </div>
  )
}

export default PokemonStats
