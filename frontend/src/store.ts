import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './reducers/newsReducers';
import { weatherReducer } from './reducers/weatherReducer';

const reducer = combineReducers({
  news: newsReducer,
  weather: weatherReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
