import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  if (text === "positive") return <tr>{text} {value}%</tr>

  return <tr>{text} {value}</tr>
}

const Statistic = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive_percentage = (good / all) * 100

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive_percentage} />
    </table>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValue = (value, setValue) => () => setValue(value + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={setValue(good, setGood)} text="good" />
      <Button handleClick={setValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick={setValue(bad, setBad)} text="bad" />

      <h1>statistics</h1>
      <Statistic good={good} neutral={neutral} bad={bad} />


    </div>
  )
}

export default App