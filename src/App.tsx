import React from "react";

import CardGrid from "./Components/cardGrid";

import { Container, Background } from "./Components/Styled";
import "./App.css";

const App: React.FC = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div className="App">
			<Container>
				<Background>
					<CardGrid />
  </Background>
  </Container>
  </div>
	);
};

export default App;
