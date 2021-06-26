import { CSSProperties } from 'react'
import { OptionProps } from 'react-select'
import { AutoCompleteOption } from '@/types/FilterTypes'

export const multiValueLabel: any = (
  styles: CSSProperties,
  props: OptionProps<AutoCompleteOption, boolean>
) => {
  return {
    ...styles,
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    padding: '0.25rem',
  }
}
