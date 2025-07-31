import './Counter.css'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const handleClick = () => {
        setCount(count+1)
    }

    return (
      <div id='counter-box'>
        <h3> {(count < 11)? `You have clicked ${count} times`: "Maximum Limit is 10!"} </h3>
        <button onClick={handleClick} disabled={count>10} >Click ME!</button>
      </div>
  )
}

export default Counter