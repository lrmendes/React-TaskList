import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import DragAndDrop from 'components/DragAndDrop'
import { ITask } from 'interfaces/Tasks'
import * as React from 'react'

import TaskList from '../TaskList'

describe('TaskList component', () => {
  const mockedListItems: ITask[] = [
    { id: 1, text: 'task 1', completed: false },
    { id: 2, text: 'task 2', completed: false },
  ]

  it('Render the TaskList component (no list items)', () => {
    render(<TaskList />)
  })

  it('Render the TaskList component (with list items)', () => {
    render(
      <DragAndDrop listItems={mockedListItems}>
        <TaskList />
      </DragAndDrop>,
    )
  })

  it('Render the TaskList component and validate TaskListItems', () => {
    render(
      <DragAndDrop listItems={mockedListItems}>
        <TaskList />
      </DragAndDrop>,
    )

    // Validate TaskListItems
    expect(screen.getByText(/task 1/i)).toBeVisible()
    expect(screen.getByText(/task 2/i)).toBeVisible()

    // The list must display only 2 items (mockedList size)
    expect(screen.getAllByText(/task/i)).toHaveLength(2)
  })
})
