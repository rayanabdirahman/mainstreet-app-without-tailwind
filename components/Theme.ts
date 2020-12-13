import baseStyled, { ThemedStyledInterface } from 'styled-components'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'
import Layout from '../constants/Layout'

export const theme = {
  color: Colors,
  font: Fonts,
  layout: Layout
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>
