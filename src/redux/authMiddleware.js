import { AUTHENTICATE, loginAction } from "../actions";
import { serverLogin } from "../asyncActions/api";

import { SAVE_CARD, dataCardAction } from "../actions";
import { serverSendCard } from "../asyncActions/api";

// import { saveToken } from "../actions";


export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload;
        const {success, token} = await serverLogin(email, password);

        if (success) {
            await store.dispatch(loginAction(token))
        }
    } 
    if(action.type === SAVE_CARD){
        const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
        const success = await serverSendCard(cardNumber, expiryDate, cardName, cvc, token);
        if (success) {
            await store.dispatch(dataCardAction(cardNumber, expiryDate, cardName, cvc, token));
        }
    }
    
    else {
        next(action)
    }
}