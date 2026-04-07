import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {

let myObj = {
  name: 'hassan',
  age: 24
}
let newArr = [1, 2, 3, 4]

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
      <span className='bg-blue-400 text-black text-2xl font-bold px-3 py-1 rounded-lg inline-block mb-3'>
        Your Saviour Speaking!!
      </span>
      <Card name='coffee n cricket' btnText='Click Me' someObj={myObj} someArr={newArr} />
      <Card name='coffee n code' btnText='Press Me' />
    </div>
  )
}


export default App
