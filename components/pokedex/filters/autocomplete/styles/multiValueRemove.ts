import { CSSProperties } from 'react'
import { OptionProps } from 'react-select'
import chroma from 'chroma-js'
import { AutoCompleteOption } from '@/types/FilterTypes'
import { getTypeColors } from '@/utils/helpers'

export const multiValueRemove: any = (
  styles: CSSProperties,
  props: OptionProps<AutoCompleteOption, boolean>
) => {
  const { fill } = getTypeColors(props.data.label)
  const color = chroma(fill)
  return {
    ...styles,
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: color.brighten(0.3).css(),
    },
  }
}
