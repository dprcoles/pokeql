import { CSSProperties } from 'react'
import { MenuListComponentProps } from 'react-select'
import { AutoCompleteOption } from '@/types/FilterTypes'

export const menuList: any = (
  styles: CSSProperties,
  props: MenuListComponentProps<AutoCompleteOption, boolean>
) => ({
  ...styles,
  maxHeight: '20rem',
  padding: '0px',
  '::-webkit-scrollbar': {
    width: '0.5rem',
  },
  '::-webkit-scrollbar-track': {
    background: 'rgba(0, 0, 0, 0)',
    borderRadius: '1rem',
  },
  '::-webkit-scrollbar-thumb': {
    background: props.theme.colors.primary25,
    borderRadius: '1rem',
    boxShadow: 'inset 0 0 0.6rem rgba(0, 0, 0, 0.1)',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: props.theme.colors.primary,
  },
})
