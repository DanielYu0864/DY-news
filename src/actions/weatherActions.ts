import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GeolocationAction,
  WeatherAction,
} from '../constants/weatherConstants';
import { WeatherActionType } from '../api/openWeatherMapActionTypes';
import { weather_data } from '../data';

export const objectWeather =
  (city: string = 'seattle', lang: string | null = 'en') =>
  async (dispatch: Dispatch<WeatherActionType>) => {
    try {
      dispatch({ type: WeatherAction.WEATHER_REQUEST });
      //* get api key from .env
      const dyApiKey: string = process.env.REACT_APP_DY_API as string;
      const { data } = await axios.get(
        `https://dy-news-api.herokuapp.com/api/key=${dyApiKey}/weather/${city}/${lang}`
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
export const objectWeatherWithCrd =
  (crd: any, lang: string | null = 'en') =>
  async (dispatch: Dispatch<WeatherActionType>) => {
    const { latitude, longitude } = crd;
    console.log(latitude, longitude);
    try {
      dispatch({ type: WeatherAction.WEATHER_REQUEST });
      //* get api key from .env
      const dyApiKey: string = process.env.REACT_APP_DY_API as string;
      const { data } = await axios.get(
        `https://dy-news-api.herokuapp.com/api/key=${dyApiKey}/weather/crd/${latitude}/${longitude}/${lang}`
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

export const getGeolocation = () => async (dispatch: Dispatch<any>) => {
  try {
    // dispatch({ type: WeatherAction.WEATHER_REQUEST });

    const success = async (pos: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = pos.coords;
      const crd = pos.coords;
      dispatch({
        type: GeolocationAction.GEOLOCATION_REQUEST_SUCCESS,
        payload: {
          latitude: latitude,
          longitude: longitude,
        },
      });
    };

    const errorMessage = (err: GeolocationPositionError) => {
      console.warn(`ERROR MESSAGE(${err.code}): ${err.message}`);
    };
    navigator.geolocation.getCurrentPosition(success, errorMessage);
  } catch (error) {
    dispatch({
      type: GeolocationAction.GEOLOCATION_REQUEST_FAIL,
      payload: error.message,
    });
  }
};
