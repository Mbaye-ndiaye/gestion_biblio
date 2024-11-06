import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Correction de l'import de thunk
import { authReducer } from "./reducers/authReducer";
import booksReducer from "../src/actions/Books/bookSlice"; 

// Combinaison des reducers
const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer, // Ajout du booksReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;