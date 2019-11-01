import * as a from './actionTypes';

const initialState = {
  authenticated: false,
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

    default: {
      return state;
    }
  }
}
