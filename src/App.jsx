import { useState } from 'react'
import Card from './Card.jsx' 
import './App.css'
// We are going to pretend that this is data we got from an API
const theList = ["pikachu","raichu", "voltorb"]



function App() {

  const [pokemonList, setPokemonList] = useState(theList)

  function handleClick(){
    setPokemonList([...pokemonList, 'MewTwo'])
    

  }




  return (
    <>
      <div>
        <h1>Here are some pokemon!</h1>
        {
          pokemonList.map((ele, idx, arr) => {
            return <Card pokemon={ele}/>
          })
        }
        <input type="text" />
        <button onClick={handleClick}>Add pokemon</button>
      </div>
    </>
  )
}

export default App
