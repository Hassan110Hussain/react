import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);
  // let counter = 10;

  const addValue = () => {
    setCounter(prev => (prev < 32 ? prev + 1 : prev));
  }

  const removeValue = () => {
    setCounter(prev => (prev > 2 ? prev - 1 : prev));
  }

  return (
    <>
      <h1>Coffee, Cricket & Code !!</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
        disabled={counter >= 32}
      >
        Add Value {counter}
      </button>

      <br />

      <button
        onClick={removeValue}
        disabled={counter <= 2}
      >
        Remove Value {counter}
      </button>
    </>
  )
}

export default App
