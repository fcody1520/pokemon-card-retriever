import { useState } from 'react'
import axios from 'axios' 
import Card from './Card.jsx' 
import './App.css'
// We are going to pretend that this is data we got from an API



function App() {

  const [pokemonList, setPokemonList] = useState([])
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
      // console.log(response.data.pokemon[0].pokemon.name)
      let uglyPokeObjArr = response.data.pokemon
      let prettyPokeStrArr = uglyPokeObjArr.map((pokeObj) => pokeObj.pokemon.name)
      // let's cut down the arr length to be whatever the user input
      if(+limit > 0){
        let newPokeArr = prettyPokeStrArr.slice(0, +limit)
        setPokemonList(newPokeArr);
      }else{
        // if the user puts an invalid limit, then make the array empty
        setPokemonList([]);
      }

      // console.log(prettyPokeStrArr);
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
        
      </div>
    </>
  )
}

export default App
