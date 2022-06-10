import React, { useContext } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import useIsMobile from 'hooks/useIsMobile'
import { MenuContext } from 'providers/menuProvider'

function Navbar() {
  const { menuIsOpen, setMenuOpen, country, currency } = useContext(MenuContext)
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
      <Toolbar sx={{ px: 4 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleCloseMenu}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Stack justifyContent="space-between" flexDirection="row" width="100%">
          <Typography>Final Fantasy XV: A New Empire</Typography>
          <Stack flexDirection="row" gap={2}>
            <Avatar
              alt={country}
              src={`https://countryflagsapi.com/svg/${country}`}
              sx={{ width: 24, height: 24 }}
            />
            <Typography>{currency}</Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
