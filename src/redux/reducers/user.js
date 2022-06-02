import { DATA_CARD } from "../actions";

const initialState = {
  dataCard: {
    cardNumber: "", expiryDate:'', cardName:'', cvc:''
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_CARD:
      return { ...state, dataCard: action.payload }

    default:
      return state;
  }
}