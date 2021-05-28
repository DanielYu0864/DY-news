import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './reducers/newsReducers';
import { weatherReducer } from './reducers/weatherReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  news: newsReducer,
  weather: weatherReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
