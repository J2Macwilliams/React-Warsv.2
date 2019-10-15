import React, {useState, useEffect} from 'react';
import axios from "axios";
import Character from './characterCard';
import styled from "styled-components";

const Grid = styled.div`
width: 100%;
display: flex;
Justify-content: center;
flex-wrap: wrap;
`;

const CardGrid = () => {
    const [info, setInfo] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
          setInfo(response.data.results)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);
   
    return (
        <div>
        <Grid>
             {info.map((item, index) => {
            return (
              <Character 
                key={index} 
                name={item.name} 
                birth_year={item.birth_year} 
                height={item.height} 
                mass={item.mass} 
                skin_color={item.skin_color}
              />
            );
          })}
        </Grid>
       </div>
    );
};

export default CardGrid;