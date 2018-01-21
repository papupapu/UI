import { all } from 'redux-saga/effects';

import newsSagas from 'sagas/news';
import peopleSagas from 'sagas/people';

export default function* rootSaga() {
  yield all([
    ...newsSagas,
    ...peopleSagas,
  ]);
}
