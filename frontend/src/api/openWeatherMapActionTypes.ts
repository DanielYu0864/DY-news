import { WeatherAction } from '../constants/weatherConstants';

export interface IWeatherData {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

interface WeatherRequest {
  type: WeatherAction.WEATHER_REQUEST;
}
interface WeatherRequestSuccess {
  type: WeatherAction.WEATHER_REQUEST_SUCCESS;
  payload: IWeatherData;
}
interface WeatherRequestFail {
  type: WeatherAction.WEATHER_REQUEST_FAIL;
  payload: string;
}

export type WeatherActionType =
  | WeatherRequest
  | WeatherRequestSuccess
  | WeatherRequestFail;
