import * as a from './actionTypes';

const initialState = {
  authenticated: false,
  token: null,
  errors: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case a.AUTHORIZATION_SUCCESS: {
      const {token} = action;

      return {
        ...state,
        authenticated: true,
        token,
      };
    }

    case a.AUTHORIZATION_ERROR: {
      const {error} = action;

      return {
        ...state,
        error,
      };
    }

    case a.REGISTRATION_ERROR: {
      const {error} = action;

      return {
        ...state,
        registrationErrors: error,
      };
    }

    case a.REFRESH_JWT: {
      const {token} = action;

      return {
        ...state,
        token,
      };
    }

    default: {
      return state;
    }
  }
}
