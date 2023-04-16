import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import './App.css'

function App() {
  const [listaColaboradores, setlistaColaboradores] = useState(BaseColaboradores)
  const [nuevoColaboradorNombre, setNuevoColaboradorNombre] = useState('')
  const [nuevoColaboradorCorreo, setNuevoColaboradorCorreo] = useState('')
  const [mostrar, setMostrar] = useState(listaColaboradores)

    const enviarFormulario = (e) => {
        e.preventDefault()
        setMostrar([...listaColaboradores, {nombre: nuevoColaboradorNombre, correo: nuevoColaboradorCorreo }])
        setlistaColaboradores([...mostrar, {nombre: nuevoColaboradorNombre, correo: nuevoColaboradorCorreo }])
        
    }
    const caputarInputNombre = (e) => {
        setNuevoColaboradorNombre(e.target.value)
        
    }
    const caputarInputCorreo = (e) => {
      setNuevoColaboradorCorreo(e.target.value)
  }
    const Filtro = (e) => {
        
      if (e.target.value === "") {
        setlistaColaboradores(mostrar)

      } else {

        let colaboradoresFiltrados = listaColaboradores.filter((c) => c.nombre.includes(e.target.value))
        setlistaColaboradores(colaboradoresFiltrados)
      }
    };


  return (
    
    <div>

      <div>
        Buscar Colaborador
      </div>
      <input type="text" placeholder="Nombre de colaborador" onChange={(e) => {
        Filtro(e);
      }} />
        <h1>Lista de colaboradores</h1>
        <form onSubmit={enviarFormulario}>
          <input name="nuevoColaboradorNombre" placeholder="Ingresar Nombre" onChange={caputarInputNombre} /> 
          <input name="nuevoColaboradorCorreo" placeholder="Ingresar correo electronico" onChange={caputarInputCorreo} /> 
          <button> Agregar Colaborador </button>
        </form>
 
        <ul>
          {listaColaboradores.map(colaborador =>
            <li key={colaborador.nombre} >
                {colaborador.nombre} , {colaborador.correo}
            </li>)}
        </ul>
      </div>
  )
}

export default App
