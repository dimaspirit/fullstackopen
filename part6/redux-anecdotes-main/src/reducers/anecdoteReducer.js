import { createSlice } from "@reduxjs/toolkit"
import anecdoteServices from '../services/anecdotes';

const initialState = []

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    vote(state, action) {
      const id = action.payload
      const anecdote = state.find(a => a.id === id);
      anecdote.votes++

      state.map(a => a.id === id ? anecdote : a)
    },
    add(state, action) {
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

export default anecdotesSlice.reducer
export const { vote, add, setAnecdotes } = anecdotesSlice.actions