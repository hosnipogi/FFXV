import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1100,
      lg: 1400,
      xl: 1536,
    },
  },
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
    facebook: {
      default: '#4C7DDC',
    },
  },
  typography: {
    fontFamily: 'Kanit',
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({ borderColor: theme.palette.border.default }),
      },
    },
  },
})
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    border: {
      [key: string]: string
    }
    facebook: {
      [key: string]: string
    }
  }
  interface PaletteOptions {
    border: {
      [key: string]: string
    }
    facebook: {
      [key: string]: string
    }
  }
}

export default theme
