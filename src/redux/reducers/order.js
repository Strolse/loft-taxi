import { ADDRESS_LIST, COORDS } from "../actions"


const defaultState = {
    addresses: [], 
    coords: [],
    isOdered: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADDRESS_LIST: 
            return { ...state, addresses: action.payload }
        
        case COORDS:
            return {...state, coords: action.payload, isOrdered: true}

        default:
            return state
    }

}