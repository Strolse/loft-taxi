import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "../reducers/index.js";
import {rootWatcher} from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  localStorage['redux-state']?JSON.parse(localStorage['redux-state']): {},
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
  );

store.subscribe(()=>{
  localStorage['redux-state'] = JSON.stringify(store.getState());
})

sagaMiddleware.run(rootWatcher);