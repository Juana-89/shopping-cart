import {useEffect, useState, use} from 'react'
import {todosPersonajes} from './funciones'

const Main = () => {
  const [personajes, setPersonajes] =useState(null)
  useEffect(() =>{
  todosPersonajes(setPersonajes)},[])
  
  return (
    <div>{personajes != null ? (personajes.map((personaje) => (
      <div key={personaje.id}>
        <img src={personaje.image}/>
        <a href="#">{personaje.name}</a>
      </div>
    ))) :('no hay personajes')}</div>
  )
}
export default Main