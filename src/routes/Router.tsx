import React from 'react'
import { BrowserRouter, Navigate } from 'react-router-dom'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Tasks from '../pages/Tasks'

const Router = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  )
}

export default Router
