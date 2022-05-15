import '@testing-library/jest-dom'

import { render, screen, within } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Router } from 'react-router-dom'

import Drawer from '../Drawer'

describe('Drawer', () => {
  const history = createMemoryHistory()

  it('Render Drawer component', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Drawer open={true} width={200} />
      </Router>,
    )
  })

  it('Render Drawer and validate menu items (content & length)', () => {
    render(
      <Router location={'/home'} navigator={history}>
        <Drawer open={true} width={200} />
      </Router>,
    )

    const menuList = screen.getByRole('list')
    const { getAllByRole } = within(menuList)
    const menuListItems = getAllByRole('listitem')

    // The Drawer Menu must have 2 items
    expect(menuListItems.length).toBe(2)

    expect(menuListItems[0]).toHaveTextContent(/home/i)
    expect(menuListItems[1]).toHaveTextContent(/tasks/i)
  })
})
