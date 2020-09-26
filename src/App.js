import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
// import styled from 'styled-components'
// import reactstrap from 'reactstrap'
// import bootstrap from 'bootstrap'


function App() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/typhlosion")
    .then(response => {
      setCharacter(response.data)
      console.log(response)
    })
    .catch((err) => {
     console.log(err)})
}, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character name={character.name} sprites={character.sprites} weight={character.weight}/>
    </div>
    );
  }
export default App;
  