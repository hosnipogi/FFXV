import React, { useContext } from 'react'
import { AppBar, Toolbar } from '@mui/material'
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
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleCloseMenu}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
