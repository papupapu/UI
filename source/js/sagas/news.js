import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_NEWS_START,
  GET_NEWS_ERROR,
  GET_NEWS_SUCCESS,
} from 'actions/news';
// import api from 'api';
import api from 'api/news';

// -------- Get news

function createGetNews(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getNews(options.id));
      const action = { type: GET_NEWS_SUCCESS, data };

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_NEWS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}

export const getNews = createGetNews();
export const getNewsServer = createGetNews(true);

export function* getNewsWatcher() {
  yield takeLatest(GET_NEWS_START, getNews);
}

export default [
  getNewsWatcher(),
];
