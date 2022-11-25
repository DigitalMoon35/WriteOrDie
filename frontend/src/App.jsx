import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
   <div>
      <form action="">
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
      </form>
   </div>
  )
}

export default App
