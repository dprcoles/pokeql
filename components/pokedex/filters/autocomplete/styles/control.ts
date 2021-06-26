import { CSSProperties } from 'react'
import { ControlProps } from 'react-select'
import { AutoCompleteOption } from '@/types/FilterTypes'

export const control: any = (
  styles: CSSProperties,
  props: ControlProps<AutoCompleteOption, boolean>
) => ({
  ...styles,
  border: `2px solid ${props.theme.colors.neutral10}`,
  backgroundColor: 'white',
  borderRadius: '0px',
})
