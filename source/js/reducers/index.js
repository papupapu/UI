import { combineReducers } from 'redux';
import app from 'reducers/app';
import people from 'reducers/people';
import news from 'reducers/news';

export default combineReducers({
  app,
  people,
  news,
});
