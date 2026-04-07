import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(prev => Math.min(prev + 1, 32));
    setCounter(prev => Math.min(prev + 1, 32));
  }

  const removeValue = () => {
    setCounter(counter - 1);
    setCounter(prev => Math.max(prev - 1, 2));
  }

  return (
    <div id="center">
      <h1>Coffee, Cricket & Code ☕</h1>

      <div className="counter-card">
        <p className="counter-label">Counter Value</p>
        <span className="counter-value">{counter}</span>

        <div className="counter-buttons">
          <button className="btn btn-add" onClick={addValue} disabled={counter >= 32}>
            + Add
          </button>
          <button className="btn btn-remove" onClick={removeValue} disabled={counter <= 2}>
            − Remove
          </button>
        </div>

        <p className="counter-range">Range: 2 – 32</p>
      </div>
    </div>
  )
}

export default App
