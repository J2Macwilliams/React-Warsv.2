import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './characterCard';
import styled from 'styled-components';

const Grid = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const Button = styled.button`
	width: 15%;
	font-size: 2rem;
	color: yellow;
	background: black;
	border-radius: 8px;
	border: 2px solid black;
	margin: 5px;

	&:hover {
		color: black;
		background: yellow;
	}

	@media (max-width: 600px) {
		width: 30%;
		font-size: 2rem;
		color: white;
		background: black;
		border-radius: 8px;
		border: 2px solid white;
	}
`;

const Input = styled.input`
	font-size: 2rem;
	text-align: center;
	border: 2px solid black;
	border-radius: 8px;
`;

const CardGrid = () => {
	const [info, setInfo] = useState([]);
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);

	useEffect(() => {
		
			axios
				.get(`https://swapi.dev/api/people/?page=${page}`)
				.then(response => {
					
					const name = response.data.results.filter(character =>
						character.name.toLowerCase().includes(query.toLowerCase())
					);
          setInfo(name);
          
				})
				.catch(error => {
					console.log('The data was not returned', error);
				});
		
	}, [query, page]);

	

	const handleInputChange = event => {
		setQuery(event.target.value);
	};

	return (
		<div>
			<h1 className='Header'>React Wars</h1>
			<form>
				<Input
					type='text'
					onChange={handleInputChange}
					value={query}
					name='name'
					tabIndex='0'
					className='prompt search-name'
					placeholder='search by name'
					autoComplete='off'
				/>
			</form>

			<Button onClick={() => (page > 2 ? setPage(page - 1) : setPage(1))}>
				Previous
			</Button>
			<Button onClick={() => setPage(page + 1)}>Next</Button>

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
