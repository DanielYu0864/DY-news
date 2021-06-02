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
      const dyApiKey: string = process.env.REACT_APP_DY_API as string;
      const { data } = await axios.get(
        `https://dy-news-api.herokuapp.com/api/key=${dyApiKey}/weather/${city}`
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
