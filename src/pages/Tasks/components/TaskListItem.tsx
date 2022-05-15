import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { Typography } from '@mui/material'
import { ITask } from 'interfaces/Tasks'
import * as React from 'react'
import { DraggableProvided } from 'react-beautiful-dnd'

import { TaskListActions, TaskListId, TaskListItemStyled } from './TaskList.styled'

interface Props {
  task: ITask
  provided: DraggableProvided
}

const TaskListItem = ({ task, provided }: Props) => {
  return (
    <TaskListItemStyled
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <TaskListActions>
        <DragIndicatorIcon color="info" />
        <Typography variant="h5" component="div">
          {task.text}
        </Typography>
      </TaskListActions>
      <TaskListId>
        <Typography variant="subtitle2" component="span">
          ID: #{task.id}
        </Typography>
      </TaskListId>
    </TaskListItemStyled>
  )
}

export default TaskListItem
