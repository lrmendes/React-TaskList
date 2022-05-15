import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import * as React from 'react'

import DragAndDrop from '../DragAndDrop'

describe('DragAndDrop', () => {
  const listItems = ['item 1', 'item 2', 'item n']

  const MockedList = ({ listItems = [] }) => (
    <>
      {listItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  )

  it('Render the DragAndDrop component', () => {
    render(
      <DragAndDrop listItems={listItems}>
        <></>
      </DragAndDrop>,
    )
  })

  it('Render the DragAndDrop component & validate list items (children props)', () => {
    render(
      <DragAndDrop listItems={listItems}>
        <MockedList />
      </DragAndDrop>,
    )

    // DragAndDrop must pass listItems to children component
    // and the mock children must display these items
    listItems.forEach((item) => expect(screen.getByText(item)).toBeVisible())
  })
})
