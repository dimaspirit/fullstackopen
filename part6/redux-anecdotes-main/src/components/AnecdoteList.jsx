import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { voteForAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    return state.anecdotes
      .filter(anecdote => {
        const { filter } = state

        if(filter.trim() === '') return anecdote
        return anecdote.content.includes(filter)
      }).sort((a, b) => b.votes - a.votes)
  }, shallowEqual)

  const handleVote = (id) => {
    const anecdote = anecdotes.find(a => a.id === id);
    dispatch(voteForAnecdote(id, {votes: anecdote.votes+1}))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList