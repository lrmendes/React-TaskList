import { AppBar } from '@mui/material'
import styled from 'styled-components'

const NavbarStyled = styled(AppBar)`
  background-color: #124191;
`

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const NavbarTitleMenu = styled.div`
  display: flex;
  align-items: center;
`

export { NavbarContainer, NavbarStyled, NavbarTitleMenu }
