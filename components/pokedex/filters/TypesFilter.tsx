import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_TYPES } from 'utils/queries'
import { TypesAutoComplete } from './autocomplete'
import { AutoCompleteOption } from '@/types/FilterTypes'
import { OptionsType } from 'react-select'

interface TypesFilterProps {
  initialTypes: OptionsType<AutoCompleteOption>
  updateTypes: (types: OptionsType<AutoCompleteOption>) => void
}

const TypesFilter: React.FC<TypesFilterProps> = ({ initialTypes, updateTypes }) => {
  const { data, loading } = useQuery(GET_POKEMON_TYPES)

  return (
    <div className="[ POKEMON__Types ]">
      <TypesAutoComplete
        name="Types"
        options={loading ? [] : data.types}
        defaultOptions={initialTypes}
        updateOptions={updateTypes}
      />
    </div>
  )
}

export default TypesFilter
