import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Router } from 'react-router-dom'

import Layout from '../Layout'

describe('Layout', () => {
  const history = createMemoryHistory()

  it('Render Layout component', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Layout />
      </Router>,
    )
  })

  it('Render Layout component & toogle/switch mobile menu', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Layout />
      </Router>,
    )

    const switchMenuButton = screen.getByLabelText(/open drawer/i, { selector: 'button' })
    expect(switchMenuButton).toBeInTheDocument()

    // Mobile menu must be hidden
    expect(screen.queryByRole('presentation')).toBeNull()

    // Toogle drawer menu (display mobile menu)
    fireEvent.click(switchMenuButton)

    // Mobile menu must be visible
    expect(screen.queryByRole('presentation')).toBeVisible()
  })
})
