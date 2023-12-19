import { useState } from 'react'
import Card from './Card.jsx' 
import './App.css'
// We are going to pretend that this is data we got from an API
const theList = ["pikachu","raichu", "voltorb"]



function App() {

  const [pokemonList, setPokemonList] = useState(theList)


  return (
    <>
      <div>
        <h1>Here are some pokemon!</h1>
        {
          pokemonList.map((ele, idx, arr) => {
            return <Card pokemon={ele}/>
          })
        }
      </div>
    </>
  )
}

export default App
