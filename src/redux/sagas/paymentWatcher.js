import { takeEvery, call, put } from 'redux-saga/effects';
import { SAVE_CARD, dataCardAction } from '../actions';
import { serverSendCard } from '../../asyncActions/api';


export function* paymentWorker(action) {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;

    const success = yield call(
        serverSendCard, 
        cardNumber, expiryDate, cardName, cvc, token);
    if (success) {
        yield put(dataCardAction(cardNumber, expiryDate, cardName, cvc, token));
    }
}

export function* paymentWatcher() {
    yield takeEvery(SAVE_CARD, paymentWorker)

}

