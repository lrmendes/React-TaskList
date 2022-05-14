import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Toolbar, Typography } from '@mui/material'
import * as React from 'react'

import { NavbarContainer, NavbarStyled, NavbarTitleMenu } from './Navbar.styles'

interface Props {
  switchMenu: () => void
}

const Navbar = ({ switchMenu }: Props) => {
  return (
    <NavbarStyled
      position="fixed"
      sx={{ zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <NavbarContainer>
          <NavbarTitleMenu>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={switchMenu}
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              React Task List
            </Typography>
          </NavbarTitleMenu>
        </NavbarContainer>
      </Toolbar>
    </NavbarStyled>
  )
}

export default Navbar