import { CSSProperties } from 'react'
import { InputProps } from 'react-select'
import dot from './dot'

export const input: any = (styles: CSSProperties, props: InputProps) => ({
  ...styles,
  ...dot(props.theme.colors.primary25),
})
