import { CSSProperties } from 'react'
import { PlaceholderProps } from 'react-select'
import { AutoCompleteOption } from '@/types/FilterTypes'

export const placeholder: any = (
  styles: CSSProperties,
  props: PlaceholderProps<AutoCompleteOption, boolean>
) => ({
  ...styles,
  margin: '2px',
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
})
