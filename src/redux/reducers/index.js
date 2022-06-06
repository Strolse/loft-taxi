import { combineReducers } from "redux";
import authReducer from "./auth"
import userReducer from "./user"
import orderReducer from "./order"


export default combineReducers({
    auth: authReducer,
    user: userReducer,
    order: orderReducer
})