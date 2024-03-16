import React, { useState } from "react"

function App() {

  return (
    <>
      <HeaderWithButtons />
      <Header title="Ram"></Header>
    </>
  )
}
function HeaderWithButtons() {
  let [title, setTitle] = useState('My name is Ram')
  function updateTitle() {
    setTitle('My name is ' + Math.random())
  }
  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </>
  )
}

function Header({ title }) {
  return <div>{title}</div>
}

export default App