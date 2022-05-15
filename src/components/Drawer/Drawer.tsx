import {
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routesMenu } from 'routes/routes'

import styles from './Drawer.module.css'

const DrawerMenu = () => {
  const { pathname } = useLocation()
  const selectedStyle = (path: string) =>
    path === pathname ? styles.selectedItem : undefined

  return (
    <div>
      <Toolbar />
      <List>
        {routesMenu.map(({ path, title, icon }) => (
          <ListItem key={path} className={selectedStyle(path)} disablePadding>
            <Link
              to={{ pathname: path }}
              style={{ width: '100%', textDecoration: 'none', color: 'currentcolor' }}
            >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

interface Props {
  open: boolean
  width: number
}

const Drawer = ({ open, width }: Props) => {
  return (
    <>
      <MaterialDrawer
        variant="temporary"
        sx={{
          width: width,
          flexShrink: 0,
          display: { xs: 'block', sm: 'none' },
          [`& .MuiDrawer-paper`]: { width: width, boxSizing: 'border-box' },
        }}
        open={open}
      >
        <DrawerMenu />
      </MaterialDrawer>
      <MaterialDrawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width },
        }}
        open
      >
        <DrawerMenu />
      </MaterialDrawer>
    </>
  )
}

export default Drawer
