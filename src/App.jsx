import {useState} from 'react'

function App(){

  const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(count+1)
  }

  return(
    <>
    
      <button onClick={increment}>Increase</button>
      <p>count is : {count}</p>
    
    </>
  )
}

export default App;