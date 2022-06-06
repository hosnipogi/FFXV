import React from 'react'
import { MenuContextProvider } from './menuContext'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'styles/theme'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuContextProvider>{children}</MenuContextProvider>
    </ThemeProvider>
  )
}

export default Providers
