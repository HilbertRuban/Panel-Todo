import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline text-center m-4">Todo app</h1>
    </div>
  )
}

export default App
