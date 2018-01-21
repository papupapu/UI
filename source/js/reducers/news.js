import { Map } from 'immutable';

import {
  GET_NEWS_START,
  GET_NEWS_ERROR,
  GET_NEWS_SUCCESS,
} from 'actions/news';

const initialState = Map({
  loading: false,
  error: null,
  news: null,
});

const actionsMap = {
  // Async action
  [GET_NEWS_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      news: null,
    }));
  },
  [GET_NEWS_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_NEWS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      news: action.data.articles,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
