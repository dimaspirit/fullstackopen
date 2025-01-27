import { useContext } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { fetchAnecdotes, updateAnecdote } from './services/anecdotes'
import NotificationContext from './NotificationContex'

const App = () => {
  const queryClient = useQueryClient();
  const [ state, dispatch ] = useContext(NotificationContext);

  const anecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const anecdotesUpdated = anecdotes.map(a => a.id === updatedAnecdote.id ? updatedAnecdote : a);
      queryClient.setQueryData(['anecdotes'], anecdotesUpdated)
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: 'Anecdote voted!',
      })
    },
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: fetchAnecdotes,
    retry: 1,
    refetchOnWindowFocus: false
  })

  const handleVote = (anecdote) => {
    console.log('vote')
    anecdoteMutation.mutate({...anecdote, votes: anecdote.votes+1})
  }

  // const anecdotes = [
  //   {
  //     "content": "If it hurts, do it more often",
  //     "id": "47145",
  //     "votes": 0
  //   },
  // ]

  if(result.isPending) {
    return <h1>Loading</h1>
  }

  if(result.isError) {
    return <h1>anecdote service not available due to problem in server</h1>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
