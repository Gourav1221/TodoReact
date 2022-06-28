
import React,{useState} from 'react'
import { Navigate  } from 'react-router-dom'

export const Todo = ({getData}) => {
    const [text,setText] = useState("")
    
    const handle = (e)=>{
        setText(e.target.value)
    }
   
    const handleChange = ()=>{
       // getData(text)
        <Navigate to = "/note"/>
        getData(text)
    }
  return (
   <>
 

   <input type="text" onChange={handle}/>
   <button onClick={handleChange}>ADD</button>

  
   </>
  )
}
