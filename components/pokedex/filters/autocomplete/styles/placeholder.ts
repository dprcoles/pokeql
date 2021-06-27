import { AutoCompleteOption } from '@/types/FilterTypes'
import { CSSProperties } from 'react'
import { PlaceholderProps } from 'react-select'
import dot from './dot'

export const placeholder: any = (
  styles: CSSProperties,
  props: PlaceholderProps<AutoCompleteOption, boolean>
) => ({
  ...styles,
  ...dot(props.theme.colors.neutral10),
})
