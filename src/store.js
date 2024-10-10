// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { authReducer } from "./reducers/authReducer";

// // Combine reducers (if you have more reducers)
// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// src/store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Correction de l'import de thunk
import { authReducer } from "./reducers/authReducer";

// Combinaison des reducers (si tu en as plusieurs)
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;