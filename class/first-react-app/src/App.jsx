import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (

//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//     </div >
//   )
// }

// export default App


function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomButton count={count} setCount={setCount}></CustomButton>
  )
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1)
  }
  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
}

export default App