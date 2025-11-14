import {useState} from 'react'

function App(){
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  const addItems = () =>{
    setList(oldList=>[...oldList,text])
    
  }

  const liveText = (e)=>{
    setText(e.target.value)
  }
  return (
    <>
    <input type="text" value={text} placeholder='Type Something' onChange={liveText} />
    <br />
    <button onClick={addItems}>Add Items</button>


    <ul>
      {list.map((list)=>(
        <li>{list}</li>
      ))}
    </ul>
    </>
  )
}

export default App;