import axois from 'axios'

export const fetchAnecdotes = () => {
  return axois.get('http://localhost:3001/anecdotes')
}