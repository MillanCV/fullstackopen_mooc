import { useState } from "react"

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    })

    setTotal(clicks.left + clicks.right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({
      ...clicks,
      right: clicks.right + 1
    })
    setTotal(clicks.left + clicks.right)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
      <p>Total clicks: {total}</p>
    </div>
  )
}

export default App