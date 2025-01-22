import { add } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreateAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(add(anecdote))
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
