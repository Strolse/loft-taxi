import { createActions } from "redux-actions";

export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"

export const SAVE_CARD = "SAVE_CARD"
export const AUTH_TOKEN = "AUTH_TOKEN"

export const loginAction = (token) => ({ 
    type: LOG_IN, 
    payload: token
})
export const logoutAction = () => ({ type: LOG_OUT })
export const authenticateAction = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
})

export const saveCardAction = (cardNumber, expiryDate, cardName, cvc, token) => (
    {
        type: SAVE_CARD,
        payload: { cardNumber, expiryDate, cardName, cvc, token }
    })

export const saveToken = (token) => (
    {
        type: AUTH_TOKEN,
        payload: token
    })


