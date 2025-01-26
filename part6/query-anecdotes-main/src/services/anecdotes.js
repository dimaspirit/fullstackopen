import axois from 'axios'

const BASE_URL = 'http://localhost:3001/anecdotes';

export const fetchAnecdotes = async () => {
  const result = await axois.get(BASE_URL)
  return result.data;
}

export const createAnecdote = async (anecdote) => {
  const result = await axois.post(BASE_URL, anecdote)
}