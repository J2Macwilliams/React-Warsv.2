import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  background: black;
  color: white;
width: 15%;
opacity: .6;
padding: 1%;
margin: 1%;
border-radius: 5px;
box-sizing: border-box;
  h2 {
    color: dodgerBlue;
  }
`;

const CharacterCard = props => {
    return (
      
          <Card >
            <h2>{props.name}</h2>
            <h4>Birth Year: {props.birth_year}</h4>
            <h4>Height: {props.height}cm</h4>
            <h4>Mass: {props.mass}kg</h4>
            <h4>Skin tone: {props.skin_color}</h4>
          </Card>
      
    );
  };
  
  export default CharacterCard;