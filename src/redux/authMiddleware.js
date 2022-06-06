// import { AUTHENTICATE, loginAction } from "./actions";
// import { serverLogin } from "../asyncActions/api";

// export const authMiddleware = (store) => (next) => async (action) => {
//     if (action.type === AUTHENTICATE) {
//         const { email, password } = action.payload;
//         const {success, token} = await serverLogin(email, password);

//         if (success) {
//             await store.dispatch(loginAction(token))
//         }
//     } 

//     else {
//         next(action)
//     }
// }