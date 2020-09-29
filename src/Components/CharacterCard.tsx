import * as React from "react";
import { Card } from "./Styled";

type InfoNode = {
	
	id: number
	person: string;
	birth_year: string;
	height: string;
	mass: string;
	skin_color: string;
}

const CharacterCard: React.FC<InfoNode> = ({person, birth_year,height,mass, skin_color}) => {
	return (
		<Card>
			<h2>{person}</h2>
    <h3>
    Birth Year:{birth_year}
  </h3>
			<h4>
    Height:{height}
    cm
</h4>
			<h4>
    Mass:{mass}
    kg
</h4>
    <h4>
    Skin tone:{skin_color}
  </h4>
  </Card>
	);
};

export default CharacterCard;
