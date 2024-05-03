import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[render, setRender] = useState(true)
  useEffect(()=>{
    setInterval(()=>{
      setRender(!render);
    },5000)
  })
  return (
    <>
    {console.log(render)}
     {render ? <MyComponent></MyComponent>: <> </>}
    </>
  )
}


function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.error("component mounted")

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log('component unmounted')
    };
  }, []);

  // Render UI
  return <div>
    Hello from MyComponent
  </div>
}

export default App
