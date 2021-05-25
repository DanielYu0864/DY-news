import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { weather_data } from '../data';

const WeatherCards: React.FC = () => {
  // const [weatherObj, setWeatherObj] = useState<weatherInter | {}>({});
  // const [loading, setLoading] = useState(true);

  // const spitOutCelcius = (kelvin: number) => {
  //   const celcius = Math.round(kelvin - 273.15);
  //   return celcius;
  // };
  // const getWeather = async (cityName: string) => {
  //   const owmAPI = '';
  //   const { data } = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${owmAPI}`
  //   );
  //   console.log(data);
  //   setWeatherObj(data);
  // };

  // useEffect((): void => {
  //   getWeather('seattle');
  //   setLoading(false);

  //   console.log(weatherObj.cod);
  // }, []);

  // useEffect((): void => {}, [loading]);
  const { weather } = weather_data;

  const weatherInfo = weather[0];
  return (
    <Card className='text-white bg-primary h-100'>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Seattle'
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
          className='form-group-lg'
        />
        <InputGroup.Append>
          <Button variant='outline-secondary p-2 d-flex justify-content-center align-items-center'>
            <i className='city-weather-search-btn fas fa-search-location'></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Card.Header>Seattle's Weather:</Card.Header>
      <Card.Body className='w-100'>
        <Card.Title style={{ fontSize: '1.6rem' }} className='text-center'>
          {weatherInfo.main}
        </Card.Title>
        <Card.Body
          className='d-flex justify-content-around align-items-center p-0'
          style={{ fontSize: '0.6rem' }}
        >
          <ul className='mb-0'>
            <Card.Text style={{ fontSize: '2.5rem' }} className='mb-0'>
              17&deg;C
            </Card.Text>
            <Card.Text className='mb-0'>
              Height: <span>20</span>&deg;/ Low: <span>10</span>&deg;
            </Card.Text>
            <Card.Text className='mb-0'>
              Humidity: <span>80</span>%
            </Card.Text>
            <Card.Text className='mb-0'>
              Wind: <span>2</span>m/s
            </Card.Text>
          </ul>
          <Card.Img
            as={Image}
            className='w-50'
            src={`http://openweathermap.org/img/wn/${weatherInfo.icon}.png`}
            fluid={true}
            alt={weatherInfo.description}
          />
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default WeatherCards;
