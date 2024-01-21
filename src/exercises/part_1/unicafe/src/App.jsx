import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const setValue = (value, setValue) => () => {
    const new_val = value + 1
    const new_all = all + 1
    let positive = good

    setAll(new_all)
    setValue(new_val)

    let score = good - bad
    if (setValue === setBad) {
      score -= new_val
    }
    else if (setValue === setGood) {
      score += new_val
      positive += 1

    }

    setAverage(score / (new_all))
    setPositive((positive / new_all) * 100)

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
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App