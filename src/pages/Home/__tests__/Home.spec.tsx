import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import * as React from 'react'

import { tags } from '../../../constants'
import Home from '../Home'

describe('Home Page', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('Render Home Page', () => {
    render(<Home />)
  })

  it('Render Home Page & validate tech tags', () => {
    render(<Home />)

    const techTitle = screen.getByText(/Tech Stack/i)
    expect(techTitle).toBeVisible()

    // Validate if all tech tags appears in the page
    tags.forEach((tag) => expect(screen.getByText(tag)).toBeVisible())
  })

  it('Render Home Page & validate image', () => {
    render(<Home />)

    const image = screen.getByAltText(
      /A men and a woman interacting with a task list in the background./i,
    )
    expect(image).toBeVisible()
  })
})
