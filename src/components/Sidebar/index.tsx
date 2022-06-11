import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import QuizIcon from '@mui/icons-material/Quiz'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
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
  const { menuIsOpen, setMenuOpen, country, currency } = useContext(MenuContext)
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
          <DrawerChildren geoDetails={{ country, currency }} />
        </Drawer>
      </>
    )
  }
  return (
    <Drawer sx={css} variant="permanent" anchor="left">
      <DrawerChildren geoDetails={{ country, currency }} />
    </Drawer>
  )
}

const DrawerChildren = ({ geoDetails }) => {
  const isMobile = useIsMobile()

  return (
    <>
      <Toolbar sx={{ color: 'text.primary' }}>
        <Typography>Final Fantasy XV</Typography>
      </Toolbar>

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
      <Stack flexDirection="row" px={2} py={4} gap={4}>
        <Avatar
          alt={geoDetails.country}
          src={`https://countryflagsapi.com/svg/${geoDetails.country}`}
          sx={{ width: 22, height: 22 }}
        />
        {geoDetails.currency}
      </Stack>
      <Divider
        sx={{ borderColor: isMobile ? 'border.secondary' : 'border.default' }}
      />
      <Stack mb={4} sx={{ position: 'absolute', bottom: 0, pl: 2 }} gap={2}>
        <FacebookIcon sx={{ fontSize: 26 }} />
        <TwitterIcon sx={{ fontSize: 26 }} />
      </Stack>
    </>
  )
}

export default Sidebar
