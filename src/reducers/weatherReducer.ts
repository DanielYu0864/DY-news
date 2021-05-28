import { WeatherAction } from '../constants/weatherConstants';
import {
  WeatherActionType,
  IWeatherData,
} from '../api/openWeatherMapActionTypes';

export interface IWeatherState {
  loading: boolean;
  error: string | null;
  weatherData: IWeatherData;
}

const initialState: IWeatherState = {
  loading: false,
  error: null,
  weatherData: {
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    weather: {
      id: 200,
      main: '',
      description: '',
      icon: '',
    },
    wind: {
      deg: 0,
      speed: 0,
    },
  },
};

export const weatherReducer = (
  state: IWeatherState = initialState,
  action: WeatherActionType
) => {
  switch (action.type) {
    case WeatherAction.WEATHER_REQUEST:
      return { loading: true, error: null, weatherData: [] };
    case WeatherAction.WEATHER_REQUEST_SUCCESS:
      return { loading: false, error: null, weatherData: action.payload };
    case WeatherAction.WEATHER_REQUEST_FAIL:
      return { loading: false, error: action.payload, weatherData: [] };
    default:
      return state;
  }
};
