// Write your Character component here
import React from 'react';
import styled from 'styled-components'
// import reactstrap from 'reactstrap'
// import bootstrap from 'bootstrap'

const Card = styled.div`
display: flex;
flex-wrap: wrap;
width: 30%;
justify-content: space-evenly;
margin-top: 30px;
align-items: center;
padding: 20px;
background-color: #00CD00;
color: black;
margin: 5%;
border-radius: 1rem;
margin-left: 34.1%

`
const Button = styled.button`
color: white;
background-color: #0900BC;
border-radius: 9.4rem;
padding: 5%;
textAlign: "center";
width: 100%;
border: solid black .2rem;
`
function Character({character}) {
    console.log(character)
    return (
        <Card>
            <p> Name: {character.name}</p>
            <Button onClick={() =>{
                window.open(character.url)
            }}>Learn More!</Button>
        </Card>
        )
   }
   export default Character