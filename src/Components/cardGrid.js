import React, {useState, useEffect} from 'react';
import axios from "axios";
import Character from './characterCard';




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
        <div>
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
        </div>
       </div>
    );
};

export default CardGrid;