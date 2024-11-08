// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Importation correcte de thunk
import { authReducer } from './reducers/authReducer';
import booksReducer from './actions/Books/bookSlice'; // Chemin mis à jour
import cartReducer from './actions/panierSlice/PanierSlice'; // Assurez-vous que le chemin est correct

// Combinaison des reducers
const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
  cart: cartReducer, // Ajout du cartReducer
});

// Création du store avec thunk comme middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
