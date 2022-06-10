import React from 'react'
import { MenuProvider } from './menuProvider'
import { ModalProvider } from './modalProvider'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'styles/theme'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ModalProvider>
        <MenuProvider>{children}</MenuProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default Providers
