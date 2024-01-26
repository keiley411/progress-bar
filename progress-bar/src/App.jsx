import { useState } from 'react'
import './App.css'
import ProgressButton from './components/ProgressButton'
import Input from './components/Input'

function App() {
  const [
    percentage, setPercentageInput] = useState ();
function handleChange(event){
    setPercentageInput(event.target.value);
}

  return (
    <>
    <h1>Progress Bar</h1>
    <Input percentage = {percentage} handleChange= {handleChange}/>
    <ProgressButton percentage ={percentage} handleChange={handleChange} />
    
    </>
  )
}

export default App
