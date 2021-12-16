import React, { PropsWithChildren } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'

export const lightTheme = {
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: '1.6rem !important',
      },
    },
  },
  colors: {
    light20: '#FCFDFE',
    light30: '#FBFCFE',
    light40: '#F9FAFD',
    light60: '#F7F8FC',
    light70: '#F6F7FC',
    light90: '#F3F5FB',
    light100: '#F1F3FA',
    light120: '#ECEEF5',
    surface100: '#FFFFFF',
    btnMain: '#02acd1',
    greyBorder: '#e8e9e9',
  },
  shadows: {
    primary20: '0px 4px 8px rgba(185, 187, 198, 0.24)',
    surface10: '0px 2px 4px rgba(236, 238, 245, 0.64)',
  },
  fontColors: {
    gray80: '#545456',
    gray90: '#3F3F42',
    gray100: '#29292C',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  fontWeights: {
    light: '400',
    normal: '500',
    semiBold: '600',
    bold: '700',
  },
  media: {
    xl: '1440px',
    lg: '1114px',
    md: '944px',
    sm: '501px',
  },
}

type ThemeProps = PropsWithChildren<{
  theme?: DefaultTheme
}>

const Theme = ({ children, theme = lightTheme }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
