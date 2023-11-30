
import './App.css'
import Tarjeta from './Componentes/Tarjeta'
import { informacion } from './assets/exerciseApi'

function App(props) {
  return (
    <>
      <Tarjeta informacion = {informacion}/>
    </>
  )
}

export default App
