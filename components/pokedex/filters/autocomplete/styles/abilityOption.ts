import { CSSProperties } from 'react'
import { OptionProps } from 'react-select'
import chroma from 'chroma-js'
import { AutoCompleteOption } from '@/types/FilterTypes'

export const abilityOption: any = (
  styles: CSSProperties,
  props: OptionProps<AutoCompleteOption, boolean>
) => {
  const color = chroma(props.theme.colors.primary)
  return {
    ...styles,
    backgroundColor: props.isDisabled
      ? null
      : props.isSelected
      ? props.theme.colors.primary
      : props.isFocused
      ? color.alpha(0.1).css()
      : null,
    color: props.isDisabled
      ? props.theme.colors.neutral10
      : props.isSelected
      ? chroma.contrast(color, 'white') > 2
        ? 'white'
        : 'black'
      : 'black',
    cursor: props.isDisabled ? 'not-allowed' : 'default',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    ':active': {
      backgroundColor:
        !props.isDisabled &&
        (props.isSelected ? props.theme.colors.primary : color.alpha(0.3).css()),
    },
  }
}
