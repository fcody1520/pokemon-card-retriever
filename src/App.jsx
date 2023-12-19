import { useState } from 'react'
import axios from 'axios' 
import Card from './Card.jsx' 
import './App.css'
// We are going to pretend that this is data we got from an API
const theList = ["pikachu","raichu", "voltorb"]



function App() {

  const [pokemonList, setPokemonList] = useState(theList)
  const [limit, setLimit] = useState('6')
  const [type, setType] = useState('electric')

  function handleClick(){
    setPokemonList([...pokemonList, 'MewTwo'])
    

  }

  function handleLimit(evt){
    setLimit(evt.target.value)
  }

  function handleType(evt){
    setType(evt.target.value)
  }

  function formSubmitListener(evt){
    evt.preventDefault()
    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => {
      // successfully logs a pokemon, the first of it's type
      console.log(response.data.pokemon[0].pokemon.name)
    })
    .catch((error) => {
      console.log(error);
    })

  }

  return (
    <>
      <div>
        <h1>Here are some pokemon!</h1>
        <form onSubmit={formSubmitListener}>
          <label htmlFor='limit-input'>limit</label>
          <input type="text" id='limit-input' value={limit} onChange={handleLimit}/>
          <label htmlFor="type-input">Type</label>
          <input type="text" id='type-input' value={type} onChange={handleType}/>
          <button>Submit</button>
        </form>

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
