import { ITask } from 'interfaces/Tasks'
import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import TaskListItem from './TaskListItem'

interface Props {
  listItems?: ITask[]
}

const TaskList = ({ listItems }: Props) => {
  return (
    <>
      {listItems &&
        listItems.map((task, index) => {
          return (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(provided) => <TaskListItem provided={provided} task={task} />}
            </Draggable>
          )
        })}
    </>
  )
}

export default TaskList
