import { CSSProperties } from 'react'

export const multiValueLabel: any = (styles: CSSProperties) => {
  return {
    ...styles,
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    padding: '0.25rem',
  }
}
