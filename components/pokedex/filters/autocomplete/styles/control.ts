import { CSSProperties } from 'react'
import { ControlProps } from 'react-select'
import { AutoCompleteOption } from '@/types/FilterTypes'

export const control: any = (
  styles: CSSProperties,
  props: ControlProps<AutoCompleteOption, boolean>
) => ({
  ...styles,
  border: `0.1rem solid ${props.theme.colors.neutral10}`,
  backgroundColor: 'white',
})
