import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/authActions';

const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          user: action.payload,
          error: null
        };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: action.payload,
                error: null
            }
      default:
        return state;
    };
};