import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import filterReducer  from './reducers/FilterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'

const store = createStore(combineReducers({
  filter: filterReducer,
  anecdotes: anecdoteReducer
}))

store.subscribe(() => console.log('Store', store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)