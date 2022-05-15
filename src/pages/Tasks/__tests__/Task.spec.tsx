import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { enableFetchMocks } from 'jest-fetch-mock'
import fetchMock from 'jest-fetch-mock'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Task from '../Tasks'

const queryClient = new QueryClient()
const Wrapper: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('Task Page', () => {
  beforeAll(() => {
    enableFetchMocks()
  })

  it('Render the Task Page', () => {
    fetchMock.mockResponseOnce(JSON.stringify([]))

    render(
      <Wrapper>
        <Task />
      </Wrapper>,
    )
  })
})
