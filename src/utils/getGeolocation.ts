import { objectWeatherWithCrd } from '../actions/weatherActions';

export const getGeolocation = async () => {
  let location: any = {};
  const success = (pos: GeolocationPosition) => {
    const { latitude, longitude, accuracy } = pos.coords;
    const crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`More or less ${accuracy} meters.`);
  };

  const errorMessage = (err: GeolocationPositionError) => {
    console.warn(`ERROR MESSAGE(${err.code}): ${err.message}`);
  };

  await navigator.geolocation.getCurrentPosition(success, errorMessage);
};
