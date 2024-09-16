import * as React from "react";
import { Card } from "./Styled";

interface InfoNode {
	name: string;
	birthYear: string;
	height: string;
	mass: string;
}

const CharacterCard: React.FC<InfoNode> = ({ name, birthYear, height, mass }: InfoNode) => {
	return (
		<Card>
			<h2>{name}</h2>
			<h3>
				Birth Year:
				{birthYear}
			</h3>
			<h4>
				Height:
				{height}
				cm
			</h4>
			<h4>
				Mass:
				{mass}
				kg
			</h4>
		</Card>
	);
};

export default CharacterCard;
