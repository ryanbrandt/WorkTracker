import {takeLatest, put, all} from 'redux-saga/effects';

import * as a from './actionTypes';

function* authorize(action) {
  // api call
  const {credentials} = action;

  yield put({type: a.AUTHORIZATION_SUCCESS});
}

function* watchRequestAuthorization() {
  const action = yield takeLatest(a.REQUEST_AUTHORIZATION, authorize);
}

export default function* authSaga() {
  yield all([watchRequestAuthorization()]);
}
