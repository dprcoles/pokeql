import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMON_ABILITIES } from 'utils/queries'
import { AbilityAutoComplete } from './autocomplete'
import { AutoCompleteOption } from '@/types/FilterTypes'

interface AbilityFilterProps {
  ability: AutoCompleteOption | null
  updateAbility: (type: string, value: AutoCompleteOption | null) => void
}

const AbilityFilter: React.FC<AbilityFilterProps> = ({ ability, updateAbility }) => {
  const { data, loading } = useQuery(GET_POKEMON_ABILITIES)

  return (
    <div className="[ POKEMON__Abilities ]">
      <AbilityAutoComplete
        name="Abilities"
        options={
          loading
            ? []
            : data.abilities.map((ability: AutoCompleteOption) => ({
                value: ability.value,
                label: ability.label.replace(/-/g, ' '),
              }))
        }
        defaultOption={ability}
        updateOption={option => updateAbility('ability', option)}
      />
    </div>
  )
}

export default AbilityFilter
