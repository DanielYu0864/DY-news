import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCards: React.FC = () => {
  return (
    <Card className='text-white bg-primary h-100'>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Primary card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content.Some quick
          example text to build on the card title and make up the bulk of the
          card's content.Some quick example text to build on the card title and
          make up the bulk of the card's content. Some quick example text to
          build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCards;
