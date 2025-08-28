import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import MyFirebaseData from './MyFirebaseData'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [helloRes, setHelloRes] = useState("");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='card'>
        <MyFirebaseData />
      </div>
      <div className='card'>
        <button onClick={async (e)=>{
          let res = await fetch('/.netlify/functions/hello-world');
          res = await res.json();
          setHelloRes(res.message);
        }}>Hello</button>
        <p>Response: {helloRes}</p>
      </div>      
      <div className='card'>
        <button onClick={async (e)=>{
          let res = await fetch('/.netlify/functions/thot');
          res = await res.json();
          setHelloRes(res.data ?? res.error);
        }}>Thot</button>
        <p>Response: {helloRes}</p>
      </div>       
    </>
  )
}

export default App
