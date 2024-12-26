import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
];

const MostVoted = ({text}) => {
  if(!text) {
    return <p>Vote first</p>
  } 

  return <p>{text}</p>
}

const App = () => {
  const anecdotesLength = anecdotes.length;
  const [votes, setVotes] = useState(new Array(anecdotesLength).fill(0));
  const [selected, setSelected] = useState(getRandomNum(anecdotesLength));
  const [mostVoted, setMostVoted] = useState(null);

  function  getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {
    const randomNum = getRandomNum(anecdotes.length);
    if(randomNum === selected) {
      handleClick()
      return;
    }

    setSelected(randomNum);
  }

  const handleVote = () => {
    let updatedVotes = votes.concat();
    updatedVotes[selected] = updatedVotes[selected]+1;
    setVotes(updatedVotes);

    const maxValue = Math.max(...updatedVotes);
    const indexMaxValue = updatedVotes.indexOf(maxValue); 
    setMostVoted(indexMaxValue);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <MostVoted text={anecdotes[mostVoted]} />
    </div>
  )
}

export default App
