import React from 'react'
import RickComponont from './RickComponent/RickComponont'
import { QueryClientProvider,QueryClient } from 'react-query'
const queryClient =new QueryClient

const App = () => {
  return (
    <QueryClientProvider client ={queryClient}>
<RickComponont/>
    </QueryClientProvider>
    
  )
}

export default App