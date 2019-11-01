import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducer';

const initialState = {
  auth: {
    authenticated: false,
    errors: null,
  },
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    composeEnhancers(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
