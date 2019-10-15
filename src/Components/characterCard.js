import React from 'react';
import { Card, CardTitle, CardSubtitle, Col} from 'reactstrap';

const CharacterCard = props => {
    return (
      <Col>
        <Col >
            <Card color="danger" body className="text-center">
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
                <CardSubtitle>Height: {props.height}cm</CardSubtitle>
                <CardSubtitle>Mass: {props.mass}kg</CardSubtitle>
                <CardSubtitle>Skin tone: {props.skin_color}</CardSubtitle>
            </Card>
        </Col>
      </Col>  
    );
  };
  
  export default CharacterCard;