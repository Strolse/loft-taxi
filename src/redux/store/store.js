import { createStore, applyMiddleware } from "redux";

import { authMiddleware } from "../authMiddleware";
import rootReducer from "../reducers/index.js";


export const store = createStore(
  rootReducer,
  localStorage['redux-state']?JSON.parse(localStorage['redux-state']): {},
  applyMiddleware(authMiddleware)
  );


store.subscribe(()=>{
  localStorage['redux-state'] = JSON.stringify(store.getState());
})

