import React from 'react';
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MoviesCard = ({title,description,posterUrl,rating}) => {
    return (
        <Card className='cardStyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterUrl} className='imgStyle'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <h5>{description}</h5>
        <h5>{rating}</h5>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
};

export default MoviesCard;