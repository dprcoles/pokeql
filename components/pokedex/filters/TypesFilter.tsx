import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_TYPES } from 'utils/queries'
import AutoComplete from './autocomplete/AutoComplete'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import { AutoCompleteOption } from '@/types/FilterTypes'
import { OptionsType } from 'react-select'

interface TypesFilterProps {
  initialTypes: OptionsType<AutoCompleteOption>
  updateTypes: (types: OptionsType<AutoCompleteOption>) => void
}

const TypesFilter: React.FC<TypesFilterProps> = ({ initialTypes, updateTypes }) => {
  const { data, loading, error } = useQuery(GET_POKEMON_TYPES)

  if (loading) return <Loading />
  if (error || !data) return <ErrorMessage />

  return (
    <div className="[ POKEMON__Types ]">
      <AutoComplete
        name="Types"
        options={data.types}
        defaultOptions={initialTypes}
        updateOptions={updateTypes}
      />
    </div>
  )
}

export default TypesFilter
