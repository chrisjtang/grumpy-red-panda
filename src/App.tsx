import { useState } from 'react'
import './App.css'
import Bio from './Bio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bio/>
    </>
  )
}

export default App
