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

export const authorizationError = error => {
  return {
    type: a.AUTHORIZATION_ERROR,
    error,
  };
};

export const requestRegistation = credentials => {
  return {
    type: a.REQUEST_REGISTRATION,
    credentials,
  };
};

export const registrationSuccess = () => {
  return {
    type: a.REGISTRATION_SUCCESS,
  };
};

export const registrationError = error => {
  return {
    type: a.REGISTRATION_ERROR,
    error,
  };
};

export const validateJWT = () => {
  return {
    type: a.VALIDATE_JWT,
  };
};

export const refreshJWT = jwt => {
  return {
    type: a.REFRESH_JWT,
    jwt,
  };
};
