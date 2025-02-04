import { useState } from 'react'
import './css/Tailwind.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingLayout } from './layouts/LandingLayout'
import { LandingPage } from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route element={<LandingPage/>} path="/"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
