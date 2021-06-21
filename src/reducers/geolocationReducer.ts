import { GeolocationAction } from '../constants/weatherConstants';
import { GeolocationActionType } from '../api/openWeatherMapActionTypes';

export interface GeolocationState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: GeolocationState = {
  loading: true,
  error: null,
  data: {},
};

export const geolocationReducer = (
  state: GeolocationState = initialState,
  action: GeolocationActionType
) => {
  switch (action.type) {
    case GeolocationAction.GEOLOCATION_REQUEST:
      return { loading: true, error: null, data: {} };
    case GeolocationAction.GEOLOCATION_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case GeolocationAction.GEOLOCATION_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
        data: {},
      };
    default:
      return state;
  }
};
