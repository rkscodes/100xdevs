import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter >
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (<div>


    <div>
      <button onClick={() => {
        navigate('/')
      }}>Home</button>

      <button onClick={() => {
        navigate('/dashboard')
      }}>Dashboard</button>
    </div>
  </div>
  )
}

export default App
