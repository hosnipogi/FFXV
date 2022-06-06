import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { MenuContext } from 'Providers/menuContext'
import Link from 'next/link'

import useIsMobile from 'hooks/useIsMobile'
import { MENUS } from 'config'

type DrawerProps = {
  width: number | string
}

function Sidebar({ width = 240 }: DrawerProps) {
  const { menuIsOpen, setMenuOpen } = useContext(MenuContext)
  // const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMenuOpen(!menuIsOpen)
  }

  const isMobile = useIsMobile()
  const container =
    typeof window !== undefined ? () => document.body : undefined

  const css = {
    width: width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      borderRight: '1px solid',
      borderColor: 'border.secondary',
      width,
      boxSizing: 'border-box',
      backgroundColor: 'background.default',
      color: 'text.secondary',
    },
  }

  if (isMobile) {
    return (
      <>
        <Drawer
          container={container}
          variant="temporary"
          open={menuIsOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={css}
        >
          <DrawerChildren />
        </Drawer>
      </>
    )
  }
  return (
    <Drawer sx={css} variant="permanent" anchor="left">
      <DrawerChildren />
    </Drawer>
  )
}

const DrawerChildren = () => (
  <>
    <Toolbar sx={{ color: 'text.primary' }}>Final Fantasy XV Packs</Toolbar>
    <Divider />
    <List>
      {MENUS.map(({ label, href }, index) => (
        <ListItem key={label} disablePadding>
          <Link href={href} passHref>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
      mb={4}
    >
      <FacebookIcon sx={{ fontSize: 26 }} />
      <TwitterIcon sx={{ fontSize: 26 }} />
    </Box>
  </>
)

export default Sidebar
