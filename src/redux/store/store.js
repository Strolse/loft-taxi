import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import { authMiddleware } from "../authMiddleware";
import { cardMiddleware } from "../cardMiddleware";
import rootReducer from "../reducers/index.js";


export const store = createStore(
  rootReducer,
  localStorage['redux-state']?JSON.parse(localStorage['redux-state']): {},
  composeWithDevTools(
    applyMiddleware(authMiddleware),
    applyMiddleware(cardMiddleware)
  )
  
  );


store.subscribe(()=>{
  localStorage['redux-state'] = JSON.stringify(store.getState());
})

