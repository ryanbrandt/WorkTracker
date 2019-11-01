import {all} from 'redux-saga/effects';

import authSaga from '../Auth/sagas';

export default function* rootSaga() {
  yield all([authSaga()]);
}
