import {useState} from 'react'

function App(){

  const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(count+1)
  }

  const decrement = ()=>{
    setCount(count - 1)
  }

  const reset =()=>{
    setCount(0)
  }

  return(
    <>
    
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <p>count is : {count}</p>
    
    </>
  )
}

export default App;