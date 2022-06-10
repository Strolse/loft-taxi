import { takeEvery, call, put } from 'redux-saga/effects';
import { AUTHENTICATE, loginAction, dataCardAction } from '../actions';
import { serverLogin, serverGetCard } from '../../asyncActions/api';


export function* authWorker(action) {
  const { email, password } = action.payload;
  const { success, token } = yield call(serverLogin, email, password);
  if (success) {
    yield put(loginAction(token));
    const {cardNumber, expiryDate, cardName, cvc, id} = yield serverGetCard(token);
    yield put(dataCardAction(cardNumber, expiryDate, cardName, cvc, id));
  }
}

export function* authWatcher() {

  yield takeEvery(AUTHENTICATE, authWorker)

}

