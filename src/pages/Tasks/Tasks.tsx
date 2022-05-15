import RefreshIcon from '@mui/icons-material/Refresh'
import { Alert, Button, Skeleton } from '@mui/material'
import { useTasks } from 'api/tasks'
import Card from 'components/Card'
import DragAndDrop from 'components/DragAndDrop'
import { ITask } from 'interfaces/Tasks'
import * as React from 'react'

import TaskList from './components/TaskList'
import styles from './Tasks.module.css'

interface Props {
  completed: ITask[]
  notCompleted: ITask[]
}

const Tasks = () => {
  const { isFetching, data, error, refetch } = useTasks()

  /* Split task list in completed/not completed to display them in separated cards */
  const [completed, notCompleted] = React.useMemo(() => {
    if (!data) return [[], []]
    const filtering: Props = data.reduce(
      (acc, cur) => {
        cur.completed ? acc.completed.push(cur) : acc.notCompleted.push(cur)
        return acc
      },
      { completed: [] as ITask[], notCompleted: [] as ITask[] },
    )
    return [filtering.completed, filtering.notCompleted]
  }, [data])

  return (
    <div className={styles.tasksContainer}>
      <div>
        <Button startIcon={<RefreshIcon />} onClick={() => refetch()}>
          Refresh
        </Button>
      </div>
      {isFetching ? (
        <div>
          <Skeleton height={50} />
          <Skeleton height={50} />
        </div>
      ) : error ? (
        <Alert severity="error">
          Error when trying to fetch data. Please, try again!
        </Alert>
      ) : (
        <div className={styles.container}>
          <Card title={`NOT COMPLETED (${completed.length})`}>
            <DragAndDrop listItems={completed}>
              <TaskList />
            </DragAndDrop>
          </Card>

          <Card title={`COMPLETED (${notCompleted.length})`}>
            <DragAndDrop listItems={notCompleted}>
              <TaskList />
            </DragAndDrop>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Tasks
