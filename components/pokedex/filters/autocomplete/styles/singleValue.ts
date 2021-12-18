import { AutoCompleteOption } from "@/types/FilterTypes"
import { CSSProperties } from "react"
import { SingleValueProps } from "react-select"
import dot from "./dot"

export const singleValue: any = (
  styles: CSSProperties,
  props: SingleValueProps<AutoCompleteOption>
) => ({
  ...styles,
  ...dot(props.theme.colors.primary),
  textTransform: "capitalize",
})
