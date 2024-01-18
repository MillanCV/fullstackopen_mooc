import { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>

const Button = (props) => {
  return (
    <button onClick={props.onCLick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
    </div>
  )
}

export default App

