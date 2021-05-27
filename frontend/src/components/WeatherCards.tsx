import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { weather_data } from '../data';
import { objectWeather } from '../actions/weatherActions';

const WeatherCards: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cityInput, setCityInput] = useState<string>('');

  const data = useSelector((state: any) => state.weather);
  const { loading, error, weatherData } = data;

  const kelvinToCelcius = (kelvin: number) => {
    const celcius = Math.round(kelvin - 273.15);
    return celcius;
  };
  const kelvinToFahrenheit = (kelvin: number) => {
    const fahrenheit = Math.round(((kelvin - 273.15) * 9) / 5 + 32);
    return fahrenheit;
  };

  const cityInputChangeHandler = (e: any) => {
    setCityInput(e.target.value);
    // console.log(cityInput);
  };

  const citySearchButtonClickHandler = () => {
    // console.log(cityInput);
    dispatch(objectWeather(cityInput));
  };

  useEffect(() => {
    console.log('re-render');
    dispatch(objectWeather('Seattle'));
    setIsLoading(false);
  }, []);

  // console.log(weatherData);
  // const weatherData = weather_data;

  if (loading || error) {
    console.log(loading);
    console.log(error);
    return <div>Loading..</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Card className='text-white bg-primary h-100'>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder={weatherData?.name}
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
          className='form-group-lg'
          onChange={(e) => cityInputChangeHandler(e)}
        />
        <InputGroup.Append>
          <Button
            variant='outline-secondary p-2 d-flex justify-content-center align-items-center'
            onClick={citySearchButtonClickHandler}
          >
            <i className='city-weather-search-btn fas fa-search-location'></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Card.Header>{weatherData?.name} Today's Weather:</Card.Header>
      <Card.Body className='w-100'>
        <Card.Title style={{ fontSize: '1.6rem' }} className='text-center'>
          {weatherData?.weather[0].main}
        </Card.Title>
        <Card.Body
          className='d-flex justify-content-around align-items-center p-0'
          style={{ fontSize: '0.5rem' }}
        >
          <ul className='mb-0'>
            <Card.Text style={{ fontSize: '2.5rem' }} className='mb-0'>
              {kelvinToFahrenheit(weatherData?.main.temp)}&deg;F
            </Card.Text>
            <Card.Text className='mb-0'>
              Height:{' '}
              <span>{kelvinToFahrenheit(weatherData?.main.temp_max)}</span>
              &deg;/ Low:{' '}
              <span>{kelvinToFahrenheit(weatherData?.main.temp_min)}</span>&deg;
            </Card.Text>
            <Card.Text className='mb-0'>
              <i className='water-drip fas fa-tint'></i> Humidity:{' '}
              <span>{weatherData?.main.humidity}</span>%
            </Card.Text>
            <Card.Text className='mb-0'>
              <i className='fas fa-wind'></i> Wind:{' '}
              <span>{weatherData?.wind.speed}</span>m/s
            </Card.Text>
          </ul>
          <Card.Img
            as={Image}
            className='w-50'
            src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
            fluid={true}
            alt={weatherData?.weather[0].description}
          />
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default WeatherCards;
