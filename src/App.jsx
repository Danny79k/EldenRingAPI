import { useState } from 'react'
import './css/Tailwind.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingLayout } from './layouts/LandingLayout'
import { LandingPage } from './pages/LandingPage'
import { BossPage } from './pages/BossPage'
import { ClassPage } from './pages/ClassPage'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BossProvider } from './providers/BossProvider'
import { Boss } from './components/Boss'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BossProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingLayout />}>
              <Route element={<LandingPage />} path="/"></Route>
              <Route element={<BossPage />} path="bosses"></Route>
              <Route element={<Boss />} path="boss/:id"></Route>
              <Route element={<ClassPage />} path="classes"></Route>
              <Route element={<NotFoundPage/>} path='*'/>
            </Route>
          </Routes>
        </BrowserRouter>
      </BossProvider>
    </>
  )
}

export default App
