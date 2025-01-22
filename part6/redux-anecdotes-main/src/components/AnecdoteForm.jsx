import { add } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import anecdotesServices from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreateAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    anecdotesServices.create(anecdote)
      .then((anecdote) => {
        dispatch(add(anecdote))
      }).catch(error => {
        console.log(error);
      })
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
