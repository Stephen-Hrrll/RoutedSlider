import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LRSlider from './LRSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LRSlider />
    </>
  )
}

export default App
