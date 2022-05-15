import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Link, Toolbar, Typography } from '@mui/material'
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
          <Link
            href={import.meta && import.meta.env?.VITE_GITHUB_REPOSITORY}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon htmlColor="#fff" fontSize="large" />
          </Link>
        </NavbarContainer>
      </Toolbar>
    </NavbarStyled>
  )
}

export default Navbar
