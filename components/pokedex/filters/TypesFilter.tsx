import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_TYPES } from 'utils/queries'
import AutoComplete from './autocomplete/AutoComplete'
import ErrorMessage from '@/components/ErrorMessage'
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
      <AutoComplete
        name="Types"
        options={loading ? [] : data.types}
        defaultOptions={initialTypes}
        updateOptions={updateTypes}
      />
    </div>
  )
}

export default TypesFilter
