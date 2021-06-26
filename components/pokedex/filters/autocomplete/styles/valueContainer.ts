import { CSSProperties } from 'react'
import { ValueContainerProps } from 'react-select'
import { AutoCompleteOption } from '@/types/FilterTypes'

export const valueContainer: any = (
  styles: CSSProperties,
  props: ValueContainerProps<AutoCompleteOption, boolean>
) => ({
  ...styles,
  paddingTop: '0.65rem',
  paddingBottom: '0.65rem',
})
