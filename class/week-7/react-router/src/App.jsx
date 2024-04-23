import { useState, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

//suspense api 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => {
        navigate('/')
      }}>Landing</button>
      <br />
      <button onClick={() => {
        navigate('/dashboard')
      }}>Dashboard</button>
    </div>
  )
}

export default App
