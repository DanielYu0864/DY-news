import React from 'react';
import { Card } from 'react-bootstrap';
import { weather_data } from '../data';

const WeatherCards: React.FC = () => {
  const { weather } = weather_data;

  const weatherInfo = weather[0];

  return (
    <Card className='text-white bg-primary h-100'>
      <Card.Body>
        <Card.Title>{weatherInfo.main}</Card.Title>
        <Card.Img
          className='w-40'
          src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
        />
        <Card.Text>{weatherInfo.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCards;
