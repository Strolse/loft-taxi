import authReducer from "./auth";
import {loginAction, logoutAction} from "../actions"

describe("authReducer",()=>{
    it("changes the state correctly, when some user authenticates", ()=>{
        const initialState = {
            isLoggedIn: false
        }

        const changedState = {
            isLoggedIn: true,
            token: 6
        }
        expect(authReducer(initialState, loginAction(6))).toEqual(changedState);
    });

    it("changes the state correctly, when the user unauthenticates", ()=>{
        const initialState = {
            isLoggedIn: true,
            token: 6
        }

        const changedState = {
            isLoggedIn: false
        }

        expect(authReducer(initialState, logoutAction())).toEqual(changedState);
    });
})