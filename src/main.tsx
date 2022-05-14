import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'routes/Router'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
)
