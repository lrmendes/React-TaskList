import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import Home from '../pages/Home'
import Tasks from '../pages/Tasks'

const Router = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Router
