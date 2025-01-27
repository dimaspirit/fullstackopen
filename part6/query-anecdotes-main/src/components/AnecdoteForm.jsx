import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../services/anecdotes"
import NotificationContext from "../NotificationContex"

const AnecdoteForm = () => {
  const [state, dispatch] = useContext(NotificationContext);

  const queryClient = useQueryClient();
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: 'Anecdote created successfully!',
      })
    },
    onError: (error) => {
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: error.response.data.error,
      })
    }
  })

  const getId = () => (100000 * Math.random()).toFixed(0)

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const anecdote = {
      content,
      votes: 0,
      id: getId(),
    };
    console.log('new anecdote', anecdote)
    newAnecdoteMutation.mutate(anecdote)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
