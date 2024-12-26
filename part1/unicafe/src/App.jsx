import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={good} />
          </tr>
          <tr>
            <StatisticLine text='neutral' value={neutral} />
          </tr>

          <tr>
            <StatisticLine text='bad' value={bad} />
          </tr>
          <tr>
            <StatisticLine text='all' value={all} />
          </tr>
          <tr>
            <StatisticLine text='average' value={average} />
          </tr>
          <tr>
            <StatisticLine text='positive' value={positive + ' %'} />
          </tr>
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
