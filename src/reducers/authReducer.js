import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/authActions';

const initialState = {
    isAuthenticated: false,
    user: null,
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          user: action.payload,
        };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: action.payload,
            }
      default:
        return state;
    };
};