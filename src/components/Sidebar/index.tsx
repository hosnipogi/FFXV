import React, { useContext } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import QuizIcon from '@mui/icons-material/Quiz'
import { NoctisIcon } from 'components/Icons'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { MenuContext } from 'providers/menuProvider'
import Link from 'next/link'

import useIsMobile from 'hooks/useIsMobile'
import { MENUS } from 'config'

type DrawerProps = {
  width: number | string
}

function Sidebar({ width = 240 }: DrawerProps) {
  const { menuIsOpen, setMenuOpen } = useContext(MenuContext)
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
      borderColor: 'border.default',
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

const DrawerChildren = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <NoctisIcon width={38} height={38} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            color: 'text.primary',
            variant: 'subtitle2',
          }}
          secondaryTypographyProps={{
            color: 'text.primary',
            variant: 'subtitle2',
          }}
          primary="Final Fantasy XV:"
          secondary="A New Empire"
        />
      </ListItem>

      <Divider
        sx={{ borderColor: isMobile ? 'border.secondary' : 'border.default' }}
      />
      <List>
        {MENUS.map(({ label, href }, index) => (
          <ListItem key={label} disablePadding>
            <Link href={href} passHref>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <QuizIcon />}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{ borderColor: isMobile ? 'border.secondary' : 'border.default' }}
      />
      <List sx={{ position: 'absolute', bottom: 0 }}>
        <ListItem disablePadding>
          <Link href={''} passHref>
            <ListItemButton>
              <ListItemIcon>
                <FacebookIcon sx={{ fontSize: 26 }} />
              </ListItemIcon>
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href={''} passHref>
            <ListItemButton>
              <ListItemIcon>
                <TwitterIcon sx={{ fontSize: 26 }} />
              </ListItemIcon>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </>
  )
}

export default Sidebar
