import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './reducers/filterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    anecdotes: anecdoteReducer
  }
})

store.subscribe(() => console.log('Store', store.getState()))

export default store