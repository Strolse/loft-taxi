export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"

export const SAVE_CARD = "SAVE_CARD"
export const DATA_CARD = "DATA_CARD"

export const LOAD_ADDRESSES = "LOAD_ADDRESSES"
export const ADDRESS_LIST = "ADDRESS_LIST"

export const GET_ROUTE = "GET_ROUTE"
export const COORDS = "COORDS"
export const EMPTY_COORDS = "EMPTY_COORDS"

export const REGISTER = "REGISTER"

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

export const dataCardAction = (cardNumber, expiryDate, cardName, cvc, token) => (
    {
        type: DATA_CARD,
        payload: { cardNumber, expiryDate, cardName, cvc, token }
    }
)

export const loadAdressesAction = () => (
    { type: LOAD_ADDRESSES }
)

export const addressListAction = (addressArr) => (
    {
        type: ADDRESS_LIST,
        payload: addressArr
    }
)

export const getRouteAction = (from, to) => (
    {
        type: GET_ROUTE,
        payload: { from, to }
    }
)

export const coordsAction = (coords) => (
    {
        type: COORDS,
        payload: coords
    }
)

export const emptyCoordsAction = () => (
    { type: EMPTY_COORDS }
)

export const registerAction = (email, password, name, surname) => (
    {
        type: REGISTER,
        payload: { email, password, name, surname }
    }
)