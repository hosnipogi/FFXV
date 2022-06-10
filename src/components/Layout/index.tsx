import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'
import { Box, Container } from '@mui/material'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

interface StyleProps {
  theme?: Theme
}

const AppWrapper = styled(Box)<StyleProps>`
  display: flex;
  background: ${({ theme }) => theme.palette.background.default};
`

interface Props {
  children: ReactNode
}

const drawerWidth = 240

function Layout({ children }: Props) {
  return (
    <AppWrapper>
      <Sidebar width={drawerWidth} />
      <Container maxWidth={false} disableGutters>
        <Navbar />
        <Container
          sx={{ minHeight: '80vh', paddingBottom: 10, marginY: 3, px: 4 }}
          maxWidth={false}
        >
          {children}
        </Container>
      </Container>
    </AppWrapper>
  )
}

export default Layout
