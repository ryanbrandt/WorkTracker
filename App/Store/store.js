import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootSaga from './sagas';
import rootReducer from './reducer';

const initialState = {
  auth: {
    authenticated: false,
    token: null,
    errors: null,
  },
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  persistedReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    composeEnhancers(),
  ),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
