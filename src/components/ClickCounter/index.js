import {useState} from 'react'

import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const onIncrementCount = () => setCount(count + 1)

  return (
    <div className="counter-container">
      <h1>
        The Button has been clicked
        <br /> <span>{count}</span> times
      </h1>
      <p>Click the button to increase the count!</p>
      <div>
        <button type="button" onClick={onIncrementCount}>
          Click Me!
        </button>
      </div>
    </div>
  )
}

export default ClickCounter
