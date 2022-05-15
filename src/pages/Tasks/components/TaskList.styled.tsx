import styled from 'styled-components'

const TaskListItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #ddd;
  border-left: solid 1px #ddd;
  border-radius: 0.5rem;
  border-radius: 0.2em;
  margin-bottom: 1em;
  padding: 1em;

  box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 10%);
  -webkit-box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 10%);
`

const TaskListActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const TaskListId = styled.div`
  color: #aaa;
  font-style: italic;
`

export { TaskListActions, TaskListId, TaskListItemStyled }
