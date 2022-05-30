import { createStore, applyMiddleware } from "redux";

import { authMiddleware } from "../redux/authMiddleware";
import rootReducer from "../reducers/index.js";


export const store = createStore(rootReducer, applyMiddleware(authMiddleware));

