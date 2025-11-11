import {useState} from 'react'

function App(){
  const [text, setText] = useState("")
  const [items, setItems] = useState([])

  const insideText = (e) =>{
    setText(e.target.value)
  }

  const addItems = () =>{
    setItems(oldArray =>[...oldArray, text])
  }


  return(
    <>
    <input type="text" value={text} onChange={insideText} placeholder='Enter Your Text Here'/>
    <button onClick={addItems}>Add Items</button>
    <p>The text is {text}</p>
    <p>The List are as follows : {items}</p>
    </>
  )

}

export default App