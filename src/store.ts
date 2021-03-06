import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './reducers/newsReducers';
import { newsCategoryReducer } from './reducers/newsCategoryReducer';
import { weatherReducer } from './reducers/weatherReducer';
import { geolocationReducer } from './reducers/geolocationReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  news: newsReducer,
  weather: weatherReducer,
  newsCategory: newsCategoryReducer,
  geolocation: geolocationReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
