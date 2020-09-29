import * as React from "react";
import { Card } from "./Styled";

interface InfoNode {
	person: string;
	birthYear: string;
	height: string;
	mass: string;
	skinColor: string;
}

const CharacterCard: React.FC<InfoNode> = ({
	person,
	birthYear,
	height,
	mass,
	skinColor,
}: InfoNode) => {
	return (
		<Card>
			<h2>{person}</h2>
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
			<h4>
				Skin tone:
				{skinColor}
			</h4>
		</Card>
	);
};

export default CharacterCard;
