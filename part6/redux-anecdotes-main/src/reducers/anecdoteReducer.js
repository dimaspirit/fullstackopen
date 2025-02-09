import { createSlice } from "@reduxjs/toolkit"
import anecdoteServices from '../services/anecdotes';

const initialState = []

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setVotes(state, action) {
      const {id, votes} = action.payload

      state.map((anecdote) => {
        if (anecdote.id === id) {
          anecdote.votes = votes
        }

        return anecdote
      })
    },
    addAnecdote(state, action) {
      return state.concat([action.payload])
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll();
    dispatch(setAnecdotes(anecdotes));
  }
}

export const createNew = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteServices.create(content)
    dispatch(addAnecdote(anecdote));
  }
}

export const voteForAnecdote = (id, data) => {
  return async (dispatch) => {
    const updated = await anecdoteServices.update(id, data)
    dispatch(setVotes({id, votes: updated.votes}))
  }
}

export default anecdotesSlice.reducer
export const { vote, addAnecdote, setAnecdotes, setVotes } = anecdotesSlice.actions