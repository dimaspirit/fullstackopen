import { createSlice } from "@reduxjs/toolkit"

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
    set(state, action) {
      return action.payload
    }
  }
})

export default anecdotesSlice.reducer
export const { vote, add, set } = anecdotesSlice.actions