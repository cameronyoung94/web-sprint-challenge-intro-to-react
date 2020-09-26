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
    .get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
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
  <div className="App">
    <div>
      <h1>Pokemon Characters</h1>
    </div>
  
  </div>
  </div>
);
  }
  
export default App;
  