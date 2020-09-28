import styled from 'styled-components';
import bgrnd from './sw-bg.jpg';
import xwing from './x-wing.jpg';

export const Background = styled.div`
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

export const Container = styled.div`
  height: 100vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	box-sizing: border-box;
	
`;
export const Card = styled.div`
	background: black;
	color: white;
	width: 15%;
	opacity: 0.6;
	padding: 1%;
	margin: 1%;
	border-radius: 5px;
	box-sizing: border-box;
	&:hover {
		box-shadow: -8px -8px 8px yellow;
	}
	h2 {
		color: dodgerBlue;
	}
	h3 {
		color: yellow;
  }
  
	@media (max-width: 600px) {
		width: 40%;
		background: white;
    color: black;
    opacity: 0.7;
    margin: 2%;

    &:hover {
		box-shadow: 8px 8px 8px red;
	}
	h2 {
		color: black;
	}
	h3 {
		color: red;
  }
	}
`;