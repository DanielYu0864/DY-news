import axios from 'axios';
import { Dispatch } from 'redux';
import { WeatherAction } from '../constants/weatherConstants';
import { WeatherActionType } from '../api/openWeatherMapActionTypes';
import { weather_data } from '../data';

export const objectWeather =
  (city: string = 'seattle') =>
  async (dispatch: Dispatch<WeatherActionType>) => {
    try {
      dispatch({ type: WeatherAction.WEATHER_REQUEST });
      //* get api key from .env
      const apiKey: string = process.env.REACT_APP_OPENWEATHERMAP_API as string;
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      dispatch({
        type: WeatherAction.WEATHER_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WeatherAction.WEATHER_REQUEST_FAIL,
        payload: error.message,
      });
    }
  };
