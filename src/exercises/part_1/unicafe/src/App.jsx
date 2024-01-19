import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValue = (value, setValue) => () => {
    const new_value = value + 1
    return setValue(new_value)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={setValue(good, setGood)} text="good" />
      <Button handleClick={setValue(neutral, setNeutral)} text="neutral" />
      <Button handleClick={setValue(bad, setBad)} text="bad" />

      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App