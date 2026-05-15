import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <h1>Welcome to coffee, cricket n code!!</h1>
        <button
          onClick={() => setisLoggedIn(!isLoggedIn)}
        >Toggle Login</button>
        <div>
          <h3>&& operator</h3>
          {isLoggedIn && <p>Welcome to codex codes</p>}
        </div>
        <div>
          <h3>Ternary operator</h3>
          {isLoggedIn ? <p>Welcome to codex codes</p> : "Please Login"}
        </div>
      </div>
    </>
  )
}

export default App
