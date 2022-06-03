import { SAVE_CARD, dataCardAction } from "./actions";
import { serverSendCard } from "../asyncActions/api";

// import { saveToken } from "../actions";

export const cardMiddleware = (store) => (next) => async (action) => {
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