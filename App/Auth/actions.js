import * as a from './actionTypes';

export const requestAuthorization = credentials => {
  return {
    type: a.REQUEST_AUTHORIZATION,
    credentials,
  };
};

export const authorizationSuccess = () => {
  return {
    type: a.AUTHORIZATION_SUCCESS,
  };
};

export const authorizationError = () => {
  return {
    type: a.AUTHORIZATION_ERROR,
  };
};
