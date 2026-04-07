import { useState, useCallback } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-6 my-8 text-orange-800 bg-gray-700">
        <h1 className="text-white text-center text-2xl font-bold mb-6">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white rounded"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1"></div>
        </div>
      </div>
    </>
  )
}

export default App
