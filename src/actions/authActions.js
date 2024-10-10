import axios from 'axios';

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = (userData) => async (dispatch) => {
    try {
      // Make an API call to the Django backend
      const response = await axios.post("http://127.0.0.1:8000/api/register/", userData);
      console.log(response.data)
      // Dispatch success action if registration is successful
      
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data, // response from API (e.g., user info, tokens)
      });
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message);
      // Dispatch fail action if there's an error
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response ? error.response.data : "quelque chase ne va pa", // API error response
      });
    }
  };