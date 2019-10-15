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
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
          console.log(response);
          const name = response.data.results.filter(character => 
            character.name.toLowerCase().includes(query.toLowerCase())
            );
          setInfo(name)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, [query]);
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
    return (
        <div>
           <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
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