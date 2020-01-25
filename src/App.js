import React from 'react';

import CardGrid from './Components/cardGrid';

import styled from "styled-components";
import './App.css';
import bgrnd from "./sw-bg.jpg";


const Container = styled.section`
  background-image: url(${bgrnd});
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  width: 100%;
  height:100vh;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Container>
        <h1 className="Header">React Wars</h1>
        <CardGrid />
      </Container>
    </div>
  );
}

export default App;
