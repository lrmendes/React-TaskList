import * as React from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import { DnDList } from './DragAndDrop.styles'

interface Props {
  listItems: any[]
  children: React.ReactElement
}

const DragAndDrop = ({ listItems, children }: Props) => {
  const [dragListItems, setDragListItems] = React.useState(listItems)

  React.useEffect(() => {
    setDragListItems(listItems)
  }, [listItems])

  const onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100)
    }
  }

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || result.destination.index === result.source.index) {
      return
    }

    const listOrder = reorder(
      dragListItems,
      result.source.index,
      result.destination.index,
    )

    setDragListItems(listOrder)
  }

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable droppableId="DnD">
        {(provided) => (
          <DnDList {...provided.droppableProps} ref={provided.innerRef}>
            {React.cloneElement(children, { listItems: dragListItems })}
            {provided.placeholder}
          </DnDList>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragAndDrop
