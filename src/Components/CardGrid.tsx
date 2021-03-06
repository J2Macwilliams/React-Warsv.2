import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./CharacterCard";
import { Input, Button, Grid } from "./Styled";

interface InfoNode {
	id: number;
	person: string;
	birthYear: string;
	height: string;
	mass: string;
	skinColor: string;
}

const CardGrid: React.FC = () => {
	const [info, setInfo] = useState<InfoNode[]>([]);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);

	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/people/?page=${page}`)
			.then((response) => {
				console.log("response", response);
				const name = response.data.results.filter((character: { name: string }) =>
					character.name.toLowerCase().includes(query.toLowerCase())
				);
				setInfo(name);
			})
			.catch((error) => {
				console.log("The data was not returned", error);
			});
	}, [query, page]);

	const handleInputChange = (event: any) => {
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

			<Button onClick={() => (page > 2 ? setPage(page - 1) : setPage(1))}>Previous</Button>
			<Button onClick={() => setPage(page + 1)}>Next</Button>

			<Grid>
				{info.map((item: InfoNode) => {
					return (
						<Character
							key={item.id}
							person={item.person}
							birthYear={item.birthYear}
							height={item.height}
							mass={item.mass}
							skinColor={item.skinColor}
						/>
					);
				})}
			</Grid>
		</div>
	);
};

export default CardGrid;
