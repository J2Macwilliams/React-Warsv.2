import React from 'react';

import CardGrid from './Components/cardGrid';

import styled from 'styled-components';
import './App.css';
import bgrnd from './sw-bg.jpg';
import xwing from './x-wing.jpg';

const Background = styled.div`
	background-image: url(${bgrnd});
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	flex: 1 0 auto;

	@media (max-width: 600px) {
		background-image: url(${xwing});
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
    flex: 1 0 auto;
    padding: 20px 0;
	}
`;

const Container = styled.div`
  height: 100vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	box-sizing: border-box;
	
`;
const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div className='App'>
			<Container>
				<Background>
					<CardGrid />
				</Background>
			</Container>
		</div>
	);
};

export default App;
