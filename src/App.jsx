import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./Card.jsx"
import './App.css'
import { VscSparkleFilled } from "react-icons/vsc";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VscSparkleFilled />
      <Card texto="Exemplo" />
        <Card texto="Outro exemplo" />
          <Card texto="Mais um exemplo" />
            
    
      <h1>Olá, Mundo!</h1>

     <div className='card'>
      Som de chuva 
      </div>

      <div className='card'> 
        Som de vento
      </div>

      <div className='card'>
        Som de Fogueira
      </div>
</>

  )
}


      export default App
