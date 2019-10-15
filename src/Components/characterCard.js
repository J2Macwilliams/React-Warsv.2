import React from 'react';


const CharacterCard = props => {
    return (
      
          <div >
            <h2>{props.name}</h2>
            <h4>Birth Year: {props.birth_year}</h4>
            <h4>Height: {props.height}cm</h4>
            <h4>Mass: {props.mass}kg</h4>
            <h4>Skin tone: {props.skin_color}</h4>
          </div>
      
    );
  };
  
  export default CharacterCard;