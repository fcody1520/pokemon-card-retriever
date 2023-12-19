import Card from './Card.jsx' 
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Here are some pokemon!</h1>
        <Card pokemon={'Pikachu'}/>
        <Card pokemon={'Raichu'}/>
        <Card pokemon={'Voltorb'}/>
      </div>
    </>
  )
}

export default App
