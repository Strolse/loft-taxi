import { AUTH_TOKEN } from "../actions";

const initialState = {
  token: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_TOKEN:
      return { ...state, token: action.payload }

    default:
      return state;
  }
}