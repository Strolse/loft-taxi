import { ADDRESS_LIST, COORDS, EMPTY_COORDS } from "../actions"


const defaultState = {
    addresses: [], 
    coords: [],
    isOrdered: false
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADDRESS_LIST: 
            return { ...state, addresses: action.payload }
        
        case COORDS:
            return {...state, coords: action.payload, isOrdered: true}

        case EMPTY_COORDS:
            return {...state, coords: [], isOrdered: false}

        default:
            return state
    }

}