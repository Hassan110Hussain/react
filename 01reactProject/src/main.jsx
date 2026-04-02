import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const ReactElement = {
  type: 'h1',
  props: {
    title: 'Hello World',
    className: 'title',
  },
  children: 'Hello AI - IT World',
}

const anotherReactElement = (
  <a href="https://www.google.com" target="_blank">Click me</a>
)

const thirdReactElement = React.createElement(
  'h1', {
    title: 'Hello World',
    className: 'title',
  },
  'This is a professional courtesy !!',
  anotherUser
)

const anotherUser = ' steve smith'

createRoot(document.getElementById('root')).render(
  // <App />
  thirdReactElement
)
