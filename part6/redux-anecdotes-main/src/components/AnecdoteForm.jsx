import { useDispatch } from "react-redux"
import { createNew } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreateAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createNew(anecdote))
  }

  return (
    <>
      <h2>create new</h2>

      <form onSubmit={handleCreateAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm;
