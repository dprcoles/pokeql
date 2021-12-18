import React from "react"
import Select, { OptionsType } from "react-select"
import { AutoCompleteOption } from "@/types/FilterTypes"
import {
  abilityOption,
  control,
  input,
  menuList,
  placeholder,
  singleValue,
  valueContainer,
} from "./styles"

interface AbilityAutoCompleteProps {
  name: string
  options: OptionsType<AutoCompleteOption>
  defaultOption: AutoCompleteOption | null
  updateOption: (types: AutoCompleteOption | null) => void
}

const AbilityAutoCompleteProps: React.FC<AbilityAutoCompleteProps> = ({
  name,
  options,
  defaultOption,
  updateOption,
}) => {
  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        isClearable
        name={name}
        value={defaultOption}
        defaultValue={defaultOption}
        options={options}
        styles={{
          control,
          input,
          menuList,
          option: abilityOption,
          placeholder,
          singleValue,
          valueContainer,
        }}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#DB2777",
            primary25: "#FDE6F3",
            neutral10: "#E5E7EB",
          },
        })}
        onChange={selected => updateOption(selected)}
      />
    </div>
  )
}

export default AbilityAutoCompleteProps
