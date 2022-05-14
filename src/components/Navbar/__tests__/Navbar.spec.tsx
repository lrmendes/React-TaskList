import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import * as React from 'react'

import Navbar from '../Navbar'

describe('Navbar', () => {
  const fnMock = () => null

  it('Render Navbar component', () => {
    render(<Navbar switchMenu={fnMock} />)
  })

  it('Render Navbar component and validate mobile button', () => {
    render(<Navbar switchMenu={fnMock} />)

    // Menu Icon must be displayed in mobile screens
    const menuIconButton = screen.getByLabelText(/open drawer/i, { selector: 'button' })
    expect(menuIconButton).toBeVisible()
  })

  it('Render Navbar component and validate header text', () => {
    render(<Navbar switchMenu={fnMock} />)

    const titleElement = screen.getByText(/React Task List/i)
    expect(titleElement).toBeInTheDocument()
  })
})
