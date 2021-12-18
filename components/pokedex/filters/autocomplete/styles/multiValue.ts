import { CSSProperties } from "react"
import { OptionProps } from "react-select"
import { getTypeColors } from "@/utils/helpers"
import { AutoCompleteOption } from "@/types/FilterTypes"

export const multiValue: any = (
  styles: CSSProperties,
  props: OptionProps<AutoCompleteOption, boolean>
) => {
  const { fill, border } = getTypeColors(props.data.label)
  return {
    ...styles,
    border: `0.1rem solid ${border}`,
    backgroundColor: fill,
    borderRadius: "0.375rem",
  }
}
