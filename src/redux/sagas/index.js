import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';
import { paymentWatcher } from './paymentWatcher';
import { addressListWatcher } from './addressListWatcher';
import { routeWatcher } from './routeWatcher';


export function* rootWatcher() {
  yield all([
    fork(authWatcher),
    fork(paymentWatcher),
    fork(addressListWatcher),
    fork(routeWatcher)
  ])

}
