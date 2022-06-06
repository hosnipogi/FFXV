import { createTheme } from '@mui/material/styles'
import { red, blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0A1929',
      paper: '#051425',
    },
    border: {
      default: '#132f4c',
      secondary: '#c2e0ff14',
    },
  },
  typography: {
    fontFamily: 'Kanit',
  },
})
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    border: {
      [key: string]: string
    }
  }
}

export default theme
