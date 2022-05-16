import { ITask } from 'interfaces/Tasks'
import { useQuery } from 'react-query'

import { BACKEND_API } from '../constants'
import mockTaskList from './mocks/taskList.json'

const getTasksAPI = async () => {
  // Applied to GH Deploy only (must be removed in prod)
  if (window.location.host.includes('.github.io'))
    return mockTaskList.slice(0, Math.floor(Math.random() * mockTaskList.length))

  const response = await fetch(`${BACKEND_API}/tasks`)
  const data: ITask[] = await response.json()
  return data
}

export const useTasks = () => {
  return useQuery(['tasks'], () => getTasksAPI(), {
    retry: false,
    refetchOnWindowFocus: false,
  })
}
