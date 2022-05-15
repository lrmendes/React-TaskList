import { Box, Toolbar } from '@mui/material'
import Drawer from 'components/Drawer'
import Navbar from 'components/Navbar'
import * as React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const drawerWidth = React.useMemo(() => 200, [])

  const switchMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar switchMenu={switchMenu} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="drawer box"
      >
        <Drawer open={openMenu} width={drawerWidth} />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
