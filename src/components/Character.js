// Write your Character component here
import React from 'react';
// import styled from 'styled-components'
// import reactstrap from 'reactstrap'
// import bootstrap from 'bootstrap'

function Character(props) {
    console.log(props);
    return (
        <div>
            {props.name}
            <img src= {props.sprites} alt= ''/>
            <p> {props.weight} </p>
        </div>
        )
   }
   export default Character