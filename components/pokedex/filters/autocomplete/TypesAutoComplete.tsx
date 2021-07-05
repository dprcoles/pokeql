import React from 'react'
import Select, { OptionsType } from 'react-select'
import { AutoCompleteOption } from '@/types/FilterTypes'
import {
  control,
  menuList,
  multiValue,
  multiValueLabel,
  multiValueRemove,
  typeOption,
  valueContainer,
} from './styles'

interface TypesAutoCompleteProps {
  name: string
  options: OptionsType<AutoCompleteOption>
  defaultOptions: OptionsType<AutoCompleteOption>
  updateOptions: (types: OptionsType<AutoCompleteOption>) => void
}

const TypesAutoCompleteProps: React.FC<TypesAutoCompleteProps> = ({
  name,
  options,
  defaultOptions,
  updateOptions,
}) => {
  return (
    <div>
      <Select
        isMulti
        closeMenuOnSelect={false}
        name={name}
        defaultValue={defaultOptions}
        value={defaultOptions}
        options={options}
        styles={{
          control,
          menuList,
          multiValue,
          multiValueLabel,
          multiValueRemove,
          option: typeOption,
          valueContainer,
        }}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#DB2777',
            primary25: '#FDE6F3',
            neutral10: '#E5E7EB',
          },
        })}
        onChange={selected => updateOptions(selected)}
      />
    </div>
  )
}

export default TypesAutoCompleteProps
