import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import useIsMobile from 'hooks/useIsMobile'
import { MenuContext } from 'providers/menuProvider'

function Navbar() {
  const { menuIsOpen, setMenuOpen } = useContext(MenuContext)
  const handleCloseMenu = () => setMenuOpen(!menuIsOpen)
  const isMobile = useIsMobile()

  if (!isMobile) return null

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'border.default',
      }}
      elevation={0}
    >
      <Toolbar sx={{ px: 4, gap: 1 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleCloseMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography>Final Fantasy XV: A New Empire</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
