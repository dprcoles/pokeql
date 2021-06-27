import { CSSProperties } from 'react'
import { OptionProps } from 'react-select'
import chroma from 'chroma-js'
import { AutoCompleteOption } from '@/types/FilterTypes'
import { getTypeColors } from '@/utils/helpers'

export const typeOption: any = (
  styles: CSSProperties,
  props: OptionProps<AutoCompleteOption, boolean>
) => {
  const { fill } = getTypeColors(props.data.label)
  const color = chroma(fill)
  return {
    ...styles,
    backgroundColor: props.isDisabled
      ? null
      : props.isSelected
      ? fill
      : props.isFocused
      ? color.alpha(0.1).css()
      : null,
    color: props.isDisabled
      ? '#ccc'
      : props.isSelected
      ? chroma.contrast(color, 'white') > 2
        ? 'white'
        : 'black'
      : fill,
    cursor: props.isDisabled ? 'not-allowed' : 'default',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    ':active': {
      ...styles,
      backgroundColor: !props.isDisabled && (props.isSelected ? fill : color.alpha(0.3).css()),
    },
  }
}
