import {useState} from 'react'

function App(){
  const [text, setText] = useState("")

  const insideText = (e) =>{
    setText(e.target.value)
  }

  return(
    <>
    <input type="text" value={text} onChange={insideText} placeholder='Enter Your Text Here'/>
    <p>The text is {text}</p>
    </>
  )

}

export default App