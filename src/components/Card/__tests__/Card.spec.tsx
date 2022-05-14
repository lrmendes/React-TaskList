import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import * as React from 'react'

import Card from '../Card'

describe('Card', () => {
  it('Render the card', () => {
    render(<Card title="Title" />)
  })

  it('Render the card with child', () => {
    const cardTitle = 'card Title'
    const cardContent = 'card content'

    render(
      <Card title={cardTitle}>
        <span>{cardContent}</span>
      </Card>,
    )
    const titleElement = screen.getByText(cardTitle)
    expect(titleElement).toBeInTheDocument()

    const contentElement = screen.getByText(cardContent)
    expect(contentElement).toBeInTheDocument()
  })
})
