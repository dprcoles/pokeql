import React from "react"
import { WEIGHT_OPTIONS } from "@/utils/constants"

interface WeightFilterProps {
  weights: Array<string>
  updateWeights: (type: string, value: Array<string>) => void
}

const WeightFilter: React.FC<WeightFilterProps> = ({ weights, updateWeights }) => {
  const handleWeights = (height: string) => {
    let selectedWeights = [...weights]

    if (selectedWeights.includes(height)) {
      selectedWeights = selectedWeights.filter(x => x !== height)
    } else {
      selectedWeights.push(height)
    }

    updateWeights("weights", selectedWeights)
  }

  const getClasses = (height: string) => {
    if (weights.includes(height)) {
      return "bg-page-alt-color text-white border-white"
    } else {
      return "bg-white hover:bg-page-alt-color hover:text-white hover:border-white"
    }
  }

  return (
    <div>
      <button
        className={`p-4 mr-2 rounded-md font-bold border-2 ${getClasses(WEIGHT_OPTIONS.light)}`}
        onClick={() => handleWeights(WEIGHT_OPTIONS.light)}
      >
        Light
      </button>
      <button
        className={`p-4 mx-2 rounded-md font-bold border-2 ${getClasses(WEIGHT_OPTIONS.medium)}`}
        onClick={() => handleWeights(WEIGHT_OPTIONS.medium)}
      >
        Medium
      </button>
      <button
        className={`p-4 ml-2 rounded-md font-bold border-2 ${getClasses(WEIGHT_OPTIONS.heavy)}`}
        onClick={() => handleWeights(WEIGHT_OPTIONS.heavy)}
      >
        Heavy
      </button>
    </div>
  )
}

export default WeightFilter
