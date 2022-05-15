import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import * as React from 'react'

import { baseUrlPath } from '../constants'

export const routesMenu = [
  { title: 'Home', path: `${baseUrlPath}/home`, icon: <HomeOutlinedIcon /> },
  { title: 'Tasks', path: `${baseUrlPath}/tasks`, icon: <AssignmentOutlinedIcon /> },
]
