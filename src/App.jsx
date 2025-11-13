import {useState} from 'react'

function App(){
  const [text, setText]= useState("")
  const [items, setItems] = useState([])


  const liveText = (e) =>{
    setText(e.target.value)
  }



  const addItem =()=>{
    setItems(oldList=>[...oldList, text])
  }


  return (
    <>
  <input style={{fontSize:"100px", padding:"15px" ,margin:"15px"}} type="text" placeholder="Enter your Text"
    value={text} 
    onChange={liveText}
  />
  <br />
  <button style={{ display:"flex",marginTop:"15px", background:"SkyBlue", borderRadius:"15px" ,fontSize:"75px" ,margin:"auto" }} 

  onClick={addItem}>
    
    
  Add Item</button>

  <ul>

    {items.map((item)=> (
      <li>{item}</li>
    ))}
    
    </ul>


    </>
  )
}

export default App