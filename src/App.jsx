import { useState } from 'react'
import { incrementar, reducir, reset } from './actions'
import { useSelector, useDispatch } from 'react-redux'
import logo from './logo.svg'
import './App.css'



function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state}</p>
        <p>
          <button type="button" onClick={() => dispatch(incrementar)}>
            Click para sumar
          </button>
          <button type="button" onClick={() => dispatch(reducir)}>
            Click para restar
          </button>
          <button type="button" onClick={() => dispatch(reset)}>
            Click para Reiniciar
          </button>
        </p>
        <p>
          A simple App whit React and Redux
        </p>
        <p>
        </p>
      </header>
    </div>
  )
}

export default App
