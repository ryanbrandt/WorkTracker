import {takeLatest, put, all, select} from 'redux-saga/effects';

import {getAuthToken} from './selectors';
import * as a from './actionTypes';

function* authorize(action) {
  // api call here...
  const {credentials} = action;

  yield put({type: a.AUTHORIZATION_SUCCESS});
}

function* watchRequestAuthorization() {
  const action = yield takeLatest(a.REQUEST_AUTHORIZATION, authorize);
}

function* validateJWT() {
  const token = yield select(getAuthToken);

  // api call here...
  const refreshedToken = 'foo';
  yield put({type: a.REFRESH_JWT, token: refreshedToken});
}

function* watchValidateJWT() {
  yield takeLatest(a.VALIDATE_JWT, validateJWT);
}

export default function* authSaga() {
  yield all([watchRequestAuthorization(), watchValidateJWT()]);
}
