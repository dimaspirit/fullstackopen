import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import anecdotesServices from './services/anecdotes';
import { useEffect } from 'react'
import { set as setAnecdots } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdotesServices.getAll()
      .then(anecdotes => dispatch(setAnecdots(anecdotes)))

  })
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App