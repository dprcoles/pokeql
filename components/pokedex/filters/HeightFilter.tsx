import React from 'react'
import { HEIGHT_OPTIONS } from '@/utils/constants'

interface HeightFilterProps {
  heights: Array<string>
  updateHeights: (type: string, value: Array<string>) => void
}

const HeightFilter: React.FC<HeightFilterProps> = ({ heights, updateHeights }) => {
  const handleHeights = (height: string) => {
    let selectedHeights = [...heights]

    if (selectedHeights.includes(height)) {
      selectedHeights = selectedHeights.filter(x => x !== height)
    } else {
      selectedHeights.push(height)
    }

    updateHeights('heights', selectedHeights)
  }

  const getClasses = (height: string) => {
    if (heights.includes(height)) {
      return 'bg-page-alt-color text-white border-white'
    } else {
      return 'bg-white hover:bg-page-alt-color hover:text-white hover:border-white'
    }
  }

  return (
    <div>
      <button
        className={`p-4 mr-2 rounded-md font-bold border-2 ${getClasses(HEIGHT_OPTIONS.short)}`}
        onClick={() => handleHeights(HEIGHT_OPTIONS.short)}
      >
        Short
      </button>
      <button
        className={`p-4 mx-2 rounded-md font-bold border-2 ${getClasses(HEIGHT_OPTIONS.medium)}`}
        onClick={() => handleHeights(HEIGHT_OPTIONS.medium)}
      >
        Medium
      </button>
      <button
        className={`p-4 ml-2 rounded-md font-bold border-2 ${getClasses(HEIGHT_OPTIONS.tall)}`}
        onClick={() => handleHeights(HEIGHT_OPTIONS.tall)}
      >
        Tall
      </button>
    </div>
  )
}

export default HeightFilter
