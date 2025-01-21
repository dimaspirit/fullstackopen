import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

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
    console.log('vote', id)
    dispatch(vote(id))
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